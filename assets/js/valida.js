$(document).ready(function(){
								
    $("#nombre").on('input', function() {
        var nombre = $(this).val();
        var nombreValido = /^[A-Z][a-z]*$/;
        if (!nombre.match(nombreValido)) {
            $("#nombreError").text("El nombre debe comenzar con una letra mayúscula y solo contener letras.");
        } else {
            $("#nombreError").text("");
        }
    });

    $("#apellidos").on('input', function() {
        var apellidos = $(this).val();
        var apellidoValido = /^[A-Z][a-z]*$/;
        if (!apellidos.match(apellidoValido)) {
            $("#apellidosError").text("El apellido debe comenzar con una letra mayúscula y solo contener letras.");
        } else {
            $("#apellidosError").text("");
        }
    });

    $("#correo").on('input', function() {
        var correo = $(this).val();
        if (!correo.includes("@") || !correo.endsWith(".com")) {
            $("#correoError").text("El correo debe contener '@' y terminar en '.com'.");
        } else {
            $("#correoError").text("");
        }
    });

    $("#enviarBtn").click(function(){
        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();
        var correo = $("#correo").val();
        var categoria = $("#categoria").val();
        var texto = $("#texto").val();
        var fecha = $("#fecha").val();

        var nombreValido = /^[A-Z][a-z]*$/;
        var apellidoValido = /^[A-Z][a-z]*$/;

        var esValido = true;

        if (!nombre.match(nombreValido)) {
            $("#nombreError").text("El nombre debe comenzar con una letra mayúscula y solo contener letras.");
            esValido = false;
        } else {
            $("#nombreError").text("");
        }

        if (!apellidos.match(apellidoValido)) {
            $("#apellidosError").text("El apellido debe comenzar con una letra mayúscula y solo contener letras.");
            esValido = false;
        } else {
            $("#apellidosError").text("");
        }

        if (nombre === "" || apellidos === "" || correo === "" || categoria === "0" || texto === "" || fecha === "") {
            alert("Por favor, complete todos los campos.");
            esValido = false;
        }

        if (!correo.includes("@") || !correo.endsWith(".com")) {
            $("#correoError").text("Ingrese un correo electrónico válido que contenga '@' y termine en '.com'.");
            esValido = false;
        } else {
            $("#correoError").text("");
        }

        if (esValido) {
            alert("¡Formulario enviado correctamente!");
            limpiarCampos();
        }
    });

    function limpiarCampos() {
        $("#nombre").val("");
        $("#apellidos").val("");
        $("#correo").val("");
        $("#categoria").val("0");
        $("#texto").val("");
        $("#fecha").val("");
    }
});