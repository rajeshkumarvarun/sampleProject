module.exports.event = () => {
    return {
        Records:[{
            Sns:{
        "Type" : "Notification",
        "MessageId" : "22b80b92-fdea-4c2c-8f9d-bdfb0c7bf324",
        "TopicArn" : "arn:aws:sns:us-west-2:123456789012:MyTopic",
        "Subject" : "My First Message",
        "Timestamp" : "2012-05-02T00:54:06.655Z",
        "SignatureVersion" : "1",
        "Signature" : "EXAMPLEw6JRN...",
        Message:{
            "Request": {
                "Header": {
                    "trackingID": "2",
                    "trackingQualifier": "CID",
                    "siteID": "000",
                    "accountID": "123456789",
                    "timeStampAtSource": "2016-05-10 14:21:35",
                    "preferredCommunicationProtocol": "Email",
                    "communicationProtocolValue": "arun.kashyap@accenture.com",
                    "eventName": "TestEvent1",
                    "sourceName": "Source_POC",
                    "uuid": "9d238941-4ff2-47c2-8578-1433d553ca55"
                },
                "ExtAttrs": [
                    {
                        "key": "firstName",
                        "value": "Supriya"
                    }
                ]
            },
            "Customer": {
                "Details": {
                    "FirstName": "Supriya",
                    "BusinessName": "Pega Corp",
                    "BillTypeCode": "C",
                    "CustomerTypeCode": "1",
                    "VIPCode": "",
                    "City": "Bangalore",
                    "State": "KA",
                    "Zip": "560078"
                },
                "Preferences": {
                    "Email": "true",
                    "Language": "EN"
                }
            }
        }
            }
        },
        {
            Sns:{
            "Type" : "Notification",
            "MessageId" : "22b80b92-fdea-4c2c-8f9d-bdfb0c7bf324",
            "TopicArn" : "arn:aws:sns:us-west-2:123456789012:MyTopic",
            "Subject" : "My First Message",
            "Message" : "Hello world!",
            "Timestamp" : "2012-05-02T00:54:06.655Z",
            "SignatureVersion" : "1",
            "Signature" : "EXAMPLEw6JRN..."
            }
        }
    ]
    }
}