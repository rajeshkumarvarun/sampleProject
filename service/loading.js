console.log('Loading function');
const aws = require('aws-sdk')
 
exports.handler = async (event, context) => {
    aws.config.update({
        region: "us-east-1"
    })
    // Create the DynamoDB service object
    const docClient = new aws.DynamoDB.DocumentClient()
    //console.log('Received event:', JSON.stringify(event, null, 2));
    const message = event.Records[0].Sns.Message;
    //let dataIn = JSON.parse(message);
    let dataIn = JSON.parse(JSON.stringify(message));
    console.log('From SNS:', dataIn.Request.Header.eventName);
    console.log("First name ", dataIn.Customer.Details.FirstName);
    var name = true;

    var db_data = {
        TRANSACTION_ID: dataIn.Request.Header.uuid,
        EVENT_NAME: dataIn.Request.Header.eventName,
        FIRST_NAME: dataIn.Customer.Details.FirstName,
        STATUS: 'RECEIVED',
        STATUS_MESSAGE: 'Received for processing'
    }
    

    let putItem = new Promise((res, rej) => {
        let docClientRes = docClient.put({
            TableName: 'AUDIT_TABLE',
            Item: db_data
        }, (err, data) => {
            if (err) {
                rej(err);
            } else {
                console.log("Success", data)
                res("Insert successful")
            }
        })
        res(docClientRes)
    })
    let result = await putItem;
    return result;
};