Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express')
const bodyParser = require('body-parser')
const PlatformServiceContext = require('./domain/platform-service.context').PlatformServiceContext;
const app = express()
app.use(bodyParser.json())
app.set('port', (process.env.PORT || 5000))


app.listen(app.get('port'), function () {
  console.log('* Webhook service is listening on port:' + app.get('port'))
})

app.get('/', function (req, res) {
  res.send('Use the /webhook endpoint.')
})

app.get('/webhook', function (req, res) {
  res.send('You must POST your request')
})

app.post('/webhook', async function (req, res) {

  if (!req.body || !req.body.result || !req.body.result.parameters) {
    return res.status(400).send('Bad Request')
  }

  var body = req.body;
  body['domain'] = req.headers['domain']
  body['auth-token'] = req.headers['auth-token']

  var platformService = new PlatformServiceContext(body)
  platformService.process()

    .then(data => {
      res.status(200).json(
        data
      )
    });
})