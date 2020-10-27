const chai = require('chai')
const expect = chai.expect
const sinon = require("sinon")
const aws = require('aws-sdk')
const validator = require('../service/loading')
const loadingMock = require('./loading.mock').event();

describe.only("Lambda function", () => {
	it("should return success message ", async ()=> {
        var stub = sinon.stub(aws.DynamoDB.DocumentClient.prototype, 'put').returns("Insert successful");
        var stubaws = sinon.stub(aws.config,"update").returns({region: "us-east-1"})
        let response  =  await validator.handler(loadingMock);
        expect(response).to.equal("Insert successful");
        stub.restore();
        stubaws.restore();
    })
    it("should return success in DynamoDB message ", async ()=> {
        var stuberr = sinon.stub(aws.DynamoDB.DocumentClient.prototype, 'put');
        stuberr.callsFake(function({},callback){
        let val = "insert success"
        callback(null,val);
        });
        var stubaws = sinon.stub(aws.config,"update").returns({region: "us-east-1"})
        let response  =  await validator.handler(loadingMock);
        expect(response).to.equal("Insert successful");
        stuberr.restore();
        stubaws.restore();
    })

});