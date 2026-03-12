list = [];
while(true){
    let fruta = prompt("Ingrese una fruta");
    list.push(fruta);
    let respuesta = prompt("¿Desea agregar otra fruta? (si/no)");
    if(respuesta !== "si"){
        break;
    }
}
console.log("Las frutas ingresadas son:");
for(let i=0; i<list.length; i++){
    console.log(list[i]);
}