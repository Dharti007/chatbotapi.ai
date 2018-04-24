const taskConst = require("../ind/const/task.const")
const roomBooking = require("../ind/task/roombooking").RoomBooking

class IndServiceContext {
    constructor(message) {
        this.message = message;
    }

    authenticate() {
        const AUTH_TOKEN = 'test'
        let isAuth = false

        let promise = new Promise((resolve, reject) => {
            if (AUTH_TOKEN == this.message['auth-token'])
                resolve(true)
            else
                resolve(false)
        });
        return promise;
    }

    process() {
        this.authenticate().then((result) => {
            if (result == true) {
                let platformTask;
                switch (this.message.result.action) {
                    case taskConst.ROOMBOOK:
                        platformTask = new roomBooking();
                        break;
                }
                if (platformTask) {
                    platformTask.process();
                }
            }
            else
                return 401
        })
    }
}


// function authenticate(body) {
//     const AUTH_TOKEN = 'test'
//     let isAuth = false
//     console.log("121212" + body.headers['auth-token'])
//     let promise = new Promise((resolve, reject) => {
//         if (AUTH_TOKEN == body.body.headers['auth-token'])
//             resolve(true)
//         else
//             resolve(false)
//     });
//     return promise;
// }

// function IndServiceContext(body) {
//     console.log("dd2eqweqwe")
//     authenticate(body).then((result) => {
//         console.log("result" + result)
//         if (result == true) {
//             return new Promise(
//                 function (resolve, reject) {
//                     let platformTask;
//                     switch (this.message.body.result.action) {
//                         case taskConst.ROOMBOOK:
//                             platformTask = new roomBooking().then(dd => {
//                                 console.log("dd2 " + JSON.stringify(dd))
//                                 resolve(dd);
//                             });;
//                             break;
//                     }
//                 })
//             reject(error);
//         }
//     });
// }



exports.IndServiceContext = IndServiceContext;
