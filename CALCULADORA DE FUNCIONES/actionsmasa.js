const conversionFactors = {
    tonelada: 1000000,      
    kilogramo: 1000,        
    gramo: 1,               
    miligramo: 0.001,       
    libra: 453.592,        
    onza: 28.3495           
};

function convertirAGramos(valor, unidad) {
    if (!conversionFactors.hasOwnProperty(unidad)) {
        throw new Error("Unidad no reconocida");
    }
    return valor * conversionFactors[unidad];
}

function convertirDeGramos(valor, unidad) {
    if (!conversionFactors.hasOwnProperty(unidad)) {
        throw new Error("Unidad no reconocida");
    }
    return valor / conversionFactors[unidad];
}

function convertirMasa(valor, unidadOrigen, unidadDestino) {
    const valorEnGramos = convertirAGramos(valor, unidadOrigen);
    return convertirDeGramos(valorEnGramos, unidadDestino);
}

function realizarConversion() {
    const numberOne = document.getElementById("num1").value;
    const unidadOrigen = document.getElementById("unidadOrigen").value;
    const unidadDestino = document.getElementById("unidadDestino").value;
    const resultado = document.getElementById("resultado");

    const valorConvertido = convertirMasa(parseFloat(numberOne), unidadOrigen, unidadDestino);
    resultado.textContent = `Resultado: ${valorConvertido} ${unidadDestino}`;
}
