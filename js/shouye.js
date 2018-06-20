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


//  轮播图
    let banner=document.querySelector(".banner");
    console.log(banner);
    let lis=document.querySelectorAll(".banner li");
    console.log(lis);
    let lbds=document.querySelectorAll(".lbd div");
    console.log(lbds);
    let index=0;
    let t=setInterval(move,2000);
//    初始化
    lis[0].style.zIndex=5;
    // lbds[0].classList.add("hot");
    lbds[0].className="hot";
    function move(){
        index++;
        if(index==lis.length){
            index=0;
        }
        lis.forEach((element)=>{
            element.style.zIndex=5;
        })
        lbds.forEach((element)=>{
            element.className="";
        })
        lis[index].style.zIndex=10;
        lbds[index].className="hot";
    }
    // 鼠标移入移出
    banner.onmouseenter=function(){
        clearInterval(t);
    }
    banner.onmouseleave=function(){
        t=setInterval(move,2000);
    }
    //点击时
    for(let i=0;i<lbds.length;i++){
        lbds[i].onclick=function(){
            lis.forEach((element)=>{
                element.style.zIndex=5;
            })
            lbds.forEach((element)=>{
                element.className="";
            })
            lbds[i].className="hot";
            lis[i].style.zIndex=10;
            index=i;
        }
    }


//  左右切换
    let zuo=document.querySelector(".zuoan");
    console.log(zuo);
    let you=document.querySelector(".youan");
    let remenlist=document.querySelector(".remenlist");
    console.log(remenlist);
    let cd=parseInt(getComputedStyle(remenlist,null).width)/2;
    console.log(cd);
    let times=0;
   you.onclick=function(){
        times++;
        if(times==2){
            times=1
        }
       remenlist.style.transform=`translateX(${-cd*times}px)`
    };
    zuo.onclick=function(){
        times--;
        if(times<0){
            times=0
        }
       remenlist.style.transform=`translateX(${-cd*times}px)`
    };
//    商品banner轮播
   function nb2(a,b){
       let lbt2=document.querySelectorAll(a);
       console.log(lbt2);
       let lbd2=document.querySelectorAll(b);
       console.log(lbd2);
       //  初始化
       lbt2[0].style.zIndex=10;
       lbd2[0].className="hot1";
       // 点击时
       for(let i=0;i<lbd2.length;i++){
           lbd2[i].onclick=function(){
               lbt2.forEach((element)=>{
                   element.style.zIndex=5;
           })
               lbd2.forEach((element)=>{
                   element.className="";
           })
               lbt2[i].style.zIndex=10;
               lbd2[i].className="hot1";
           }
       }
   }
   nb2(".sp1 li",".d1 div");
   nb2(".sp2 li",".d2 div");
    nb2(".sp3 li",".d3 div");
    nb2(".sp4 li",".d4 div");
    nb2(".sp5 li",".d5 div");
    nb2(".sp6 li",".d6 div");
    nb2(".sp7 li",".d7 div");
    nb2(".sp8 li",".d8 div");
    nb2(".sp9 li",".d9 div");
    nb2(".sp10 li",".d10 div");
    nb2(".sp11 li",".d11 div");
    nb2(".sp12 li",".d12 div");
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
}