// 
$("#tablaUsuariosCumple").hide();
$("#btnregresarFechaCumple").click(function() {
    window.location.href = "/pages/usuarioLogueado.html"   
});

    
$("#btnconsultarFechaCumple").click(function() {
    
    $("#tablaUsuariosCumple").show();


       alert("Mes que ingresó " +$("#fechaCumple").val() );


        let data = {
            mes: $("#fechaCumple").val()            
        };
        $.ajax({
            type: 'GET',
            url: 'http://129.151.121.96:8080/api/user/birthday/' + data.mes, // 129.151.121.96
            // url: 'http://129.151.121.96:8080/api/user/all',
            dataType: 'json',
            success: function(data) {

                for (let i = 0; i < data.length; i++) {
                    let filas = $('<tr>');
                    filas.append($('<td>').text(data[i].identification));
                    filas.append($('<td>').text(data[i].name));
                    filas.append($('<td>').text(data[i].birthtDay));                
                    filas.append($('<td>').text(data[i].monthBirthtDay));
                    filas.append($('<td>').text(data[i].address));                
                    filas.append($('<td>').text(data[i].cellPhone));
                    filas.append($('<td>').text(data[i].email));
                    filas.append($('<td>').text(data[i].zone));
                    filas.append($('<td>').text(data[i].type));                                        
                    $("#contenidoUsuariosCumple").append(filas);
                }
            }
        });
});