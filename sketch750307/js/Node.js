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