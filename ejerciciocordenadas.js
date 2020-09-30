// funcion 1

// calcularDistancia (coordenadaX =70 , coordenadaY = -50)

// function calcularDistancia (){

//    let cuadradoX = Math.pow(coordenadaX,2);   
//    let cuadradoY = Math.pow(coordenadaY,2);

//    let Sumacudrado = cuadradoX+coordenadaY;

//    let raizCuadrada = Math.sqrt(Sumacudrado);

//    console.log(raizCuadrada);
   
// }


// funcion flecha 

let calcularDistancia=(coordenadaX,coordenadaY)=> 
{
   let cuadradoX = Math.pow(coordenadaX,2);   
   let cuadradoY = Math.pow(coordenadaY,2);

   let Sumacudrado = cuadradoX+coordenadaY;

   let raizCuadrada = Math.sqrt(Sumacudrado);

   return (raizCuadrada);
}

   console.log(calcularDistancia(70, -50));
