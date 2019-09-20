var slider_nodes;
var color_picker_agent1;
var color_picker_agent2;
var graph = [];
var row_nodes = [];
var start_node,end_node;
var selecter_value;
var agents = [];
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

	start_node = {nodo : graph[0][0]};
	start_node['draw'] = () =>{
		const nodo = start_node['nodo'];
			fill("#000000");
			circle((nodo.x2-nodo.x1)/2+nodo.x1,(nodo.y2-nodo.y1)/2 +nodo.y1,(nodo.y2-nodo.y1) );
			fill(253);
		print("se dibujo bien");
	} 
	start_node.draw();
	end_node = {nodo:graph[graph.length-2][graph[0][5]]};
	end_node['draw'] = () =>
	{
		const nodo = start_node['nodo'];
			fill("#000000");
			circle((nodo.x2-nodo.x1)/2+nodo.x1,(nodo.y2-nodo.y1)/2 +nodo.y1,(nodo.y2-nodo.y1) );
			fill(253);
		print("se dibujo bien");
	}
	end_node.draw();

	//console.table(start_node);
}		
if(mouseIsPressed)
	{
		print(mouseButton)
		if(mouseButton === 'left')
		graph.map((renglon)=>{
			renglon.map((nodo) =>{
				if(nodo.is_inside(mouseX,mouseY)){
					nodo.color = document.getElementById("wall_color").value;
					nodo.draw();
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
function draw_lines()
{
	background(253);
	 x_lines = windowWidth/slider_nodes.value();
	 y_lines = windowHeight/slider_nodes.value();
	//dibujando el mallado horizontal
	for (var i = 100 ; i  < windowHeight; i+=y_lines )
		line(0,i,windowWidth,i);
	for(var i = 0 ; i < windowWidth; i+=x_lines)
		line(i,100,i,windowHeight);
}
function create_graph(){
	agents = [];
	var x1,x2,y1,y2;
	graph = [];
	for(var i = 0 ; i < windowWidth ; i+= x_lines)
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
		catch{
		}
		try
		{
			nodo.edges.push(graph[indice_renglon+1][indice_nodo]);
		}
		catch
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