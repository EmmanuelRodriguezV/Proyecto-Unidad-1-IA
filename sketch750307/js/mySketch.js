/*Declaracion de variables a utilizar
Variables importantes!
graph es el arreglo que contiene todo el grafo y dentro de el contiene una serie de renglones de tamaño x
y dentro de esos renglones se encuentran los nodos 

start_node_was_pressed es para poder obtener si el nodo fue presionado  por el raton
end_node es para saber si el nodo final fue presionado por el raton
*/

var slider_nodes;
var color_picker_agent1;
var color_picker_agent2;
var graph = [];
var row_nodes = [];
var start_node,end_node;
var selecter_value;
var agents = [];
var start_node_was_pressed,end_node_was_pressed;

function setup() {
preps();
{


}
draw_lines();
}
function draw() {
if(selecter_value != slider_nodes.value())
{
	draw_lines();
	create_graph();
	create_edges();
	selecter_value = slider_nodes.value();

	start_node = {nodo : graph[0][0],color : "#b3d236"};
	start_node['draw'] = () =>{
		const nodo = start_node['nodo'];
			fill(start_node.color);
			circle((nodo.x2-nodo.x1)/2+nodo.x1,(nodo.y2-nodo.y1)/2 +nodo.y1,(nodo.y2-nodo.y1) );
			fill(253);
	//	print("se dibujo bien");
	}
	start_node['clear'] = () =>
	{
		fill(253);
		rect(start_node.nodo.x1,start_node.nodo.y1,x_lines,y_lines);
	}
	start_node.draw();
	print(graph.length/2);
	end_node = {nodo : graph[Math.floor(graph.length/2)][Math.floor(graph[0].length/2)],color:"#038cfc"};
	end_node ['draw'] = () =>{

		const nodo = end_node.nodo;
		fill(end_node.color);
			circle((nodo.x2-nodo.x1)/2+nodo.x1,(nodo.y2-nodo.y1)/2 +nodo.y1,(nodo.y2-nodo.y1) );
			fill(253);
	}

	end_node['clear'] = () =>
	{
		end_node.nodo.color = 253;
		fill(253);
		rect(end_node.nodo.x1,end_node.nodo.y1,x_lines,y_lines);
	}
	end_node.draw();

	//console.table(start_node);
}
if(mouseIsPressed)
	{
	//	print(mouseButton)
		if(mouseButton === 'left')
		graph.map((renglon)=>{
			renglon.map((nodo) =>{
				if(nodo.is_inside(mouseX,mouseY) && nodo === start_node.nodo)
				{
                 start_node_was_pressed = true;
				}
				if(nodo.is_inside(mouseX,mouseY) && nodo === end_node.nodo)
				{
					end_node_was_pressed = true;
				}
				if(nodo.is_inside(mouseX,mouseY)){
					if(start_node_was_pressed)
					{

						start_node.clear();
						nodo.color = 253;
						start_node.nodo = nodo;
						start_node.draw();
						onClickBuscar();

					}
					else
					if(end_node_was_pressed)
					{
						nodo.color = 253;
						end_node.clear();
						end_node.nodo = nodo;
						end_node.draw();
						onClickBuscar();
					}
					else{
					nodo.color = document.getElementById("wall_color").value;
					nodo.draw();
					}
				}
			})
		})
		else
		if(mouseButton === 'right')
		{
			graph.map((renglon)=>{
				renglon.map((nodo) =>{
					if(nodo.is_inside(mouseX,mouseY)){
						nodo.color = 253;
						nodo.draw();
			
					}

				})
			})
		}
	}
}

function mouseReleased()
{
	if (start_node_was_pressed)
	{
	start_node_was_pressed = false;
	//draw_lines();
	onClickBuscar();
	}
	if(end_node_was_pressed){
	end_node_was_pressed =false;
	//draw_lines();
	onClickBuscar();
	}
}
function draw_lines()
{
	background(253);
//	x_lines = 30;
//	y_lines = 30;
	 x_lines = windowWidth/slider_nodes.value();
//	 y_lines = windowHeight/slider_nodes.value();
y_lines = x_lines;
	//dibujando el mallado horizontal
	for (var i = 100 ; i  < windowHeight; i+=y_lines )
		line(10,i,windowWidth,i);
	for(var i = 10 ; i < windowWidth; i+=x_lines)
		line(i,100,i,windowHeight);
}
function create_graph(){
	agents = [];
	var x1,x2,y1,y2;
	graph = [];
	for(var i = 10 ; i < windowWidth ; i+= x_lines)
	{
		for(var j = 100 ; j < windowHeight ; j += y_lines )
		{
			x1 = i;
			x2 = i + x_lines;
			y1 = j;
			y2 = j + y_lines;
			row_nodes.push(new Node(x1,y1,x2,y2));
		}
		graph.push(row_nodes);
		row_nodes = [];
	}

}
function create_edges()
{
	graph.map((renglon)=>
	{
     renglon.map((nodo)=>{

		 const indice_nodo = renglon.indexOf(nodo);
		 const indice_renglon = graph.indexOf(renglon);
         /*
		 if(indice_nodo === 0 )
		 {
			 nodo.edges.push(renglon[indice_nodo + 1 ]);
		 }w
		 */
		try {
			nodo.edges.push(renglon[indice_nodo-1]);
		}
		catch (error) {
		}

		try {
			nodo.edges.push(renglon[indice_nodo+1]);
		} catch (error) {
		}
		try
		{
			nodo.edges.push(graph[indice_renglon-1][indice_nodo]);
		}
		catch(error ){
		}
		try
		{
			nodo.edges.push(graph[indice_renglon+1][indice_nodo]);
		}
		catch(error)
		{

		}

		nodo.edges = nodo.edges.filter((element) => {
			if(element != 0 )
			{
				return element;
			}
		}
		)
	 })
	})
}
/*
function mousePressed() {
	graph.map((renglon) =>
	{renglon.map((nodo) =>
		{
			//circle(nodo.x1,nodo.y1,15);
			if(nodo.is_inside(mouseX,mouseY)) {
			//console.table(nodo)
			//console.log("en X:"+mouseX+" en Y:"+mouseY);
		//	console.table(nodo.edges);
		//	console.log("es el renglon: "+ graph.indexOf(renglon) + "columna" + renglon.indexOf(nodo));
			var single_agent;
			if(selected.value() ==="agregar agente 1")
			{
				single_agent = new agent(nodo,color_picker_agent1.value(),3);
			//	print(color_picker_agent1.color());
				agents.push(single_agent);
				single_agent.draw();
			}
			if(selected.value() === "agregar agente 2")
			{
				single_agent = new agent(nodo,color_picker_agent2.value(),3);
				agents.push(single_agent);
				print(color_picker_agent2.color());
				agents.push(single_agent);
				single_agent.draw();
			}


			}
		}
		)
	}
	);

}

*/
