

var resultado;
var x,y;
var ax,ay;
var w,h
var cont=0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  w=windowWidth/2
  h=windowHeight/2
}

function draw() {
  //Esquina Superior izquierda
  DDA(0,0,windowWidth,windowHeight)
  //Esquina Superior derecha
  DDA(windowWidth,0,0,windowHeight)
  //Vertical
  DDA(w,0,w,windowHeight)
  //Horizontal
  DDA(0,h,windowWidth,h)
  //Detenemos la llamada del algoritmo
  
}

function DDA(x1, y1, x2, y2) {
	//con este contador no se repetira el trazo del algoritmo
  if(cont<=4){
  	let dx=x2-x1
  let dy=y2-y1
  let limite

  //establecemos una condicion si el valor absoluto de dx es mayor al dy
  //el limite se convierte en el valor absoluto de la posición dx de lo contrario dy
  if(Math.abs(dx)>Math.abs(dy))
    limite=Math.abs(dx)
  else
    limite=Math.abs(dy)

  let xi=dx/limite
  let yi=dy/limite

  let x=x1
  let y= y1
  
  for(let i=0;i<limite;i++)
  {
	    point(x, y)
	    x+=xi
	    y+=yi
  }
  cont++
} 
  

}