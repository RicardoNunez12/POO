const conversionFactors = {
    kilometro: 1000,
    metro: 1,
    centimetro: 0.01,
    milimetro: 0.001,
    milla: 1609.34,
    yarda: 0.9144,
    pie: 0.3048,
    pulgada: 0.0254
};

function convertirAMetros(valor, unidad) {
    if (!conversionFactors.hasOwnProperty(unidad)) {
        throw new Error("Unidad no reconocida");
    }
    return valor * conversionFactors[unidad];
}

function convertirDeMetros(valor, unidad) {
    if (!conversionFactors.hasOwnProperty(unidad)) {
        throw new Error("Unidad no reconocida");
    }
    return valor / conversionFactors[unidad];
}

function convertirMedida(valor, unidadOrigen, unidadDestino) {
    const valorEnMetros = convertirAMetros(valor, unidadOrigen);
    return convertirDeMetros(valorEnMetros, unidadDestino);
}

function realizarConversion() {
    const numberOne = document.getElementById("num1").value;
    const unidadOrigen = document.getElementById("unidadOrigen").value;
    const unidadDestino = document.getElementById("unidadDestino").value;
    const resultado = document.getElementById("resultado");

    const valorConvertido = convertirMedida(parseFloat(numberOne), unidadOrigen, unidadDestino);
    resultado.textContent = `Resultado: ${valorConvertido} ${unidadDestino}`;
}
