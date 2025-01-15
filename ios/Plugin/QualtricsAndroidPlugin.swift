import Foundation
import Capacitor
import Qualtrics

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(QualtricsAndroidPlugin)
public class QualtricsAndroidPlugin: CAPPlugin {
    private let implementation = QualtricsAndroid()

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.echo(value)
        ])
    }
    
    @objc public func initializeQualtricsWithParams(_ call: CAPPluginCall){
      
        //Qualtrics Params from ionic
        let BrandId = call.getString("brandId") ?? ""
        let ProjectId = call.getString("projectId") ?? ""
        let BAN = call.getString("extraRefId") ?? ""
        print("initializeQualtricsWithParams", BrandId, ProjectId, BAN)
        
        //initialize
        Qualtrics.shared.initializeProject(
            brandId: BrandId,
            projectId: ProjectId,
            extRefId: BAN,
            completion: {
                (myInitializationResult) in print(myInitializationResult);
            }
        )
        
        // Send response to ionic
        call.resolve(
            ["resp": true]
        )
    }
    
    @objc public func openSurvey(_ call: CAPPluginCall)  {
        let MyID  = call.getString("interceptId") ?? ""
        let flag  = call.getString("flag") ?? ""
        let callbackParamsQualtrics  = call.getString("callbackParamsQualtrics") ?? ""
        
        Qualtrics.shared.properties.setString(string: callbackParamsQualtrics, for: "Q_EED")
        Qualtrics.shared.properties.setString(string: flag, for: "FLAG")
        
        
        print("openSurvey callbackParamsQualtrics", MyID, callbackParamsQualtrics)
        
        if let bridgeViewController = bridge?.viewController as? CAPBridgeViewController {
            Qualtrics.shared.evaluateProject { (targetingResults) in
                for (interceptID, result) in targetingResults {
                    if result.passed() {
                        call.resolve(["resp": true])
                        let displayed = Qualtrics.shared.display(viewController: bridgeViewController)
                       
                    }
                }
            }
        } else {
            call.reject("No se pudo acceder al CAPBridgeViewController")
        }
    }
}
