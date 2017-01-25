'use strict'

function _respond (res, status, data, httpCode) {
  var response = {
    success: status,
    message: data
  }
  res.setHeader('content-type', 'application/json')
  res.status(httpCode).json(response)
}

module.exports.response = (res, status, data, httpCode) => {
  _respond(res, status, data, httpCode)
}
