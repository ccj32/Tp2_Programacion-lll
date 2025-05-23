function calcularArea() {
      const A = parseFloat(document.getElementById('a').value);
      const B = parseFloat(document.getElementById('b').value);
      const C = parseFloat(document.getElementById('c').value);

      if (isNaN(A) || isNaN(B) || isNaN(C)) {
        document.getElementById('resultado').textContent = "Por favor, ingrese todos los valores.";
        return;
      }

      if (A <= C) {
        document.getElementById('resultado').textContent = "La altura total (A) debe ser mayor que la altura del rectángulo (C).";
        return;
      }

      const areaRect = B * C;
      const areaTri = 0.5 * B * (A - C);
      const areaTotal = areaRect + areaTri;

      document.getElementById('resultado').textContent = `El área total del terreno es: ${areaTotal.toFixed(2)} m².`;
    }