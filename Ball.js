class Ball{
    constructor(container, width, height, x, y, velX, velY){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;
        this.a=1;

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.borderRadius="50%";
        this.div.style.background="red";

        this.div.style.position="absolute";
        this.render();

        this.container.appendChild(this.div);
    }

    tick(){
        //사인값을 적용하기
        this.x+=this.velX;
        this.y=this.y+Math.sin(pointer.r);

        //y값은 x의 값에 sin에 비례하여 정한다 

        console.log("this.x=",this.x ,"this.y=", this.y);
    }

    render(){
        if(this.y>500){//화면밖으로 벗어나면 죽이자
            //ballArray.splice(this,1);
            //     this.container.removeChild(this.div);
        }        
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
    }
}