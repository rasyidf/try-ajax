$(document).ready(function () {
    $("#Ambil").click(function (e) {
        e.preventDefault(); 
        $.ajax({
            type: "GET",
            crossDomain: true, headers: { 'Access-Control-Allow-Origin': '*' },
            url: "https://jsonplaceholder.typicode.com/todos/1",
            success: function (result) {
                $("#hasil").html(result);
            }
        }
        );
    });
});