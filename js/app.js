$("#btnLogin").click(function() {
    if ($("#email").val() == "" || $.trim($("#contrasena").val()) == "") {
        alert("Por favor ingrese el correo y/o la contraseña");
    } else {
        let data = {
            email: $("#email").val(),
            password: $("#contrasena").val()
        };
        $.ajax({
            url: "http://129.151.121.96:8080/api/user/" + data.email + "/" + data.password, /// 129.151.121.96
            //url: "http://129.151.121.96:8080/api/user/" + data.email + "/" + data.password,
            method: "GET",
            dataType: "json",
            success: function(response) {
                if (response.id != null) {
                    gestionaSesion(response);
                    localStorage.setItem("idUser", response.id);
                    //sessionStorage.setItem("user", user);
                    //gestionarSesion(response);
                    //window.location.href = "./pages/inicial.html";
                    //window.location.href = "./pages/ordenes.html"; **   
                    //recibe la respuesta a la petición, y valida si el usuario puede se valido correctamente en la aplicación
                    gestionaSesion(response);
                    window.location.href = "./pages/usuarioLogueado.html";
                } else {
                    alert("Usuario o contraseña incorrectos");
                }

            },
            error: function(error) {
                alert("Usuario o contraseña incorrectos");
            }
        });
    }
});

$("#btnRegistrarUsuario1").click(function() {
    if ($("#identificacionRegistro").val() == 0 ||
        $("#userRegistro").val() == '' ||
        $("#direccionRegistro").val() == '' ||
        $("#telefonoRegistro").val() == 0 ||
        $("#emailRegistro").val() == "" ||
        $.trim($("#contrasenaRegistro").val()) == "" ||
        $.trim($("#contrasenaRegistro2").val()) == "") {
        alert("Por favor complete todos los campos");
    } else {
        if ($("#contrasenaRegistro").val() != $("#contrasenaRegistro2").val()) {
            alert("Las contraseñas no coinciden");
        } else {
            let numeroId =getRandomArbitrary(10.1000);
            let datos = {
                id: 8,
                identificacion: $("#identificacionRegistro").val(),
                name: $("#userRegistro").val(),
                direccion: $("#direccionRegistro").val(),
                telefono: $("#telefonoRegistro").val(),
                email: $("#emailRegistro").val(),
                password: $("#contrasenaRegistro").val(),
                zona: $("#zonaRegistro").val(),
                tipousuario: $("#tipoUsuarioRegistro").val(),

            };
            
            console.log(datos);
            alert("datos qu viajan al api  POST " + datos);
            let datosPeticion = JSON.stringify(datos);
            $.ajax({
                url: "http://129.151.121.96/api/user/new", // 129.151 .121 .96
                // url: "http://129.151.121.96:8080/api/user/new",
                data: datosPeticion,
                //method: "POST",
                type: 'POST',
                //dataType: "json",                
                contentType: "application/JSON",
                //Headers: {
                //             "Content-Type": "application/json"
                //},

                //statusCode: {
                //    201: function(response) {
                //        console.log(response);
                //        console.Log(datos),
                //        //window.location.href = "./pages/inicial.html";
                //        localStorage.setItem("idUser", response.id);
                //        window.location.href = "./pages/usuarioLogueado.html";
                //    },
                //    400: function(response) {
                //        console.log(datos);
                //        console.log("Bad Request");
                //    }

                //
                success: function(response) {
                    // alert("Despues del POST " + response);

                    //  alert("Despues del POST  datosPeticion  " + datosPeticion);

                    //console.Log(response);
                    if (response.id != null) {
                        localStorage.setItem("idUser", response.id);
                        window.location.href = "./pages/usuarioLogueado.html";                        
                    } else {
                        alert("Usuario o contraseña incorrectos  **** ");
                    }

                },
                error: function(error) {
                    alert("No fue posible crear el usuario NO CONSUMI API");
                }



                //}
            });
        }
       // prueba de traer datos de quien ingreso  al crear cuenta
       let data = {
        email: $("#email").val(),
        password: $("#contrasena").val()
        };
        $.ajax({
            url: "http://129.151.121.96:8080/api/user/" + data.email + "/" + data.password, /// 129.151.121.96
            //url: "http://129.151.121.96:8080/api/user/" + data.email + "/" + data.password,
            method: "GET",
            dataType: "json",
            success: function(response) {
                if (response.id != null) {
                    localStorage.setItem("idUser", response.id);
                    //sessionStorage.setItem("user", user);
                    //gestionarSesion(response);
                    //window.location.href = "./pages/inicial.html";
                    //window.location.href = "./pages/ordenes.html"; **
                    window.location.href = "./pages/usuarioLogueado.html";
                } else {
                    alert("Usuario o contraseña incorrectos");
                }

            },
            error: function(error) {
                alert("Usuario o contraseña incorrectos");
            }
        });

       ///  fin prueba  traer data de quien creo cuenta




    }
});

$("#contrasenaRegistro2").change(function() {
    if ($("#contrasenaRegistro").val() != $("#contrasenaRegistro2").val()) {
        $("#contrasenaRegistro2").css("border-color", "red");
        $("#contrasenaRegistro").css("border-color", "red");
    } else {
        $("#contrasenaRegistro2").css("border-color", "");
        $("#contrasenaRegistro").css("border-color", "");
    }
});

$(document).ready(function() {
    //$("#perfilSection").hide();
});
//$("#btnRegistrarUsuario1").click(function() {
//window.location.href = "./pages/usuarForm.html";
//});
// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

  // Gestionar  ingreso  y almacenar en sesion
  //     gestionaSesion(response);
function gestionaSesion(response) {

        //crea objeto javascript que contiene la información del usuario
        let userJS = {
            id: response.id,
            identification: response.identification,
            name: response.name,
            birthtDay: response.birthtDay,
            monthBirthtDay: response.monthBirthtDay,
            address: response.address,
            cellPhone: response.cellPhone,
            email: response.email,
            password: response.password,
            zone: response.zone,
            type: response.type
        };

        //transforma el objeto javascript a json antes de guardarlo en el sessionStorage
        let user = JSON.stringify(userJS);

        //almacena el usuario en el sessionStorage, para hacerlo disponible a las otras páginas
        sessionStorage.setItem("user", user);
        //
        // alert("Valores  guardados en SESION  desde funcion gestionaSesion()  ==> " + user);
        //
        //location.href = "menu.html";

        //$("#alerta").show();
        //$("#mensaje").html("Bienvenido(a) " + userJS.name);
        //$("#inputEmail").focus();

    
}