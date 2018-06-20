window.onload=function(){
	   function nb(name,namebox,a) {
        let rxgs=document.querySelector(name);
        // console.log(rxgs);
        let rxgsbox=document.querySelector(namebox);
        // console.log(rxgsbox);
        rxgs.onmouseenter=function(){
            rxgsbox.style.height=a;
        }
        rxgs.onmouseleave=function(){
            rxgsbox.style.height="0px";
        }
    }
    nb(".rxgs",".rxgsbox","91px");
    nb(".rxxl",".rxxlbox","170px");
    nb(".jfhl",".jfhlbox","170px");
    nb(".rxgs1",".rxgsbox1","91px");
    nb(".rxxl1",".rxxlbox1","170px");
    nb(".jfhl1",".jfhlbox1","170px");
    
    //楼层定位
    let lh=innerHeight;
    let cdl1=document.querySelector(".cdl1");
    let anniu=document.querySelector(".fanhui");
    console.log(anniu);
    window.onscroll=function() {
        let gd = document.body.scrollTop || document.documentElement.scrollTop;
        if(gd+lh>1000){
            cdl1.style.display="block";
            anniu.style.display="block";
        }
        else{
            cdl1.style.display="none";
            anniu.style.display="none";
        }
    }
    anniu.onclick=function(){
        animate(document.documentElement,{scrollTop:0});
    }
    
    //中间
    let djbottom=document.querySelectorAll(".djbottom");
    let button=document.querySelectorAll(".anniu button");
    console.log(button);
    let index=0;
    djbottom[0].style.zIndex=5;
    button[0].style.background="#4565B1";
    for(let i=0;i<djbottom.length;i++){
    	button[i].onclick=function(){
    	djbottom.forEach(function(v){
    		v.style.zIndex=0;
    	})
    	button.forEach(function(e){
    		e.style.background="#F9F9F9";
    	})
    	djbottom[i].style.zIndex=10;
        button[i].style.background="#4565B1";
        index=i;
    }
    }
    
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
