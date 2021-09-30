

$("#submit").click(function (event) {
    var sv = {}
    event.preventDefault();
    alert("Thêm Sinh Viên Thành Công ");
    sv.ten =  $("#ten").val();
    sv.namsinh =  $("#namsinh").val();
    sv.email =  $("#email").val();
    sv.gvcn =  $("#gvcn").val();
    $.post("https://609f4864c512c20017dcd138.mockapi.io/api/sinhvien",sv,function(){
        
        taidulieu();
        window.location.href=("QLSV.html")
        
    })
    
});

taidulieu();
 



function taidulieu() {

$.get("https://609f4864c512c20017dcd138.mockapi.io/api/sinhvien", function (data, status) {
    console.log(data);
    $("#tablesv tbody").empty();
    
    for (var i = 0; i < data.length; i++) {
       
        var tr = '<tr>\
            <td>' + data[i].id + '</td>\
            <td>' + data[i].ten + '</td>\
            <td>' + data[i].namsinh + '</td>\
            <td>'+ data[i].email + '</td>\
            <td>'+ data[i].gvcn + '</td>\
            <td><button>Xóa</button></td>\
        </tr>';
        $("#tablesv tbody").append(tr);

    }
      
})

}
