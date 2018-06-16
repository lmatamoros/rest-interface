// ----------------------------------------------------------------//
//                Rest Client Actions controller                   //
//  @ld.matamoros@gmail.com                                               //
//  Author: Luis Matamoros                                         //
//                                                                 //
// ----------------------------------------------------------------//

/* -----------------------------------------------------------------/
    Date:    08-05-2018
    Author:  Luis Matamoros
    Changes:
       First version 
/----------------------------------------------------------------- */
"use strict"

var PostMethod = require("./methods/post"),
    PutMethod = require("./methods/put"),
    DeleteMethod = require("./methods/delete"),
    GetMethod = require("./methods/get")

var RestController = function () {
    this._postMethod = new PostMethod()
    this._putMethod_ = new PutMethod()
    this._deleteMethod = new DeleteMethod()
    this._getMethod = new GetMethod()

    this.request = function (url, type, body, callback, resArgs) {
        this[type.toLowerCase()](url, body, callback, resArgs)
    }
}

RestController.prototype.post = function (url, body, callback, resArgs) {
    let self = this
    self._postMethod.execute(url, body, callback, resArgs)
}

RestController.prototype.put = function (url, body, callback, resArgs) {
    let self = this
    self._putMethod_.execute(url, body, callback, resArgs)
}

RestController.prototype.delete = function (url, body, callback, resArgs) {
    let self = this
    self._deleteMethod.execute(url, body, callback, resArgs)
}

RestController.prototype.get = function (url, body, callback, resArgs) {
    let self = this
    self._getMethod.execute(url, body, callback, resArgs)
}

RestController.instance = null

RestController.getInstance = function () {
    if (this.instance === null) {
        this.instance = new RestController()
    }
    return this.instance
}

module.exports = RestController.getInstance()
