var selected;
function preps(){
	//creación del slider
slider_nodes = createSlider(0,70,40);
slider_nodes.position(10,90);
slider_nodes.attribute("class","form-control-range slider");

/*Creacion del canvas*/
createCanvas(windowWidth-38, windowHeight-114);
//stroke(RGB,100,175, 216, 248);
strokeWeight(.4);
	background(253);
	const same_lines = windowWidth/slider_nodes.value();
//	 x_lines = windowWidth/slider_nodes.value();
//	 y_lines = windowHeight/slider_nodes.value();
x_lines = 30;
y_lines = 30;
	//dibujando el mallado horizontal
	for (var i = 100 ; i  < windowHeight; i+=y_lines )
		line(10,i,windowWidth,i);

	for(var i = 10 ; i < windowWidth; i+=x_lines)
    line(i,100,i,windowHeight);
  selecter_value = slider_nodes.value();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
