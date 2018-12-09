window.onload=function(){

    var photo_gif=document.getElementById("photo_gif");
    var click=document.getElementById("click");
    var time=document.getElementById("time")
    var time_list=document.getElementsByTagName("span");

    function changetime(){
    var date=new Date()
    time_list[0].textContent=date.getFullYear();
    time_list[1].textContent=date.getMonth();
    time_list[2].textContent=date.getDate();
    time_list[3].textContent=date.getHours();
    time_list[4].textContent=date.getMinutes();
    time_list[5].textContent=date.getSeconds();
}
    setInterval(changetime,1000)

    flag=0
    flag2=1
    //运动函数
    function sport(){
        photo_gif.setAttribute("src","image3/"+flag+".png");
        flag+=flag2
        if(flag>=18){
            flag2=-1
        }
        else if(flag<=0){
            flag2=1
        }
    }
    timer=setInterval(sport,50)
    flag3=1
    click.onclick=function(){
        if(flag3){
            clearInterval(timer);
            click.setAttribute("value","继续")
            flag3=0 } 
        else{
            timer=setInterval(sport,50)
            click.setAttribute("value","暂停")
            flag3=1
        }
    }
}