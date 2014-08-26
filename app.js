var giraffes = [
	"http://imageshack.com/a/img513/8075/pmy2.jpg",
	"http://imageshack.com/a/img716/6818/pg3e.jpg",
	"http://imageshack.com/a/img841/2410/1jly.jpg",
	"http://imageshack.com/a/img22/2372/nwhj.jpg",
	"http://imageshack.com/a/img43/9158/kn0f.jpg",
	"http://imageshack.com/a/img28/8996/97q0.jpg",
	"http://imageshack.com/a/img841/3806/1rmq.jpg",
	"http://imageshack.com/a/img834/3808/z2s1.jpg",
	"http://imageshack.com/a/img534/714/zhvg.jpg"
	// "http://imageshack.com/a/img713/4340/qll2o.jpg",
	// "http://imageshack.com/a/img841/1048/p9r0.jpg",
	// "http://imageshack.com/a/img845/5362/u2jf.jpg",
	// "http://imageshack.com/a/img196/9597/77qr.jpg",
	// "http://imageshack.com/a/img541/5930/jhxj.jpg",
	// "http://imageshack.com/a/img19/3986/lg09.jpg",
	// "http://imageshack.com/a/img801/3701/tj83.jpg",
	// "http://imageshack.com/a/img844/1707/qzft.jpg",
	// "http://imageshack.com/a/img844/3582/v9i2.jpg",
	// "http://imageshack.com/a/img843/5578/vs08.jpg",
	// "http://imageshack.com/a/img543/3290/75z1.jpg"
];

var mice = [
	"http://imageshack.com/a/img208/5430/sug7.jpg",
	"http://imageshack.com/a/img607/9963/kypz.jpg",
	"http://imageshack.com/a/img545/5606/y8lb.jpg",
	"http://imageshack.com/a/img534/4770/5ghx.jpg",
	"http://imageshack.com/a/img203/5849/j1zq.jpg",
	"http://imageshack.com/a/img827/1525/bh08.jpg",
	"http://imageshack.com/a/img819/3659/g1jz.jpg",
	"http://imageshack.com/a/img545/6388/vlhz.jpg"
	// "http://imageshack.com/a/img513/7342/740j.jpg",
	// "http://imageshack.com/a/img24/7696/qm9m.jpg",
	// "http://imageshack.com/a/img41/9083/stfe.jpg",
	// "http://imageshack.com/a/img199/7783/rol0.jpg",
	// "http://imageshack.com/a/img607/8360/0cv3.jpg",
	// "http://imageshack.com/a/img713/5758/9p91.jpg",
	// "http://imageshack.com/a/img132/746/wcwh.jpg",
	// "http://imageshack.com/a/img577/8425/8kqr.jpg",
	// "http://imageshack.com/a/img203/3253/ywml.jpg"
];

var animalType;
// var $("#points") = $("#points").html(Number($("#points").val());

$(document).ready(function() {
	function loadImage () {
		var random = Math.random();

		if (random > 0.5) {
			animalType = 'giraffe';
			var url = giraffes[Math.floor(Math.random()*giraffes.length)];
		} 
		else{
			animalType = 'mouse';
			var url = mice[Math.floor(Math.random()*mice.length)];
		};
	
		$("#picture").attr("src", url);

	}

	loadImage();

	setInterval (function() {
		$("#time").html(Number($("#time").html())-1);

		if (Number($("#time").html()) === 0) {
			alert("Time's up! Your score was " + $("#points").html() + " points.");
			location.href="index.html";
		};

	}, 1000);


	setInterval();


	$('.AnimalButton').click(function() {

		var choice = $(this).attr('id');
		if (choice === animalType) {
			$("#points").html(Number($("#points").html())+1);
			// $("#points") + 1;
			console.log($("#points"));
		}
		else {
			var howTerrible;
			if ($("#points").html() <= 1) {
				howTerrible = "horrific";
			}
			else if ($("#points").html() <= 10) {
				howTerrible = "terrible";
			}
			else if ($("#points").html() <=20) {
				howTerrible = "mediocre"
			}
			else 
				howTerrible = "surprisingly decent"

			alert('Unfortunately, you were stupid. You got a ' + howTerrible + ' score of ' + $("#points").html() + '.'); 
			location.href="index.html";
		}

		loadImage();
	});
});
