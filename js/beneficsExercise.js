angular.module('beneficExerciseApp',[])
 .controller('BeneficExerciseController', function($scope) {

var paper = new Raphael(document.getElementById('canvas_container'),700,700);
$scope.signs = {'Aries':1,'Taurus':2,'Gemini':3,'Cancer':4,'Leo':5,
'Virgo':6,'Libra':7,'Scorpio':8,'Sagittarius':9,'Capricorn':10,'Aquarius':11,'Pisces':12};
$scope.ascendentSign = 12;
$scope.houseSigns = [];

Raphael.st.draggable = function() {
  var me = this,
      lx = 0,
      ly = 0,
      ox = 0,
      oy = 0,
      moveFnc = function(dx, dy) {
          lx = dx + ox;
          ly = dy + oy;
          me.transform('t' + lx + ',' + ly);
      },
      startFnc = function() {},
      endFnc = function() {
          ox = lx;
          oy = ly;
      };
  
  this.drag(moveFnc, startFnc, endFnc);
};
var sun = paper.set();
sun.push(paper.circle(120, 120, 15).attr("fill", "#FF8612"));
sun.push(paper.circle(120, 120, 5).attr("fill", "#FF0"));
sun.draggable();
var planet2 = paper.set();
// planet2.push(paper.circle(90, 90, 20).attr("fill", "#ff0"));
// planet2.draggable();
$scope.piscesAscendent = function(){
$scope.houseSigns[0] = paper.text(250, 220, "" + $scope.ascendentSign);
$scope.houseSigns[1] = paper.text(200, 210, "" + ($scope.ascendentSign - 11));
$scope.houseSigns[2] = paper.text(140, 230, "" + ($scope.ascendentSign - 10));
$scope.houseSigns[3] = paper.text(160, 290, "" + ($scope.ascendentSign - 9));
$scope.houseSigns[4] = paper.text(140, 380, "" + ($scope.ascendentSign - 8));
$scope.houseSigns[5] = paper.text(160, 440, "" + ($scope.ascendentSign - 7));
$scope.houseSigns[6] = paper.text(250, 440, "" + ($scope.ascendentSign - 6));
$scope.houseSigns[7] = paper.text(290, 440, "" + ($scope.ascendentSign - 5));
$scope.houseSigns[8] = paper.text(370, 360, "" + ($scope.ascendentSign - 4));
$scope.houseSigns[9] = paper.text(360, 320, "" + ($scope.ascendentSign - 3));
$scope.houseSigns[10] = paper.text(360, 230, "" + ($scope.ascendentSign - 2));
$scope.houseSigns[11] = paper.text(330, 210, "" + ($scope.ascendentSign - 1));
}
$scope.piscesAscendent();

$scope.setAscendentSign = function(sign){
	$scope.ascendentSign = sign;
	if(sign == 12){
		for(var i = 0; i < 12; i++){
			$scope.houseSigns[i].remove();
		}
		$scope.piscesAscendent();
	} else {
		$scope.redrawSigns();
	}	
	
}

$scope.redrawSigns = function(){
	console.log("redraw call");
	var currentSign = $scope.ascendentSign;
	var ascender = currentSign - 1;
	
	for(var i = 0; i <= 11; i++)
	{
		var housex = $scope.houseSigns[i].attr("x");
		var housey = $scope.houseSigns[i].attr("y");

		if(currentSign - (i+1) == ascender && currentSign < 12){
			if(i != 0)
			currentSign++;
		} 
		else if(currentSign == 12){
			currentSign = currentSign - 11;
		} else {
			currentSign++;
		}

		$scope.houseSigns[i].remove();		
		$scope.houseSigns[i] = paper.text(housex, housey, "" + currentSign);
	}
	
}



var houseOne = paper.rect(200,200,100,100);
houseOne.transform("r45");

var houseTwo = paper.path("M 130 230 l 100 0 0 -100 z ");
houseTwo.transform("r45");

var houseThree = paper.path("M 60 300 l 100 0 0 -100 z ");
houseThree.transform("r-45");

var houseFour = paper.rect(130,270,100,100);
houseFour.transform("r45");

var houseFive = paper.path("M 60 440 l 100 0 0 -100 z ");
houseFive.transform("r-45");

var houseSix = paper.path("M 130 510 l 100 0 0 -100 z ");
houseSix.transform("r225");

var houseSeven = paper.rect(200,340,100,100);
houseSeven.transform("r45");

var houseEight = paper.path("M 270 510 l 100 0 0 -100 z ");
houseEight.transform("r225");

var houseNine = paper.path("M 340 440 l 100 0 0 -100 z ");
houseNine.transform("r135");

var houseTen = paper.rect(270,270,100,100);
houseTen.transform("r45");

var houseEleven = paper.path("M 340 300 l 100 0 0 -100 z ");
houseEleven.transform("r135");

var houseTwelve = paper.path("M 270 230 l 100 0 0 -100 z ");
houseTwelve.transform("r45");

//houseOne.data("sign",$scope.ascendentSign);

var paper2 = new Raphael(document.getElementById('canvas_container2'),700,700);

paper2.path("M 10 100 L 120 120");

});

