function $(id){
    return typeof id === "string" ? document.getElementById(id):id;
}
window.onload = function (){
    var index = 0;
    var timer = null;
    var lis = $("notice-title").getElementsByTagName("li");
    var divs = $("notice-content").getElementsByTagName("div");
    if(lis.length!= divs.length) return;

    for(i=0;i<lis.length;i++){
        lis[i].id=i; //为lis添加属性id即索引值
        lis[i].onmouseover = function(){
            var that = this;
            if(timer){ //判断是否有定时器
                clearTimeout(timer);
                timer = null;
            }
            timer= window.setTimeout(function(){
            for(var j=0;j<lis.length;j++){
                lis[j].className = "";
                divs[j].style.display = "none";
            }

            lis[that.id].className="selected";
            divs[that.id].style.display = "block";},500);
        }
    }
}
/*
问题：为何使用this就不行呢？因为setTimeout是window对象，因此this指的是windows.
如果在lis[i]的后面使用，this就代表li对象*/
