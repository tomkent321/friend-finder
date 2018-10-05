var path = require("path");
var friends = require("../data/friends");

module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json(friends);
       
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        var newScore = newFriend.scores;
        var total = 0;
        
        var bestMatch = 100000;
        var index = -1;

        console.log("newFriend here: ", newFriend);
        
        for(var i = 0; i < friends.length; i++){
            total = 0;

            for(var j = 0; j < newScore.length; j++){
                
                var diff = Math.abs(parseInt(newScore[j]) - friends[i].scores[j]);

                total += diff;
            }
            if(total < bestMatch){
                bestMatch = total;
                index = i;
            }
        }
        console.log("Comp % : "+ ((1000 -total)/10) + "%" );
        var compPct = ((1000 -total)/10);
        console.log('Best Match:', friends[index]);
        // friends.push(newFriend);
        res.json(friends[index]);

        console.log("res.json(friends[index]", friends[index]);
        
    });
};