var selected;
/*
La funcion preps ,se ejecuta en el setup del programa
debido a que estamos usando p5.js se necesita dos partes del programa para que funcione la libreria
la primera es el function setup() donde se preparan todos las variables y demas para 
poder funcionar en el function draw() el cual ese programa esta infinitamente corriendo
y actualizando el canvas en donde se esta funcionando asi que en esta funcion
creamos el slider el cual controla dinamicamente la cantidad de nodos en el grafo 
se crea el canvas del tamaño de la pantalla, se establece la el mallado etc,tambien llamamos a la funcion
de windows resized para que se cambian la pantalla el mallado se dibuje enteramente y no se corte
*/ 
function preps(){
	//creación del slider
slider_nodes = createSlider(0,70,40);
slider_nodes.position(10,90);
slider_nodes.attribute("class","form-control-range slider");

/*Creacion del canvas*/
createCanvas(windowWidth, windowHeight);
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
onClickReiniciar();
draw();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
