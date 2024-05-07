import Foundation

@objc public class QualtricsAndroid: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
