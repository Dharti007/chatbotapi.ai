// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
const ReqContext = require('../../../framework/request-context')
const apiUrl = require('../const/api.const')
const index = require('../../../index')


class RoomBooking {
    constructor() {
        this.requestContext = new ReqContext.RequestContext("");
    }

    process(request) {

        let jObject = {
            "userId": "983746387768",
            "webUserId": "dharti",
            "botId": "59768aac67a4ca000c4a19be",
            "responsePath": "59768aac67a4ca000c4a19be"
        }

        this.requestContext.post(apiUrl.webUser, jObject)
            .then(response => {
                console.log(response.data);
                return response.data
            })
            .catch(error => {
                console.log(error);
            });
    }
};

// function RoomBooking() {
//     return new Promise(function (response, reject) {

//         let jObject = {
//             "userId": "983746387768",
//             "webUserId": "dharti",
//             "botId": "59768aac67a4ca000c4a19be",
//             "responsePath": "59768aac67a4ca000c4a19be"
//         }
//         let requestContext = new ReqContext.RequestContext("")
//         requestContext.post(apiUrl.webUser, jObject)
//             .then(response => {
//                 console.log(response.data);
//                 index.index(response.data)
//                 resolve(response.data)
//             })
//             .catch(error => {
//                 reject(error)
//                 console.log(error);
//             });
//     })
// }

exports.RoomBooking = RoomBooking;