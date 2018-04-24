const platform = require("../constants/platform.const");
const indServiceContext = require("../domain/ind/ind-service.context").IndServiceContext

class PlatformServiceContext {
    constructor(bodyContent) {
        this.body = bodyContent;
    }
    process() {
        let platformTask;
        switch (this.body['domain']) {
            case platform.IND_PLATFORM:
                platformTask = new indServiceContext(this.body);
                break;
        }
        if (platformTask) {
            var dd = platformTask.process();
            console.log("dd " + dd)
            return dd;
        }
    }
}


// function PlatformServiceContext(body) {
//     return new Promise(
//         function (resolve, reject) {

//             let platformTask;
//             switch (body.headers['domain']) {
//                 case platform.IND_PLATFORM:
//                     platformTask = new indServiceContext(body).then(dd => {
//                         console.log("dd " + JSON.stringify(dd))
//                     });
//                     break;
//             }
//             // if (platformTask) {
//             //     console.log("platformTask" + JSON.stringify(platformTask))
//             //     platformTask.IndServiceContext.then(dd => {
//             //         console.log("dd " + JSON.stringify(dd))
//             //         resolve(dd);
//             //     });

//             // }
//             reject(error);
//         });
// }

exports.PlatformServiceContext = PlatformServiceContext;
