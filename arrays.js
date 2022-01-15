let ouch = "Ouch";
console.log(typeof ouch.toUpperCase); // → function console.log(ouch.toUpperCase());
// → OUCH



let secuencia = [1, 2, 3];
secuencia.push(4);
secuencia.push(5);
console.log(secuencia);
// → [1, 2, 3, 4, 5] console.log(secuencia.pop()); // → 5 console.log(secuencia);
// → [1, 2, 3, 4]



let dia1 = {
    ardilla: false,
    eventos: ["trabajo", "toque un arbol", "pizza", "salir a correr"]
    };
    
    console.log(dia1.ardilla); // → false
    
    console.log(dia1.lobo);
    // → undefined

    dia1.lobo = false;
    dia1.casa = "mama";
    
    
    console.log(dia1);
    // → false