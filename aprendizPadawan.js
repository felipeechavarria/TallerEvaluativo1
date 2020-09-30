let leccion= (nombre,planeta,edad,estatura,fuerza) => {

    if (edad<=15){
        let mensaje = `Maestro, el aprendiz ${nombre} del planeta ${planeta} con la estatura ${estatura } metros tiene ${edad} años debe aprender a manejar la fuerza primero `;
        fuerza(null,mensaje);
        //console.log(mensaje);
    
    }else
    {
        let mensaje = `Maestro, el aprendiz ${nombre} del planeta ${planeta} con una estatura de ${estatura } metros tiene ${edad} años ya es apto para aprender a manejar el sable de luz`;
       fuerza(mensaje, null);
       // console.log(mensaje);
    }
    }
    leccion("Ahsoka Tano","Shili",12,1.88,(error,mensaje)=>{
        if (error){
            console.log(error)
            console.log(`  Joven padawan para dominar sable tranquilo respirar debes`); ;
        }
        else{
            console.log(mensaje);
            console.log(`   Joven padawan para controlar la fuerza en blanco debes poner mente`);
            }
    });
