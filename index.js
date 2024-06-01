var peso, altura, imc, caja, descr

function calcular_imc(){
    peso=parseFloat(document.getElementById("peso").value)
    altura=parseFloat(document.getElementById("altura").value)
    imc=peso/(altura*altura)
    caja=document.getElementById("imc")
    caja.value=imc

    if(imc<18.5){
        descr="Bajo peso"
        document.getElementById("descr").innerHTML = descr
    }else if(imc>=18.5 && imc<=24.9){
        descr="Adecuado"
        document.getElementById("descr").innerHTML = descr
    }else if(imc>=25.0 && imc<=29.9){
        descr="Sobrepeso"
        document.getElementById("descr").innerHTML = descr
    }else if(imc>=30.0 && imc<=34.9){
        descr="Obesidad Grado 1"
        document.getElementById("descr").innerHTML = descr
    }else if(imc>=35.0 && imc<=39.9){
        descr="Obesidad Grado 2"
        document.getElementById("descr").innerHTML = descr
    }else{
        descr="Obesidad Grado 3"
        document.getElementById("descr").innerHTML = descr
    }

}

