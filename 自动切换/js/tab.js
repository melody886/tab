function $(id){
    return typeof id === "string" ? document.getElementById(id):id;
}
window.onload = tab;
function tab () {
    var index = 0;
    var timer = null;
    var lis = $("notice-title").getElementsByTagName("li");
    var divs = $("notice-content").getElementsByTagName("div");

    for(var i=0;i<lis.length;i++) {
        lis[i].id = i;
        lis[i].onmouseover = function () {
            clearInterval(timer);
            //将显示过的标签恢复及显示当前标签
            changeOption(this.id);
        }

        lis[i].onmouseout = function () {
            timer = setInterval(autoPlay,2000);
        }
    }
    if(timer){
        clearInterval(timer);
        timer=null;
    }
    timer=setInterval(autoPlay,2000);
    function autoPlay(){
        index++;
        if (index >= lis.length) {
            index = 0;
        }
        changeOption(index);
    }
    function changeOption(curIndex){
        console.log(curIndex);
        for(var j=0;j<lis.length;j++){
            lis[j].className = "";
            divs[j].style.display = "none";
        }
        //高亮显示当前页签
        lis[curIndex].className="selected";
        divs[curIndex].style.display="block";
        index=curIndex;
        }
    }
 /*
问题：为何使用this就不行呢？因为setTimeout是window对象，因此this指的是windows.
如果在lis[i]的后面使用，this就代表li对象*/
