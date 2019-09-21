function onClickAdd_Agent()
{
    draw_lines();
    create_graph();
    create_edges();
    for (var i =0 ; i< Math.floor(Math.random() * 100+ 40); i++)
    {       
        const num_graph = Math.floor(Math.random() * graph.length);
        const num_row =  Math.floor(Math.random()* graph[0].length);
    if( i % 2 == 0 )
    {
        const single_agent = new agent(graph[num_graph][num_row],color_picker_agent1.value(),3);
        agents.push(single_agent);
        single_agent.draw();
    }
    if(i % 2 != 0)
    {
        print("si entro");
        const single_agent = new agent(graph[num_graph][num_row],color_picker_agent2.value(),3);
        agents.push(single_agent);
        single_agent.draw();
    }
    }
}
function onClickBuscar()
{
    
}
function onClickReiniciar()
{
    draw_lines();
    create_graph();
    create_edges();
	start_node = {nodo : graph[0][0],color : "#c2d8b9"};
	start_node['draw'] = () =>{
		const nodo = start_node['nodo'];
			fill(start_node.color);
			circle((nodo.x2-nodo.x1)/2+nodo.x1,(nodo.y2-nodo.y1)/2 +nodo.y1,(nodo.y2-nodo.y1) );
			fill(253);
	//	print("se dibujo bien");
	} 
	start_node.draw();
	print(graph.length/2);
	end_node = {nodo : graph[Math.floor(graph.length/2)][Math.floor(graph[0].length/2)],color:"#a1b5d8"};
	end_node ['draw'] = () =>{

		const nodo = end_node.nodo;
		fill(end_node.color);
			circle((nodo.x2-nodo.x1)/2+nodo.x1,(nodo.y2-nodo.y1)/2 +nodo.y1,(nodo.y2-nodo.y1) );
			fill(253);
	}
	end_node.draw();
}