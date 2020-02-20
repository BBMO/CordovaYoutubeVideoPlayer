var cordova = require('cordova');

function YoutubeVideoPlayer() {}

YoutubeVideoPlayer.prototype.openVideo = function(YTid, callback) {
	cordova.exec(function(result) {
		console.log(result);
		if(callback){
			callback('closed');
		}
	},
	function(error) {
		console.log(error);
		if(callback){
			callback('error');
		}
	},
	"YoutubeVideoPlayer",
	"openVideo",
	[YTid]
	);
}

var YoutubeVideoPlayer = new YoutubeVideoPlayer();
module.exports = YoutubeVideoPlayer