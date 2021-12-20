$("#btnGuardarOrden").click(function() {
          alert("dentro de la función #btnGuardarOrden ");

        let datos = {
            fecha:    $("#fechaOrden").val(),
            vendedor: $("#codigoVendedor").val(),
            producto: $("#producto").val(),
            cantidad: $("#cantidad").val()
            };
            
            alert("dentro de la función #btnGuardarOrden en datos ==>" + datos);
            let pasamos =  JSON.stringify(datos);
            alert("dentro de la función #btnGuardarOrden en pasamos ==>" + pasamos);
            $.ajax({
                 url: "http://129.151.121.96:8080/api/order/new",         //129.151.121.96
                //url: "http://129.151.121.96:8080/api/order/new",
                method: "POST",
                dataType: "json",
                data: pasamos,
                contentType: "application/json",
                Headers: {
                    "Content-Type": "application/json"
                },

                statusCode: {
                    201: function(response) {
                        console.log(response);
                        //window.location.href = "./pages/inicial.html";
                        //saveUser();
                        window.location.href = "./pages/usuarioLogueado.html";
                    },
                    400: function(response) {
                        console.log("Bad Request");
                        alert("No se pudo crear la orden");
                    }
                }
            });
    
});

function llamarCrearOrden(){
    window.location.href = "./pages/crearOrden.html";  
}