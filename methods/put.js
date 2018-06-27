// ----------------------------------------------------------------//
//                           Put Method                            //
//  @ld.matamoros@gmail.com                                               //
//  Author: Luis Matamoros                                         //
//                                                                 //
// ----------------------------------------------------------------//

/* -----------------------------------------------------------------/
    Date:    14-06-2018
    Author:  Luis Matamoros
    Changes:
       First version 
/----------------------------------------------------------------- */
"use strict"

const Client = require("node-rest-client").Client

var PutMethod = function () {
    this.restClient = new Client()
}

PutMethod.prototype.execute = function (url, form, callback, resArgs) {
    let self = this
    let req = self.restClient.put(url, {
        "data": form,
        "headers": {"Content-Type": "application/json"}
    }, function (data, response) {
        callback(null, response.statusCode, data, resArgs)
    })

    req.on("requestTimeout", function (req) {
        callback("RequestTimeout", 500, null, resArgs)
    })
     
    req.on("responseTimeout", function (res) {
        callback("Response Timeout", 500, null, resArgs)
    })
    
    req.on("error", function (err) {
        callback(err, 500, null, resArgs)
    })
}

module.exports = PutMethod
