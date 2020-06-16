// AWS DOCS FOR REFERENCE (Hold option + click to access link from VS Code)
// https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javascript/example_code/s3 

// Credentials are set in ~/.aws/credentials on Isaac's local machine.  We need to figure out how to use those keys remotely for the heroku deployment.


var AWS = require("aws-sdk");
var uuid = require("node-uuid");
var albumBucketName = "getset-seeds";

// Set the region
AWS.config.update({
  region: "us-east-1",
});

// Initialize the Amazon Cognito credentials provider
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//   IdentityPoolId: "us-east-1:218857be-0c13-46ba-99df-30efbcf37dd0",
// });


// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2012-10-17" });

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket: "getset-seeds",
};


// Obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});

// Obtain a list of the buckets in the S3
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});
