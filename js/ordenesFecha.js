$("#tablaOrdesFecha").hide();
//
$("#btnconsultarOrdenes").click(function() {
    
    $("#tablaOrdesFecha").show();


       alert(" fecha  ingreso" +$("#fechaOrden").val() );


        let data = {
            fecha: $("#fechaOrden").val(),
            vendedor:  localStorage.getItem('idUser')
        };
        $.ajax({
            type: 'GET',
            url: 'http://129.151.121.96:8080/api/order/date/' + data.fecha + "/" + data.vendedor, /// 129.151.121.96
            //url: "http://129.151.121.96:8080/api/user/" + data.email + "/" + data.password,
            //method: "GET",

            dataType: "json",
            success: function(data) {
                for (let i = 0; i < data.length; i++) {
                    let $filas = $('<tr>');
                    //filas.append($('<td>').append("<img src='" + data[i].photography + "' width='50%' height='50px'>"));
                    $filas.append($('<td>').text(data[i].registerDay));
                    $filas.append($('<td>').text(data[i].status));
                    $filas.append($('<td>').text(data[i].salesMan.name));
                    $filas.append($('<td>').text(data[i].products));
                    //filas.append($('<td>').text(data[i].products));  //   <option value="Aprobada">Aprobada</option> 
                    //filas.append($('<td>').append("<input type='string' id='estados" + data[i].id + "' name='estado' min='Pendiente' max='" + data[i].quantity + "' />"));
                    $filas.append($("<td class='text-center no-padding'>").append('<button type="button" class="btn btn-outline-success btn-block w-100" onclick="modificarOrden(' + data[i].id + ')">Modificar</button>'));
                    //filas.append($("<td class='text-center'>").append('<button type="button" class="btn btn-outline-danger btn-block w-100" onclick="eliminarProductoOrden(' + data[i].id + ',\'' + data[i].name + '\')">Eliminar</button>'));
                   //  <td><input type="number" id="prod_${items[index].reference}"/ ></td>
                    //$("#listaOrdenes").append(filas);  //  contenidoProductos
                    $("#contenidoOrdenFecha").append($filas);
                    //prueba de paso a varias modales para tener listo 
                    //$("#contenidoProductos1").append(filas); 
                    
                }



                
            },
            error: function(error) {
                alert("No se encontraron ordenes para esa fecha");
            }
        });
    
});

$("#btnregresarOrdenFecha").click(function() {
    window.location.href = "/pages/usuarioLogueado.html"   
});


