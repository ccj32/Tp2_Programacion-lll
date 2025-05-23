function calcularIMC() {
            var peso = parseFloat(document.getElementById('peso').value);
            var estatura = parseFloat(document.getElementById('estatura').value);
            var imc = peso / (estatura * estatura);
            alert("Tu IMC es: " + imc.toFixed(2));
        }