var header = document.createElement('div');

if(screen.width<1030){
    
}
// const header = document.createElement
window.addEventListener("scroll",()=>{
    var pos = scrollY;
    if(pos>0){
        document.getElementsByTagName("header")[0].className = "active";
    }
})


//pagination
const video =[
  {}

]

// makeup video
var count = 0;
        var inc = 0;
        margin = 0;
        var slider = document.getElementsByClassName("carousel-wrapper")[0];
        var itemDisplay = 0;
        if (screen.width > 990) {
            itemDisplay = document.getElementsByClassName("carousel-container")[0].getAttribute("item-diplay-d");
        }
        if (screen.width > 700 && screen.width < 990) {
          itemDisplay = document.getElementsByClassName("carousel-container")[0].getAttribute("item-diplay-t");
        }
        if (screen.width > 280 && screen.width < 700) {
          itemDisplay = document.getElementsByClassName("carousel-container")[0].getAttribute("item-diplay-m");
        }
        
        var item = document.getElementsByClassName("item");
        var itemleft = item.length % itemDisplay;
        var itemSlilde = item.length / itemDisplay;
        console.log(itemSlilde);
