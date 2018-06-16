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
    request.get(url, function (error, response, body) {
        if (error) {
            callback(error, null, body, resArgs)
        } else {
            callback(null, response.statusCode, body, resArgs)
        }
    })
}

module.exports = GetMethod
