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
        print("Hola samuel encuestas on qualtrics")
        let value = call.getString("value") ?? ""
        //Qualtrics.shared.initializeProject(brandId: "claropuertorico", projectId: "ZN_aaxt7pZtTL1fNzw", extRefId: "EXT_REF_ID", completion: { (myInitializationResult) in print(myInitializationResult);})
        call.resolve(
            [
                    "value": value
                ]
        )
    }

    @objc public func openSurvey(_ call: CAPPluginCall)  {

        if let bridgeViewController = bridge?.viewController as? CAPBridgeViewController {
            Qualtrics.shared.evaluateProject { (targetingResults) in
                for (interceptID, result) in targetingResults {
                    if result.passed() {
                        call.resolve()
                        let displayed = Qualtrics.shared.display(viewController: bridgeViewController)

                    }
                }
            }
        } else {
            call.reject("No se pudo acceder al CAPBridgeViewController")
        }
    }
}
