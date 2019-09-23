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
function lowest_in_array(array)
{
    if(array.length > 0)
    {
        var menor = array[0];
        array.map((x)=>
        {
         if(distancia(x,end_node) < distancia ( menor,end_node))
         menor = x;
        })

        array.splice(array.indexOf(menor),1);
        return menor;
    }
    return 0;
}
function distancia(nodoA,nodoB)
{
    return Math.abs(nodoA.x1 - nodoB.x1) + Math.abs(nodoA.y1 - nodoB.y1);
}
function is_inside_of_array(array,object)
{
    var flag = false;
    array.map((x)=>  
    {
        if(x.x1 === object.x1 && x.x2 === object.x2 && x.y1 === object.y1 && x.y2 === object.y2 )
        flag = true
    })
    return flag;
}
function a_star(nodo_inicial,nodo_final)
{
    var open_list = [];
    open_list.push(nodo_inicial);
    
    var close_list = [];
    var current_square = "";
    //close_list.push(current_square);

    while(open_list.length > 0)
    {
        current_square = lowest_in_array(open_list);
        close_list.push(current_square);
        if(current_square !== start_node && current_square !== end_node)
        {
            current_square.color = document.getElementById("color_picker_agent1").value;
                current_square.draw();
                current_square.color = 253;
        }
        current_square.edges.map((nodo) =>
        {
            if(is_inside_of_array(close_list,nodo_final))
            {
            return "";}

            if(nodo.color !== 253 ||is_inside_of_array(close_list,nodo))
            {


            }
            else
            {
                /*
                nodo.color = document.getElementById("color_picker_agent1").value;
                nodo.draw();
                nodo.color = 253;
                */
                if(!is_inside_of_array(open_list,nodo))
                {
                    if(nodo!==current_square.parent){
                    open_list.push(nodo);
                    nodo.parent = current_square;
                    }
                }
                else
                {
                    var nuevo_padre = "";
                    open_list.map((nodo2) => {
                        if(distancia(nodo2,nodo) < distancia(current_square,nodo))
                        {
                            nuevo_padre = nodo2;
                        }
                    })
                    if(nuevo_padre != "")
                    {
                        nodo.parent = nuevo_padre;
                        current_square = nuevo_padre;
                    }
                }
            }
        })
    }
}
function draw_map()
{
    end_node.nodo.parent = "";
    start_node.nodo.parent ="";
    graph.map((renglon) =>
    {
        renglon.map((nodo) =>
        {
            nodo.draw();
            nodo.parent = "";
        })
        
    })
}
function onClickBuscar()
{
    /*
    Metodo que es llamado cada vez que se cambia la posicion de los nodos de entrada y salida  como tambien al
    darle click al boton de buscar */ 
//a_star(start_node.nodo,end_node.nodo);
draw_lines();
draw_map();
start_node.draw();
end_node.draw();
implementation();
//remove_backwards();
}

function onClickReiniciar()
{
    draw_lines();
    create_graph();
    create_edges();
    /*se reinicia el mallado , se crean los grafos de  nuevo al igual que sus vertices pero se vuelve a redibujar
    los nodos de entrada y salida*/ 
    
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

}
function remove_backwards()
{
   graph.map((renglon) => 
   {
       renglon.map((cuadro) =>
       {
           cuadro.edges.map((x) =>
           {
             x.edges.map((node) =>
             {
                 if(node.x1 ===  cuadro.x1 && node.x2 === cuadro.x2,node.y1 === cuadro.y1 && node.y2 === cuadro.y2)
                 {
                    node.edges.splice( node.edges.indexOf(node),1);
                 }
             })
           })
           
       })
   })
}
/*Funcion heuristica que mediante un preprocesado asigna a cada nodo su valor en la distancia con respecto
al nodo final*/
function heuristic_map(){
graph.map((renglon) =>{
    renglon.map((nodo) =>
    {
     if(nodo !== end_node.nodo)
     {
         nodo.weight = distancia(nodo,end_node.nodo);
     }

    })
})

}

function implementation()
{ 
    /*implementacion del algoritmo a* esta es la parte mas importante de todo el proyecto
    se utilizan dos arreglos el open list se trabaja como una cola de prioridades
    esto con el fin de siempre obtener al que tenga la minima distancia con respecto al nodo final y
    asi llegar mas rapido 
    el close list lo que hace es tener un registro de todos los nodos que ya han sido investigados tanto sus hijos

    --Importante--
    el algoritmo para cuando el open list no tiene nodos dentro lo cual significa que no se encontro la ruta al nodo final
     o el algoritmo para cuando en el close list  se encontro el nodo buscado o nodo final 
     esto quiere decir que podemos reconstruir el camino segun el padre del nodo final y asi de atras hacia adelante
     podemos encontrar un camino o un path para poder seguir 

     
    */
    var _find_path = false
    var path = [];
heuristic_map();
var ruta = [];
var open_list = [];
open_list.push(start_node.nodo);
var close_list = [];
var nodo_actual = "";

while(open_list.length > 0)
{
    open_list.sort((nodo_a,nodo_b) => {return nodo_a.weight - nodo_b.weight});
nodo_actual = open_list[0];
open_list.splice(0,1);
close_list.push(nodo_actual);

if(is_inside_of_array(close_list,end_node.nodo)){
while(nodo_actual.parent != undefined){
path.push(nodo_actual.parent)
nodo_actual = nodo_actual.parent;
}
path = path.reverse();
_find_path = true;
break;
}


if(nodo_actual !== start_node.nodo && nodo_actual != end_node.nodo){
nodo_actual.color = document.getElementById("color_picker_agent1").value;
nodo_actual.draw();
nodo_actual.color = 253;
}



nodo_actual.edges.map((x) =>
{
 if(x.color === 253)
{
    if(x !== start_node.nodo && x != end_node.nodo){
        x.color = document.getElementById("color_picker_agent2").value;
        x.draw();
        x.color = 253;
        }
if(x !== nodo_actual)
if(!is_inside_of_array(close_list,x))
if(is_inside_of_array(open_list,x))
{
    open_list.sort((nodo_a,nodo_b) => {return nodo_a.weight - nodo_b.weight});
    open_list[0].weight < nodo_actual.weight ? x.parent = open_list[0] : x.parent = nodo_actual;
}
else
{
    x.parent = nodo_actual;
    open_list.push(x);    
}
}
  

});

}
if(_find_path)
{
    path.shift();
    path.map((camino) =>
    {
       if(camino != start_node.nodo && camino != end_node.nodo)
       {
        camino.color = document.getElementById("short_color").value;
        camino.draw();
        camino.color = 253;
       }
    });
    
}
else
    {
        alert("ruta no encontrada");
        console.log("Ruta no encontrada");
    }

}


