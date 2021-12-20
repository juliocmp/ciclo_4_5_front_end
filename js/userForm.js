// function saveUser(user) {
    function saveUser() {
    let data = {
        identification: $("#identificationUser").val(),
        name: $("#nameUser").val(),
        adress: $("#addressUser").val(),
        cellphone: $("#cellphone").val(),
        email: $("#emailUser").val(),
        password: $("#passwordUser").val(),
        zone: $("#zoneUser").val(),
        type: $("#typeUser").val()
    }

    let datosPeticion = JSON.stringify(data)

    //utilizo la funcion de JQuery $.ajax para hacer un llamado asincrono
    //a un ws
    $.ajax({
        //url del servicio
         url: "http://129.151.121.96:8080/api/user/new",   // 129.151.121.96
        // url: "http://129.151.121.96:8080/api/user/new",
        //envio datos capturados por el usuario a la peticion
        data: datosPeticion,

        //tipo de peticion
        type: 'POST',

        contentType: "application/JSON",

        //tipo de contenido
        dataType: 'json',

        //success: funcion con acciones si todo sale ok
        success: function(respuesta) {
            //escribe en la consola del desarrollador para efectos de depuración
            console.log(respuesta);
            resultado(respuesta)
        },

        //error: funcion con acciones si hay error
        // código a ejecutar si la petición falla;
        // son pasados como argumentos a la función
        // el objeto de la petición en crudo y código de estatus de la petición
        error: function(xhr, status) {
            //$("#mensajes").html("Ocurrio un problema al ejecutar la petición..." + status);		
            console.log("algo fallo");
        },
        //complete: funcion con al final de la petición
        // código a ejecutar sin importar si la petición falló o no
        complete: function(xhr, status) {
            console.log("Todo super bien" + status);
        }
    });
}

///***  EJEMPLO */

$("#btnGuardarUsuario").click(function() {
    if ($("#identificationUser").val() == 0 || $.trim(("#nameUser").val()) == "" || $.trim(("#addressUser").val()) ||
        $("#cellphone").val() == 0 || $("#email").val() == "" || $.trim($("#passwordUser").val()) == "" ||
        $("#zoneUser").val() == 0 || $.trim(("#typeUser").val())) {
        alert("Por favor ingrese todos los datos requeridos");
    } else {
        // saveUser(user)  ///////  QUE ES USER ?????
        saveUser()
        let data = {
            email: $("#email").val(),
            password: $("#passwordUser").val()
        };
        $.ajax({
            // url: "http://localhost:8080/api/user/" + data.email + "/" + data.password,      //129.151.121.96
            url: "http://129.151.121.96:8080/api/user/" + data.email + "/" + data.password,
            method: "GET",
            dataType: "json",
            success: function(response) {
                if (response.true) {
                    alert("Usuario/contraseña ya existen");

                    // window.location.href = "./pages/ordenes.html";
                } else {
                    localStorage.setItem("idUser", response.id);
                    // saveUser(user)

                    //window.location.href = "./pages/inicial.html";

                }

            },
            error: function(error) {
                alert("Usuario o contraseña incorrectos");
            }
        });
    }
});
////   jc
$("#btnGuardarUsuario99").click(function() {
    if ($("#emailRegistro").val() == "" || $.trim($("#contrasenaRegistro").val()) == "" || $.trim($("#userRegistro").val()) == "" || $.trim($("#contrasenaRegistro2").val()) == "") {
        alert("Por favor complete todos los campos 20211212");
    } else {
        if ($("#contrasenaRegistro").val() != $("#contrasenaRegistro2").val()) {
            alert("Las contraseñas no coinciden");
        } else {
            let datos = {
                email: $("#emailRegistro").val(),
                password: $("#contrasenaRegistro").val(),
                name: $("#userRegistro").val()
            };
            $.ajax({
                 url: "http://129.151.121.96:8080/api/user/new",    //129.151.121.96
                //url: "http://129.151.121.96:8080/api/user/new",
                method: "POST",
                dataType: "json",
                data: JSON.stringify(datos),
                contentType: "application/json",
                Headers: {
                    "Content-Type": "application/json"
                },

                statusCode: {
                    201: function(response) {
                        console.log(response);
                        //window.location.href = "./pages/inicial.html";
                        saveUser();
                        window.location.href = "./pages/usuarioLogueado.html";
                    },
                    400: function(response) {
                        console.log("Bad Request");
                        alert("Usuario/contraseña ya existen");
                    }
                }
            });
        }
    }
});

//**   FIN EJEMPLO */
/**
 * valida si en el id viene un dato nulo, o viene el codigo del usuario
 * 
 * Configura mensaje de bienvenida o de error según el caso
 */
function resultado(respuesta) {
    let id = respuesta.id
    let nombre = respuesta.name

    if (id == null)
        alert("Usuario no registrado : " + nombre)
    else
        alert("Bienvenido : " + id + " " + nombre)

}

function estadoInicial() {
    $("#username").focus()
}