

var a = prompt('Enter the first variable: ');
var b= prompt('enter second number');

function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(swap);
  }


function draw()
{
}

function swap(){
  console.log("a before swapping: "+a);
  console.log("b before swapping: "+b); 
  
  [a,b]=[b,a];

  console.log("a after swapping: "+a);
  console.log("b after swapping: "+b);  
}
