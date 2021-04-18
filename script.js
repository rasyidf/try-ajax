$(document).ready(function () {
    $("#Ambil").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "GET",
            crossDomain: true, headers: { 'Access-Control-Allow-Origin': '*' },
            url: "https://jsonplaceholder.typicode.com/todos",
            success: function (result) {
                console.table(result);
                let data = '';
                $.each(result, function (i, res) {
                    data += `<li class="list-group-item container-fluid"> 
                    <div class="row">
                       <div class="col-2">  <span class="badge `+ ((res.completed) ? 'bg-success' : 'bg-secondary') + `">` + ((res.completed) ? 'Selesai' : 'Belum Selesai') + `</span>
                       </div>
                       <div class="col">
                       `+ res.title + `
                       </div>
                    </div>
                  </li>\n` ;
                })
                $("#hasil").html(data);
            }
        }
        );
    });
});