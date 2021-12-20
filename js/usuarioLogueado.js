$("#btnLogout").click(function() {
    localStorage.clear();
    window.location.href = "../index.html";
});
$("#btnLogout1").click(function() {
    localStorage.clear();
    window.location.href = "../index.html";
});
$("#btnLogout2").click(function() {
    localStorage.clear();
    window.location.href = "../index.html";
});

function getUser() {
    var id = localStorage.getItem('idUser');
    $.ajax({
        type: 'GET',
        url: 'http://129.151.121.96:8080/api/user/' + id,
        // url: 'http://localhost:8080/api/user/all',          // 129.151.121.96
        //url: 'http://129.151.121.96:8080/api/user/all',
        dataType: 'json',
        success: function(data) {
            var $row = $('<tr>');
            $row.append($('<td>').text(data.identification));
            $row.append($('<td>').text(data.name));
            //$row.append($('<td>').text(data.address));
            //$row.append($('<td>').text(data.description));
            //$row.append($('<td>').text(data.cellPhone));
            $row.append($('<td>').text(data.email));
            //$row.append($('<td>').text(data.zone));
            switch (data.type) {
                case 'COORD':
                    $row.append($('<td>').text('Cordinador de zona'));
                    break;
                case 'ADM':
                    $row.append($('<td>').text('Administrador'));
                    break;
                case 'ASE':
                    $row.append($('<td>').text('Asesor comercial'));
                    break;
                default:
                    $row.append($('<td>').text('Perfil no definido'));
                    break;
            }
            $row.append($('<td>').text(data.zone));
            $("#contenidoUsuarioLogueado").append($row);
        }
    });
}

function gethairproducts() {
    var id = localStorage.getItem('idUser');
    $.ajax({
        type: 'GET',
        url: 'http://129.151.121.96:8080/api/hairproducts/all',
        // 129.151 .121 .96
        // url: 'http://129.151.121.96:8080/api/hairproducts/all',
        dataType: 'json',
        success: function(data) {
            var $row = $('<tr>');
            $row.append($('<td>').text(data.brand));
            $row.append($('<td>').text(data.category));
            $row.append($('<td>').text(data.name));
            $row.append($('<td>').text(data.description));
            $row.append($('<td>').text(data.availability));
            $row.append($('<td>').text(data.price));
            $row.append($('<td>').text(data.quantity));
            $row.append($('<td>').text(data.photography));
            $row.append($('<td>').text(data.zone));
            $("#contenidoUsuarioLogueado").append($row);
        }
    });
}

///    ordenes

function getordenes() {
    var id = localStorage.getItem('idUser');
    $.ajax({
        type: 'GET',
        url: 'http://129.151.121.96:8080/api/order/all',
        // // 129.151 .121 .96
        // url: 'http://129.151.121.96:8080/api/order/all',
        dataType: 'json',
        success: function(data) {
            var $row = $('<tr>');
            $row.append($('<td>').text(data.brand));
            $row.append($('<td>').text(data.category));
            $row.append($('<td>').text(data.name));
            $row.append($('<td>').text(data.description));
            $row.append($('<td>').text(data.availability));
            $row.append($('<td>').text(data.price));
            $row.append($('<td>').text(data.quantity));
            $row.append($('<td>').text(data.photography));
            $row.append($('<td>').text(data.zone));
            $("#contenidoUsuarioLogueado").append($row);
        }
    });
}
function getordenes1() {
    var id = localStorage.getItem('idUser');
    $.ajax({
        type: 'GET',
        url: 'http://129.151.121.96:8080/api/order/all',
        // // 129.151 .121 .96
        // url: 'http://129.151.121.96:8080/api/order/all',
        dataType: 'json',
        success: function(data) {
            var $row = $('<tr>');
            $row.append($('<td>').text(data.brand));
            $row.append($('<td>').text(data.category));
            $row.append($('<td>').text(data.name));
            $row.append($('<td>').text(data.description));
            $row.append($('<td>').text(data.availability));
            $row.append($('<td>').text(data.price));
            $row.append($('<td>').text(data.quantity));
            $row.append($('<td>').text(data.photography));
            $row.append($('<td>').text(data.zone));
            $("#contenidoUsuarioLogueado").append($row);
        }
    });
}
//  hasta  aqui  ordenes
$(document).ready(function() {
    estadoInicial();
    //$("#mensaje").html("Bienvenido(a) " + userJS.name);


    getUser();
    var myModalUsuario = document.getElementById('administrarUsuarios');

    myModalUsuario.addEventListener('shown.bs.modal', function(e) {
        $.ajax({
            type: 'GET',
            url: 'http://129.151.121.96:8080/api/user/all', // 129.151.121.96
            // url: 'http://129.151.121.96:8080/api/user/all',
            dataType: 'json',
            success: function(data) {

                for (let i = 0; i < data.length; i++) {
                    let filas = $('<tr>');
                    filas.append($('<td>').text(data[i].identification));
                    filas.append($('<td>').text(data[i].name));
                    filas.append($('<td>').text(data[i].address));
                    // filas.append($('<td>').text(data[i].description));
                    filas.append($('<td>').text(data[i].cellPhone));
                    filas.append($('<td>').text(data[i].email));
                    filas.append($('<td>').text(data[i].zone));
                    filas.append($('<td>').text(data[i].type));
                    //filas.append($('<td>').append("<input type='number' id='cantidad" + data[i].id + "' name='cantidad' min='0' max='" + data[i].quantity + "' />"));
                    filas.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-success btn-block w-100" onclick="agregarProductoOrden(' + data[i].id + ')">Modificar</button>'));
                    filas.append($("<td class='text-center'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarProductoOrden(' + data[i].id + ',\'' + data[i].name + '\')">Eliminar</button>'));
                    $("#listaUsuarios").append(filas);
                }
            }
        });
    });
    gethairproducts();

    var myModal = document.getElementById('administrarProductos');
    myModal.addEventListener('shown.bs.modal', function(e) {
        $.ajax({
            type: 'GET',
            url: 'http://129.151.121.96:8080/api/hairproducts/all', //129.151.121.96
            //url: 'http://129.151.121.96:8080/api/hairproducts/all',
            dataType: 'json',
            success: function(data) {
                for (let i = 0; i < data.length; i++) {
                    let filas = $('<tr>');
                    filas.append($('<td>').append("<img src='" + data[i].photography + "' width='50%' height='50px'>"));
                    filas.append($('<td>').text(data[i].name));
                    filas.append($('<td>').text(data[i].category));
                    filas.append($('<td>').text(data[i].description));
                    filas.append($('<td>').text(data[i].price));
                    filas.append($('<td>').append("<input type='number' id='cantidad" + data[i].id + "' name='cantidad' min='0' max='" + data[i].quantity + "' />"));
                    filas.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-success btn-block w-100" onclick="agregarProductoOrden(' + data[i].id + ')">Agregar</button>'));
                    filas.append($("<td class='text-center'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarProductoOrden(' + data[i].id + ',\'' + data[i].name + '\')">Eliminar</button>'));
                    $("#listaProductos").append(filas);
                }
            }
        });
    });



    getordenes();

    //var myModal3 = document.getElementById('administrarOrdenes');
    var myModal3 = document.getElementById('PruebaOrdenes');
    myModal3.addEventListener('shown.bs.modal', function(e) {
        $.ajax({
            type: 'GET',
            url: 'http://129.151.121.96:8080/api/order/all', //129.151.121.96
            //url: 'http://129.151.121.96:8080/api/order/all',
            dataType: 'json',
            success: function(data) {

                for (let i = 0; i < data.length; i++) {
                    let filas = $('<tr>');
                    //filas.append($('<td>').append("<img src='" + data[i].photography + "' width='50%' height='50px'>"));
                    filas.append($('<td>').text(data[i].registerDay));
                    filas.append($('<td>').text(data[i].status));
                    filas.append($('<td>').text(data[i].salesMan.name));
                    filas.append($('<td>').text(data[i].products));
                    //filas.append($('<td>').text(data[i].products));  //   <option value="Aprobada">Aprobada</option> 
                    //filas.append($('<td>').append("<input type='string' id='estados" + data[i].id + "' name='estado' min='Pendiente' max='" + data[i].quantity + "' />"));
                    filas.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-success btn-block w-100" onclick="modificarOrden(' + data[i].id + ')">Modificar</button>'));
                    //filas.append($("<td class='text-center'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarProductoOrden(' + data[i].id + ',\'' + data[i].name + '\')">Eliminar</button>'));
                   //  <td><input type="number" id="prod_${items[index].reference}"/ ></td>
                    //$("#listaOrdenes").append(filas);  //  contenidoProductos
                    $("#contenidoProductos").append(filas); 
                    //prueba de paso a varias modales para tener listo 
                    //$("#contenidoProductos1").append(filas); 
                    
                }
            }
        });
    });
    // getOrdenes1()
    getordenes1();

    //var myModal3 = document.getElementById('administrarOrdenes');
    var myModal3 = document.getElementById('PruebaOrdenes');
    myModal3.addEventListener('shown.bs.modal', function(e) {
        $.ajax({
            type: 'GET',
            url: 'http://129.151.121.96:8080/api/order/all', //129.151.121.96
            //url: 'http://129.151.121.96:8080/api/order/all',
            dataType: 'json',
            success: function(data) {

                for (let i = 0; i < data.length; i++) {
                    let filas = $('<tr>');
                    //filas.append($('<td>').append("<img src='" + data[i].photography + "' width='50%' height='50px'>"));
                    filas.append($('<td>').text(data[i].registerDay));
                    filas.append($('<td>').text(data[i].status));
                    filas.append($('<td>').text(data[i].salesMan.name));
                    filas.append($('<td>').text(data[i].products));
                    //filas.append($('<td>').text(data[i].products));  //   <option value="Aprobada">Aprobada</option> 
                    //filas.append($('<td>').append("<input type='string' id='estados" + data[i].id + "' name='estado' min='Pendiente' max='" + data[i].quantity + "' />"));
                    filas.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-success btn-block w-100" onclick="modificarOrden(' + data[i].id + ')">Modificar</button>'));
                    //filas.append($("<td class='text-center'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarProductoOrden(' + data[i].id + ',\'' + data[i].name + '\')">Eliminar</button>'));
                   //  <td><input type="number" id="prod_${items[index].reference}"/ ></td>
                    //$("#listaOrdenes").append(filas);  //  contenidoProductos
                    $("#contenidoProductos1").append(filas); 
                    //prueba de paso a varias modales para tener listo 
                    //$("#contenidoProductos1").append(filas); 
                    
                }
            }
        });
    });
    //Final getOrdenes()1
});

/**
 * Estado inicial de la pagina, valida si el usuario se encuentra autenticado en la aplicaciòn
 */
function estadoInicial() {


   // alert("DENTRO DE estadoInicial()  ");


    //$("#opcionesAsesor").hide();
    //$("#opcionesAdm").hide();
    //$("#opcionesCoord").hide();
    $("#administrarUsuarios").hide();
    $("#administrarProductos").hide();
    $("#administrarOrdenes").hide();
    let user = sessionStorage.getItem("user");
  
    // alert("DENTRO DE estadoInicial() VALOR DE  user  " + user);

    if (user == null) location.href = "index.html";
    else {
      let userJS = JSON.parse(user);
  
      let typeUser;
  
      if (userJS.type=='ASE')
          typeUser="ASESOR";
      else if (userJS.type=='ADM')
          typeUser="ADMINISTRADOR";
      else if (userJS.type=='COORD')
          typeUser="COORDINADOR";      
      

      // alert("DENTRO DE estadoInicial() VALOR DE  typeUser  " + typeUser);

      //Valida el perfil para mostrar opciones sobre las que se tien acceso
      if (userJS.type == "ASE"){
        $("#botonAsesor").show();
        $("#botonAdministrador").hide();
        $("#botonCoordinador").hide();
      }else if (userJS.type == "ADM"){
        $("#botonAdministrador").show();
        $("#botonAsesor").hide();
        $("#botonCoordinador").hide();
      }else if (userJS.type == "COORD"){
        $("#botonCoordinador").show();
        $("#botonAsesor").hide();
        $("#botonAdministrador").hide();
      }  
     // $("#userName").html(userJS.name);
     // $("#userEmail").html(userJS.email);
     // $("#userType").html(typeUser);
     // $("#titulo").html("Bienvenido(a): " + userJS.name);
    }
  }
  $("#btnRegistrarUsu").click(function() {
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
                url: "http://129.151.121.96:8080/api/user/new", // 129.151 .121 .96
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
  

//   Manejo de botones onClick()   btproductoDescripcion
$("#btnordenFecha").click(function() {
    //
    window.location.href = "/pages/ordenesFecha.html";
    //
});
$("#btnordenEstado").click(function() {
    //
    window.location.href = "/pages/ordenesEstado.html";
    //
});
//
$("#btproductoDescripcion").click(function() {
    //
    window.location.href = "/pages/productosDescripcion.html";
    //
});
$("#btproductoPrecio").click(function() {
    //
    window.location.href = "/pages/productosPrecio.html";
    //  
});
$("#btnlistarCumple").click(function() {
    //
    window.location.href = "/pages/listarCumple.html";
    //  btnlistarCumple
});
