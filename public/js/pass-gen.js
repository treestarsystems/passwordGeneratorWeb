$("#alpha-simple").click(function(){
	$("#password-list").css("display", "block").slideDown();
	var passwords = {};
	var html = "";
	for (var i = 0; i < 20; i++) {
		passwords[i]= genRegular(20);
	}
	$.each(passwords, function(key, value) {
    		html += `${value}</br>`;
	});
	document.getElementById("password-list").innerHTML = html;
});

$("#complex").click(function(){
	$("#password-list").css("display", "block").slideDown();
//	$("#password-list").slideDown();
	var passwords = {};
	var html = "";
	for (var i = 0; i < 20; i++) {
		passwords[i]= genSpecial(20);
	}
	$.each(passwords, function(key, value) {
    		html += `${value}</br>`;
	});
	document.getElementById("password-list").innerHTML = html;
});

$("#dictionary").click(function(){
	//Image source: https://medium.com/lottie-files/a-loading-spinner-slows-down-time-heres-what-you-can-use-instead-180c29797650
	document.getElementById("password-list").innerHTML = "<img src=images/loading.gif>";
	$("#password-list").css("display", "block").slideDown();
	var html = "";
	$.get("assets/dictionary.txt", function( data ) {
		var count = data.split(/\r\n|\r|\n/).length;
		for (var i = 0; i < 20; i++) {
			var word1 = insertSpecialChars(randomCaps(data.split(/\r\n|\r|\n/)[getRandomInt(1, count)]));
			var word2 = insertSpecialChars(randomCaps(data.split(/\r\n|\r|\n/)[getRandomInt(1, count)]));
			html += `${word1}${getRandomInt(1, 99)}${word2}</br>`;
		}
		document.getElementById("password-list").innerHTML = html;
	});
});

function genSpecial(x) {
	var specialchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%_-(),;:.*"
	var text = "";

	for (var i = 0; i < x; i++)
		text += specialchar.charAt(Math.floor(Math.random() * specialchar.length));
	return text;
}

function genRegular(x) {
	var regularchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var text = "";

	for (var i = 0; i < x; i++)
		text += regularchar.charAt(Math.floor(Math.random() * regularchar.length));
	return text;
}

function randomCaps(word) {
	var position = getRandomInt(0, word.length);
	return `${replaceAt(word,position,word.charAt(position).toUpperCase())}`;
}

function insertSpecialChars(word) {
	var specialchar = "!@#$%_-(),;:.*"
	var index = getRandomInt(1, word.length);
	text = specialchar.charAt(Math.floor(Math.random() * specialchar.length));
	return word.substring(0, index) + text + word.substring(index);
}

//https://stackoverflow.com/a/1527820
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//https://gist.github.com/efenacigiray/9367920
function replaceAt(string, index, replace) {
	return string.substring(0, index) + replace + string.substring(index + 1);
}
