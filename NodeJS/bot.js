console.log('The Bot is Working');

var twit = require('twit');
var config = require('./api-keys');
var params = {
    q:"nodejs",
    count:2
}
/* Below code is for get the tweets matching a certain condition
var t = new twit(config);
t.get('search/tweets', params, callbackfunc);
function callbackfunc(err, data, response) {
var tweets = data.statuses;
for(var i=0; i<tweets.length; i++)
    {console.log(tweets[i].text);
    }
} */

var t2 = new twit(config);
var tweet = {
    status : "Sending this tweet from Node! Hello World"
}
t2.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response){
console.log(data);
}

    
