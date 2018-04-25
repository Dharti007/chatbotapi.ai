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
        const AUTH_TOKEN = 'test'
        return this.authenticate().then((result) => {
            if (result == true) {
                let serviceTask;
                switch (this.message.result.action) {
                    case taskConst.ROOMBOOK:
                        serviceTask = new roomBooking();
                        break;
                }
                if (serviceTask) {
                    return serviceTask.process();
                }
            }
            else
                return 401
        })
    }
}

exports.IndServiceContext = IndServiceContext;
