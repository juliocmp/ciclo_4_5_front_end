// 
 $("#tablaProductoPrecio").hide();
$("#btnregresarProductoPrecio").click(function() {
    window.location.href = "/pages/usuarioLogueado.html"   
});

    
$("#btnconsultarProductoPrecio").click(function() {
    
    $("#tablaProductoPrecio").show();


       alert("Precio que ingresó " +$("#productoPrecio").val() );


        let data = {
            precio: $("#productoPrecio").val()            
        };
        $.ajax({
                  
            url: 'http://129.151.121.96:8080/api/hairproducts/price/' + data.precio, /// 129.151.121.96
            method: "GET",
            dataType: "json",
            success: function(data) {
                for (let i = 0; i < data.length; i++) {
                    let $filas = $('<tr>');
                    //filas.append($('<td>').append("<img src='" + data[i].photography + "' width='50%' height='50px'>"));
                    $filas.append($('<td>').text(data[i].reference));
                    $filas.append($('<td>').text(data[i].brand));
                    $filas.append($('<td>').text(data[i].category));
                    $filas.append($('<td>').text(data[i].name));
                    $filas.append($('<td>').text(data[i].description));
                    $filas.append($('<td>').text(data[i].availability));
                    $filas.append($('<td>').text(data[i].price));
                    $filas.append($('<td>').text(data[i].quantity));
                    $("#contenidoProductoPrecio").append($filas); 
                    //prueba de paso a varias modales para tener listo 
                    //$("#contenidoProductos1").append(filas); 
                    
                }

                
            },
            error: function(error) {
                alert("No se encontraron Productos con ese Precio " + $("#productoPrecio").val()  );
            }

            
        });
});