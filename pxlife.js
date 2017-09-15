var pixelLife = function (x,y,size,life)
{
    this.x=x;
    this.y=y;
    this.size=size;   
    this.lifestate=life;    
    this.newstate= life;
    this.update = function(arrayofPixels)
    {
        this.positionx =this.x+this.w/2;
        this.positiony = this.y+this.y/2;
         var pixelarround=0;
        for (var i=0;i<arrayofPixels.length;i++)
            {
               
                if (arrayofPixels[i].lifestate)
                    {
                        if (this.x- this.size ==arrayofPixels[i].x &&this.y==arrayofPixels[i].y){
                            pixelarround++;
                        }
                        else if (this.x+this.size==arrayofPixels[i].x&&this.y==arrayofPixels[i].y)
                            {
                                pixelarround++;
                            }
                        else if (this.y-this.size==arrayofPixels[i].y&&this.x==arrayofPixels[i].x)
                            {
                                pixelarround++;
                            }
                        else if (this.y+this.size==arrayofPixels[i].y&&this.x==arrayofPixels[i].x)
                            {
                                pixelarround++;
                            }
                         else if                            (this.x+this.size==arrayofPixels[i].x&&this.y+this.size==arrayofPixels[i].y)
                            {
                                pixelarround++;
                            }
                        else if (this.x+this.size==arrayofPixels[i].x&&this.y-this.size==arrayofPixels[i].y)
                            {
                                pixelarround++;
                            }
                        else if (this.x-this.size==arrayofPixels[i].x&&this.y-this.size==arrayofPixels[i].y)
                            {
                                pixelarround++;
                            }
                          else if (this.x-this.size==arrayofPixels[i].x&&this.y-this.size==arrayofPixels[i].y)
                            {
                                pixelarround++;
                            }
                        
                    }
                             
            }
       // console.log(pixelarround);
          if (pixelarround<2&& this.lifestate)
                    {
                        this.newstate= false;
                    }
                if ((pixelarround==2 || pixelarround==3 )&& this.lifestate)
                    {
                        this.newstate= true;
                    }
                if (pixelarround>3&& this.lifestate )
                    {
                        this.newstate=false;
                    }
                if (pixelarround==3 && !this.lifestate)
                    {
                        this.newstate= true ;
                    }
    }
    this.upnewstate= function()
    {
       this.lifestate= this.newstate; 
    }
    this.draw = function(ctx)
    {
        
        if (this.lifestate)
            {
                ctx.fillStyle="#DDAAFF";
                ctx.fillRect(this.x,this.y,this.size,this.size);
            

            }
    }
}
