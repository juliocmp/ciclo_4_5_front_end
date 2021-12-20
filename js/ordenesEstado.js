// 
$("#btnregresarOrdenEstado").click(function() {
    window.location.href = "/pages/usuarioLogueado.html"   
});
$("#btnconsultarOrdenesEstado").click(function() {
    
    $("#tablaOrdesEstado").show();


       alert("Estado que ingresó " +$("#estadoOrden").val() );


        let data = {
            estado: $("#estadoOrden").val(),
            vendedor:  localStorage.getItem('idUser')
        };
        $.ajax({

            
            
            url: 'http://129.151.121.96:8080/api/order/state/' + data.estado + "/" + data.vendedor, /// 129.151.121.96
            //url: "http://129.151.121.96:8080/api/user/" + data.email + "/" + data.password,
            method: "GET",
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
                    $("#contenidoOrdenEstado").append($filas); 
                    //prueba de paso a varias modales para tener listo 
                    //$("#contenidoProductos1").append(filas); 
                    
                }

                
            },
            error: function(error) {
                alert("No se encontraron ordenes en ese estado ");
            },

            
        });
});