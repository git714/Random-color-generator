function displayBox() {
   
  const box= document.createElement('div');
 const randomColor= '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
 
 box.innerHTML=randomColor
  box.style.border="2px solid black"
  box.style.width="100px"
  box.style.height="100px"
  
  box.style.backgroundColor=randomColor
  box.onclick=function () {

    box.remove();
    }
  
  
  document.getElementById("box").appendChild(box);
  
  }