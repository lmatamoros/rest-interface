// ----------------------------------------------------------------//
//                           Get Method                            //
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

const request = require("request")

var GetMethod = function () {}

GetMethod.prototype.execute = function (url, _form, callback, resArgs) {
    let req = request.get(url, function (error, response, body) {
        if (error) {
            callback(error, null, body, resArgs)
        } else {
            callback(null, response.statusCode, body, resArgs)
        }
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

module.exports = GetMethod
