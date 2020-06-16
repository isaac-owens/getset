// AWS DOCS FOR REFERENCE (Hold option + click to access link from VS Code)
// https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javascript/example_code/s3

https: var AWS = require("aws-sdk");

// Credentials are set in ~/.aws/credentials on Isaac's local machine.  We need to figure out how to use those keys remotely for the heroku deployment.

// Set the region
AWS.config.update({
  region: "us-east-1",
});

// Create S3 service object
s3 = new AWS.S3({ apiVersion: "2012-10-17" });

// Create the parameters for calling listObjects
var bucketParams = {
  Bucket: "getset-seeds",
};

// Available actions for the s3 service object

// listAlbums;

// createAlbum;

// viewAlbum;

// addPhoto;

// deleteAlbum;

// deletePhoto;

// Call S3 to obtain a list of the objects in the bucket
s3.listObjects(bucketParams, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
