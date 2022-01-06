//the code was based on what we had in class

function draw_table(){//this function draw the table and append the html
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

function append(){// this function use the post to get the specific section, item and price.
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

function select_row()//this function select the menutable rows and make it highlighted in red using the .selected css
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
function delete_row(sec, ent){//this function get position the users clicked and make it empty, this way we delete the whole item(section,item and price)
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

function ChangeImg(){//this funcition change the image to another image when clicked.
document.getElementById("BloodBowl").src ="img/BloodBowl2.jpg"; 
document.getElementById("ShovelKnight").src ="img/ShovelKnight2.jpg"; 
document.getElementById("SteelAssault").src ="img/SteelAssault2.jpg"; 
document.getElementById("TotalWar").src ="img/TotalWar2.jpg"; 
}


$(document).ready(function(){//check if the document is ready to draw the table avoiding errors
    draw_table();
});