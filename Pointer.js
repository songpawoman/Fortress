class Pointer{
    constructor(container, width, height, x, y, velR){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.r=0;
        this.velR=velR;
        this.a=1;

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.background="red";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";        

        this.container.appendChild(this.div);
    }
    render(){
        this.div.style.transform="rotate("+this.r+"deg)";
    }
}