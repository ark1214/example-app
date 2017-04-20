var request = require('supertest')
  , express = require('express');
var app = require('../app');

var randomString = function(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+_)(*&^%$#@!";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

var rs = randomString(10);
var rsReg = "/"+rs+"/"

describe('Index Page', function() {
  it("renders successfully", function(done) {
    request(app).get('/')
      .expect(200)
      .expect(/Sequelize/,done);
  })
})