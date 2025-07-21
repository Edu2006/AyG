const form = document.getElementById('formulario');

form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Evita que se envíe de forma tradicional

    const formData = new FormData(form);

    try {
        const response = await fetch("https://formsubmit.co/eduardoagus2006@gmail.com", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            alert("¡Mensaje enviado correctamente! Gracias por contactarnos.");
            form.reset(); // Limpia los campos
            window.location.href = "#"; // Redirige a la pagina
        } else {
            alert("Ocurrió un error al enviar el mensaje. Intentalo más tarde.");
        }
    } catch (error) {
        alert("No se pudo enviar el mensaje. Revisa tu conexión.");
    }
});