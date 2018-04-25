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
            return platformTask.process().then(data => {
                return data;
            });
        }
    }
}

exports.PlatformServiceContext = PlatformServiceContext;