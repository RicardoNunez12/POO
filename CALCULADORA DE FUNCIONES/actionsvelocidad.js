const conversionFactors = {
    mph: 0.44704,
    mps: 1609.34,
    kmh: 0.277778,
    kmps: 1000,
    knot: 0.514444,
    mphr: 1 / 3600,
    mps: 1
};

function convertirAMetrosPorSegundo(valor, unidad) {
    if (!conversionFactors.hasOwnProperty(unidad)) {
        throw new Error("Unidad no reconocida");
    }
    return valor * conversionFactors[unidad];
}

function convertirDeMetrosPorSegundo(valor, unidad) {
    if (!conversionFactors.hasOwnProperty(unidad)) {
        throw new Error("Unidad no reconocida");
    }
    return valor / conversionFactors[unidad];
}

function convertirVelocidad(valor, unidadOrigen, unidadDestino) {
    const valorEnMetrosPorSegundo = convertirAMetrosPorSegundo(valor, unidadOrigen);
    return convertirDeMetrosPorSegundo(valorEnMetrosPorSegundo, unidadDestino);
}

function realizarConversion() {
    const numberOne = document.getElementById("num1").value;
    const unidadOrigen = document.getElementById("unidadOrigen").value;
    const unidadDestino = document.getElementById("unidadDestino").value;
    const resultado = document.getElementById("resultado");

    const valorConvertido = convertirVelocidad(parseFloat(numberOne), unidadOrigen, unidadDestino);
    resultado.textContent = `Resultado: ${valorConvertido} ${unidadDestino}`;
}
