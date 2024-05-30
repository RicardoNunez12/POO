let numberOne = document.getElementById("num1");
        let numberTwo = document.getElementById("num2");
        let resultado = document.getElementById("resultado");

        function sumaDosNumeros() {
            let numOne = parseInt(numberOne.value);
            let numTwo = parseInt(numberTwo.value);
            let suma = numOne + numTwo;
            resultado.value = suma;
        }
        function multiplicarDosNumeros() {
            let numOne = parseInt(numberOne.value);
            let numTwo = parseInt(numberTwo.value);
            let multiplicacion = numOne * numTwo;
            resultado.value = multiplicacion;

        }
        function restarDosNumeros() {
            let numOne = parseInt(numberOne.value);
            let numTwo = parseInt(numberTwo.value);
            let resta = numOne - numTwo;
            resultado.value = resta;
        }
        function calcularPorcentaje() {
            let numOne = parseFloat(numberOne.value);
            let numTwo = parseFloat(numberTwo.value);
            let porcentaje = (numOne * numTwo) / 100;
            resultado.value = porcentaje;
        }
        function dividirDosNumeros() {
            let numOne = parseInt(numberOne.value);
            let numTwo = parseInt(numberTwo.value);
            let division = numOne / numTwo;
            resultado.value = division;
        }
        function calcularPotencia() {
            let numOne = parseFloat(numberOne.value);
            let numTwo = parseFloat(numberTwo.value);
            let potencia = Math.pow(numOne, numTwo);
            resultado.value = potencia;
        }  