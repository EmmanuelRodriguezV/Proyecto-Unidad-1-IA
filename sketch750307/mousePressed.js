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