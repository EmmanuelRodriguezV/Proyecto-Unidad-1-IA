/*Esta es la clase nodo en la cual tenemos los puntos para dibujar el cuadrado dentro del canvas con
las respectivas posiciones de x1 y y1 ,ademas de esto el arreglo llamado edges se trata acerca de los nodos vecinos
con los cuales se conecta este mismo nodo, en nuestro proyecto solo se manejan 4 direcciones adyacentes al nodo
el weight es una propiedad heuristica la cual nos dice que tanta distancia se encuentra el nodo actual
del nodo final, y el atributo de parent nos sirve mas adelanta para formar el camino mas optimo*/

class Node 
{
constructor(x1,y1,x2,y2)
{
this.x1 = x1;
this.x2 = x2;
this.y1 = y1;
this.y2 = y2;
this.edges = []
this.color = 253;
this.parent = "";
this.weight ="";
}
is_inside(x1,y1)
{return x1 > this.x1 && x1 < this.x2 && y1 > this.y1 && y1 < this.y2;}
add_vertex_node(node)
{
 return this.edges.push(node);
}
get_vertexs()
{
    return this.edges;
}
draw()
{
    fill(this.color);
    rect(this.x1,this.y1,x_lines,y_lines);
    fill(253);
}
}