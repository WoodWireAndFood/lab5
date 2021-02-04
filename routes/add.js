var data = require("../data.json");

exports.addFriend = function(request, response) {    
	var name = request.query.name;
    var desc = request.query.description;
    var imageURL = "http://loremflickr.com/500/500/people";
    var toConvert = '{ "name": "' + name + '", "description": "' + desc + '", "imageURL": "' + imageURL + '" }';
    var jsonObject = JSON.parse(toConvert);
    console.log(jsonObject);
    data.friends.push(jsonObject);
    response.render('index', data);
 }