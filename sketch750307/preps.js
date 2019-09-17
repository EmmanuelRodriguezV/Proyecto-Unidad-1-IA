var selected;
function preps(){
  /*Creacion del canvas del tamaño de la ventana*/
createCanvas(windowWidth, windowHeight);
/*Creacion de los componentes
*/
 selected = createSelect();
selected.position(480,80);
selected.option('ningun agente seleccionado');
selected.option('agregar agente 1');
selected.option('agregar agente 2');
selected.attribute("class","form-control");
selected.attribute("id","selectedapp");
slider_nodes = createSlider(0,70,40);
slider_nodes.position(10,90);
color_picker_agent1 = createColorPicker("#836fff");
color_picker_agent1.position(1100,90);
color_picker_agent2 = createColorPicker("#47a6c8");
color_picker_agent2.position(800,90);
slider_nodes.attribute("class","for-control-range");
button_agent = createButton('Generar Agentes &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
button_agent.mousePressed(onClickAdd_Agent);
button_agent.attribute("type","button");
button_agent.attribute("id","formControlRange");
button_agent.attribute("class","btn btn-secondary");
var button_segregacion = createButton("Segregacion Schelling");
button_segregacion.attribute("type","button");
button_segregacion.attribute("id","formControlRange");
button_segregacion.attribute("class","btn btn-secondary");
button_segregacion.position(300,100);
button_agent.position(300,60);
createCanvas(windowWidth, windowHeight);
strokeWeight(.4);
	background(253);
	 x_lines = windowWidth/slider_nodes.value();
	 y_lines = windowHeight/slider_nodes.value();
	//dibujando el mallado horizontal
	for (var i = 100 ; i  < windowHeight; i+=y_lines )
		line(0,i,windowWidth,i);

	for(var i = 0 ; i < windowWidth; i+=x_lines)
    line(i,100,i,windowHeight);
  selecter_value = slider_nodes.value();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
