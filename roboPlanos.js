let robarPlanos= (numeroSerio,despegar) => {

if (numeroSerio<=10){
    let mensaje = `tenemos el plano de la estrella de la muerte ${numeroSerio}`;
    despegar(null,mensaje);
    //console.log(mensaje);

}else
{
    let mensaje = `planos equivocados `;
   despegar(mensaje, null);
    // console.log(mensaje);
}
}
robarPlanos(18, (error,mensaje)=>{
    if (error){
        console.log(error);
    }
    else{
    console.log(mensaje);
    console.log(`estamos despegando la nave`);
    }
});