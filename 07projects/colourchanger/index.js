const buttons = document.querySelectorAll(".button"); //nodelist

function log(e, button) {
    // console.log(e.target.id);
  if (e.target.id === button.id) {
    document.querySelector("body").style.backgroundColor =button.id;
  }
}
buttons.forEach((button) => {
  button.addEventListener("click", (e) => log(e, button));
});

function color() {
    var r = Math.floor(Math.random() * 10);
    var g = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

    return color;
  }
  var randomColor =color();
  console.log(randomColor); 

  

// buttons[5].addEventListener("click",(e)=>
//    setInterval(()=>{
//       document.querySelector("body").style.backgroundColor =color();
//   },1000)
// );

const interValId= setInterval(() => {
  document.querySelector("body").style.backgroundColor =color();
}, 1000);
buttons[5].addEventListener("click",()=>clearInterval(interValId));
