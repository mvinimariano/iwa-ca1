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
        var section = $(this).prevAll("tr").children("rd[colspan='3']").length - 1;
        var entry = $(this).attr("id") - 1;
        delete_row(section, entry);

    })

};

$(document).ready(function(){
    draw_table();
})