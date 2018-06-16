// ----------------------------------------------------------------//
//                          Delete Method                          //
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

var DeleteMethod = function () {
    this.restClient = new Client()
}

DeleteMethod.prototype.execute = function (url, form, callback, resArgs) {
    let self = this
    self.restClient.delete(url, {
        "data": form,
        "headers": {"Content-Type": "application/json"}
    }, function (data, response) {
        callback(null, response.statusCode, data, resArgs)
    })
}

module.exports = DeleteMethod
