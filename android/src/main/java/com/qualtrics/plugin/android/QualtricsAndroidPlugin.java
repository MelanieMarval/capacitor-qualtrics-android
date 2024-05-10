package com.qualtrics.plugin.android;

import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.qualtrics.digital.*;

import java.util.Objects;

@CapacitorPlugin(name = "QualtricsAndroid")
public class QualtricsAndroidPlugin extends Plugin {

    @PluginMethod(returnType = PluginMethod.RETURN_NONE)
    public void initializeQualtricsWithParams(PluginCall call) {
        if (!call.getData().has("brandId") || !call.getData().has("projectId")) {
            call.reject("Must provide brandId and projectId");
            return;
        }
        String brandId = call.getString("brandId");
        String projectId = call.getString("projectId");

        Qualtrics.instance().initializeProject(brandId, projectId, getContext());

        call.resolve();
    }

    @PluginMethod()
    public void openSurvey(PluginCall call) {
        if (!call.getData().has("interceptId")) {
            call.reject("Must provide interceptId");
            return;
        }
        String interceptId = call.getString("interceptId");
        JSObject ret = new JSObject();

        Qualtrics.instance().evaluateIntercept(interceptId, targetingResult -> {
            if (targetingResult.passed()) {
                boolean isDisplay = Qualtrics.instance().displayIntercept(getContext(), interceptId, 0, true);
                if (isDisplay) {
                    ret.put("success", true);
                } else {
                    ret.put("success", false);
                    ret.put("message", "Qualtrics survey no displayed");
                }
            } else if (targetingResult.getTargetingResultStatus() != null) {
                ret.put("success", false);
                if (targetingResult.getError() != null) {
                    ret.put("message", Objects.requireNonNull(targetingResult.getError().getMessage()));
                    Log.v("Qualtrics", Objects.requireNonNull(targetingResult.getError().getMessage()));
                } else {
                    ret.put("message", targetingResult.getTargetingResultStatus().toString());
                    Log.v("Qualtrics", targetingResult.getTargetingResultStatus().toString());
                }
            }
            call.resolve(ret);
        });
    }
}

