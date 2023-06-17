function copyText(event) {
    event.preventDefault()
    const textToCopy = "blaimuma22@gmail.com";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Texto copiado al portapapeles: " + textToCopy);
        alert("Texto copiado al portapapeles: " + textToCopy);
      })
      .catch((error) => {
        console.error("Error al copiar el texto: " + error);
        alert("Error al copiar el texto: " + error);
      });
  }
