/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: 'amzn1.application-oa2-client.334cb745be3f4d85849ee18ff8a6f3c4',
    clientSecret: '2cc78af962e9801170abdf4507e042038ebc9cc683c0b9773c42c474169960f5',
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: 'amazon.com',
    lwaApiHost: 'api.amazon.com',
    validateCertChain: true,
    sslKey: '/home/alarm/alexa/samples/javaclient/certs/server/node.key',
    sslCert: '/home/alarm/alexa/samples/javaclient/certs/server/node.crt',
    sslCaCert: '/home/alarm/alexa/samples/javaclient/certs/ca/ca.crt',
    products: {
        "alexa_pi": ["123456"], // Fill in with valid device values, eg: "testdevice1": ["DSN1234", "DSN5678"]
    },
};

module.exports = config;
