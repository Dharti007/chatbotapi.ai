const ReqContext = require('../../../framework/request-context')
const apiUrl = require('../const/api.const')
const index = require('../../../index')
const MessageResponse = require('../../../framework/message.response').MessageResponse

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

        return this.requestContext.post(apiUrl.webUser, jObject)
            .then(response => {
                return (new MessageResponse(
                    {
                        fulfillmentText: 'This is a sample response from your webhook!',
                        fulfillmentMessages: [{
                            text: {
                                text: [
                                    'hi there'
                                ]
                            }
                        }],
                        source: ''
                    }
                ))
            })
            .catch(error => {
                console.log(error);
            });
    }
};

exports.RoomBooking = RoomBooking;