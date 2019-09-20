class agent 
{
    constructor (node,color,t_rule)
    {
        this.node = node;
        this.color = color;
        this.t_rule = t_rule;
    }    
    draw()
    {
      //  fill(this.color);
      fill(this.color);
        rect(this.node.x1,this.node.y1,x_lines,y_lines);
        fill(253);
      //  print (this.color);
        
    }
}