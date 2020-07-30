$(document).ready( init => {
    var index = 0;
    $(".section").eq(0).fadeIn();
    
    $(".item").click( function() {
        $(".item").removeClass("active");
        $(this).addClass("active");
        $(".section").fadeOut(200);
        $(".section").eq(index).fadeOut(200, () => {
            $(".section").eq($(".item").index(this)).fadeIn(200);
            index = $(".item").index(this);
        })
        // $(".section").hide();
        // $(".section").eq($(".item").index(this)).show();
    })

    for (var count = 0; count < 5; count++) {
        var shape = $("<span></span>");
        var temp = random(10);
        shape.css("width", temp+'rem');
        shape.css("height", temp+'rem');

        if (random(2) == 0) { shape.css("bottom", random(10)+'rem'); } 
        else { shape.css("top", random(10)+'rem'); }
        if (random(2) ==0) { shape.css("left", random(10)+'rem'); } 
        else { shape.css("right", random(10)+'rem'); }
        
        shape.addClass("shape circle");
        shape.css("background", "#ddd");
        $("body").append(shape);
    }
});
function random(scope) {
    if (scope < 2) return 0;
    else return Math.floor(Math.random() * scope);
}
function testxml() {
    var obj;
    $.ajax({
        url: '/data/projects.json',
        dataType: 'json',
        method: 'get',
        cache: false,
        success: function (data) {
            console.log(data);
        }
    });
}