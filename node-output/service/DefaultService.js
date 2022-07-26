'use strict';


/**
 * get a student info
 *
 * qty Integer 
 * returns List
 **/
exports.productGET = function(qty) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "pro_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "qty" : 0,
  "pro_type" : "pro_type",
  "pro_name" : "pro_name"
}, {
  "pro_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "qty" : 0,
  "pro_type" : "pro_type",
  "pro_name" : "pro_name"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * create a student info
 *
 * body Product_body  (optional)
 * returns inline_response_201
 **/
exports.productPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pro_id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "qty" : 3,
  "pro_type" : "Cake",
  "pro_name" : "Danisa"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * create a new token
 *
 * body Tokens_body  (optional)
 * returns inline_response_201_2
 **/
exports.tokensPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "rw2xZkajIl"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * create a new user
 *
 * body Users_body  (optional)
 * returns inline_response_201_1
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uuid" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "username" : "Kimleng"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

