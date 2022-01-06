function draw_table(){
    $("#results").empty();
    $.getHTMLuncached = function(url) {
        return $.ajax({
            url: url,
            type: 'GET',
            cache: false,
            success: function(html) {
                $("#results").append(html);
                select_row();
            }
        });

    };
    $.getHTMLuncached("/get/html");
}

function append(){
    $.ajax({
        type: "POST",
        url: '/post/json',
        dataType: 'json',
        contentType: 'application/json',
        data: '{"sec_n": "' + $("#section").val() + '", "item":"' + $("#item").val() + '", "price":"' + $("#price").val() + '"}',
        async: false,
        success: setTimeout(draw_table, 1000)
    });
};

function select_row()
{
    $("#menuTable tbody tr[id]").click(function ()
    {
        $(".selected").removeClass("selected");
        $(this).addClass("selected");
        var sec = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
        var ent = $(this).attr("id") - 1;
        delete_row(sec, ent);

    })

};
function delete_row(sec, ent){
    $("#delete").click(function()
    {
        $.ajax(
            {
                url: "/post/delete",
                type: "POST",
                dataType: 'json',
                contentType: 'application/json',
                data: '{"sec": "' + sec + '", "ent": "' + ent + '"}',
                cache: false,
                success: setTimeout(draw_table, 1000)
            }
        )
    })
};

function ChangeImg(){
document.getElementById("BloodBowl").src ="img/BloodBowl2.jpg"; 
document.getElementById("ShovelKnight").src ="img/ShovelKnight2.jpg"; 
document.getElementById("SteelAssault").src ="img/SteelAssault2.jpg"; 
document.getElementById("TotalWar").src ="img/TotalWar2.jpg"; 
}


$(document).ready(function(){
    draw_table();
});