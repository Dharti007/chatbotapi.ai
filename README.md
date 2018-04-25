{
  "id": "0104cce3-abf8-4083-84ad-a91da1fbe064",
  "timestamp": "2018-04-18T08:02:57.532Z",
  "lang": "en",
  "result": {
    "source": "agent",
    "resolvedQuery": "3 pm",
    "action": "Booking",
    "actionIncomplete": false,
    "parameters": {
      "checkout-date": "15:00:00",
      "date": "2018-04-18",
      "checkin-date": "14:00:00",
      "Resource": "sun"
    },
    "contexts": [
      {
        "name": "book-room",
        "parameters": {
          "date": "2018-04-18",
          "Resource.original": "sun",
          "date.original": "today",
          "Resource": "sun",
          "checkin-date": "14:00:00",
          "checkin-date.original": "2 pm",
          "checkout-date.original": "3 pm",
          "checkout-date": "15:00:00"
        },
        "lifespan": 5
      }
    ],
    "metadata": {
      "intentId": "b994edd6-5cb1-42ef-bed9-55a6cabb7408",
      "webhookUsed": "true",
      "webhookForSlotFillingUsed": "false",
      "endConversation": true,
      "webhookResponseTime": 3316,
      "intentName": "Book Room"
    },
    "fulfillment": {
      "speech": "please wait",
      "messages": [
        {
          "type": 0,
          "speech": "please wait"
        }
      ]
    },
    "score": 1
  },
  "status": {
    "code": 206,
    "errorType": "partial_content",
    "errorDetails": "Webhook call failed. Error: 500 Internal Server Error",
    "webhookTimedOut": false
  },
  "sessionId": "ceaf2525-db51-49c1-bddf-59b80a6eaefc"
}
