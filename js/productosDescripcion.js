// 
// $("#tablaProductoDetalle").hide();
$("#btnregresarProductoDetalle").click(function() {
    window.location.href = "/pages/usuarioLogueado.html"   
});

    
$("#btnconsultarProductoDetalle").click(function() {
    
    //$("#tablaProductoDetalle").show();


       alert("Descripcion que ingresó " +$("#productoDescripcion").val() );


        let data = {
            descripcion: $("#productoDescripcion").val()            
        };
        $.ajax({
                  
            url: 'http://129.151.121.96:8080/api/hairproducts/description/' + data.descripcion, /// 129.151.121.96
            method: "GET",
            dataType: "json",
            success: function(data) {
                for (let i = 0; i < data.length; i++) {
                    let $filas = $('<tr>');
                    //filas.append($('<td>').append("<img src='" + data[i].photography + "' width='50%' height='50px'>"));
                    $filas.append($('<td>').text(data[i].brand));
                    $filas.append($('<td>').text(data[i].category));
                    $filas.append($('<td>').text(data[i].name));
                    $filas.append($('<td>').text(data[i].description));
                    $filas.append($('<td>').text(data[i].availability));
                    $filas.append($('<td>').text(data[i].price));
                    $filas.append($('<td>').text(data[i].quantity));
                    $("#contenidoProductoDetalle").append($filas); 
                    //prueba de paso a varias modales para tener listo 
                    //$("#contenidoProductos1").append(filas); 
                    
                }

                
            },
            error: function(error) {
                alert("No se encontraron Productos con esa Descripcion " + $("#productoDescripcion").val()  );
            },

            
        });
});