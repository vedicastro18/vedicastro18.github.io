window.onload = function() {
    var paper = new Raphael(document.getElementById('sun_keywords_container'), 500, 500);

    
    var frontElement = paper.circle(100,100,90).attr({fill:"#ff0",'stroke-width': 0});
    var backElement = paper.circle(100,100,30).attr({fill:'url(images/birds.jpg)','stroke-width': 0});
    backElement.hide();
    frontElement.click(function(){
    	this.animate({
    		cx : 100,
    		cy : 100,
    		r : 30
    	},3000);
    	window.setTimeout(function(){
    	//Do nothing just time pass	
    	},3100);
    	this.hide();
    	backElement.show();
    	backElement.animate({
    		cx : 100,
    		cy : 100,
    		r : 90
    	},3000);
    	   	
    });
    backElement.click(function(){
    	this.animate({
    		cx : 100,
    		cy : 100,
    		r : 30
    	},3000);
    	window.setTimeout(function(){
    	//Do nothing just time pass	
    	},3100);
    	this.hide(); 
    	frontElement.show();
    	frontElement.animate({
    		cx : 100,
    		cy : 100,
    		r : 90
    	},3000);
    	
    });
    
}