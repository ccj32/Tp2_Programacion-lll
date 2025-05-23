function validar() {
      const nombre = document.getElementById('nombre').value.trim();
      const apellido = document.getElementById('apellido').value.trim();
      const edad = parseInt(document.getElementById('edad').value);
      const altura = parseFloat(document.getElementById('altura').value);
      const correo = document.getElementById('correo').value.trim();

      let errores = [];

      if (!nombre || nombre.length > 50) {
        errores.push("El nombre no puede estar vacío ni superar los 50 caracteres.");
      }

      if (!apellido || apellido.length > 50) {
        errores.push("El apellido no puede estar vacío ni superar los 50 caracteres.");
      }

      if (isNaN(edad) || edad < 0) {
        errores.push("La edad no puede ser negativa.");
      } else if (edad < 18) {
        errores.push("La persona debe ser mayor de edad (18 años o más).");
      }

      if (isNaN(altura) || altura < 0 || altura > 230) {
        errores.push("La altura debe ser entre 0 y 230 cm.");
      }

      if (!correo || !correo.includes("@")) {
        errores.push("El correo electrónico debe estar completo e incluir '@'.");
      }

      const resultado = document.getElementById('resultado');

      if (errores.length > 0) {
        resultado.style.color = "red";
        resultado.textContent = errores.join(" ");
      } else {
        resultado.style.color = "green";
        resultado.textContent = "¡Todos los datos son válidos!";
      }
    }