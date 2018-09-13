var path = require("path");
var friends = require("../data/friends");

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        console.log("Reading API");
        res.json(friends);
        console.log("friends:" , friends);

    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var newScore = newFriend.userScore;
        var total = 0;

        var bestMatch = 100000;
        var index = -1;

        console.log("newFriend here: ", newFriend);
        
        for(var i = 0; i < friends.length; i++){
            total = 0;

            for(var j = 0; j < newScore.length; j++){
                // console.log("newscorej:" + newScore[j]);
                // console.log("friendsi:" + friends[i]);
                // console.log("friendsi.scoresj:" + friends[i].scores[j]);
                
                console.log("friends:" , friends);
                var diff = Math.abs(newScore[j] - friends[i].scores[j]);

                total += diff;
            }
            if(total < bestMatch){
                bestMatch = total;
                index = i;
            }
        }
        console.log('Best Match:', friends[index]);
        friends.push(newFriend);
        res.json(friends[index]);
    });
};