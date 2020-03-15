$(document).ready(function () {
    $('.sl').slick({
        fade: true,
    });

    $("#btn").click(function () {
        $(".fix").fadeOut(500);
        $(".street_all").fadeIn(500);
        $(".arrow").css("display", "block")
    });


    $("#street_all_street_library").click(function () {
        $(".street_library").fadeIn(500);
        $(".street_all").fadeOut(500);
    });

    $("#street_all_street_entry").click(function () {
        $(".street_entry").fadeIn(500);
        $(".street_all").fadeOut(500);
    });

    $("#street_library_library_corridor").click(function () {
        $(".library_corridor").fadeIn(500);
        $(".street_library").fadeOut(500);
    });

    $("#street_library_street_all").click(function () {
        $(".street_all").fadeIn(500);
        $(".street_library").fadeOut(500);
    });

    $("#street_library_street_entry").click(function () {
        $(".street_entry").fadeIn(500);
        $(".street_library").fadeOut(500);
    });

    $("#library_corridor_street_library").click(function () {
        $(".street_library").fadeIn(500);
        $(".library_corridor").fadeOut(500);
    });

    $("#street_entry_street_all").click(function () {
        $(".street_all").fadeIn(500);
        $(".street_entry").fadeOut(500);
    });

    $("#street_entry_street_library").click(function () {
        $(".street_library").fadeIn(500);
        $(".street_entry").fadeOut(500);
    });

    $("#street_entry_watch").click(function () {
        $(".watch").fadeIn(500);
        $(".street_entry").fadeOut(500);
    });

    $("#watch_street_entry").click(function () {
        $(".street_entry").fadeIn(500);
        $(".watch").fadeOut(500);
    });

    $("#monument_street_all").click(function () {
        $(".street_all").fadeIn(500);
        $(".monument").fadeOut(500);
    });

    $("#watch_assembly-hall").click(function () {
        $(".assembly-hall").fadeIn(500);
        $(".watch").fadeOut(500);
    });

    $("#watch_hallway").click(function () {
        $(".hallway").fadeIn(500);
        $(".watch").fadeOut(500);
    });

    $("#watch_second-floor").click(function () {
        $(".second-floor").fadeIn(500);
        $(".watch").fadeOut(500);
    });

    $("#assembly-hall_watch").click(function () {
        $(".watch").fadeIn(500);
        $(".assembly-hall").fadeOut(500);
    });

    $("#assembly-hall_hall2").click(function () {
        $(".assembly-hall2").fadeIn(500);
        $(".assembly-hall2").css("visibility", "visible")
        $(".zal").fadeIn(500);
        $(".zal").css("visibility", "visible")
    });


    $("#assembly-hall2_hall").click(function () {
        $(".assembly-hall").fadeIn(500);
        $(".assembly-hall2").fadeOut(500);
    });

    $("#hallway_watch").click(function () {
        $(".watch").fadeIn(500);
        $(".hallway").fadeOut(500);
    });

    $("#hallway_poster").click(function () {
        $(".poster").fadeIn(500);
        $(".poster").css("visibility", "visible")
        $(".sl-poster").fadeIn(500);
        $(".sl-poster").css("visibility", "visible")
    });

    $("#second-floor_admmins").click(function () {
        $(".admins").fadeIn(500);
        $(".second-floor").fadeOut(500);
    });

    $("#second-floor_watch").click(function () {
        $(".watch").fadeIn(500);
        $(".second-floor").fadeOut(500);
    })

    $("#second-floor_a210").click(function () {
        $(".a210").fadeIn(500);
        $(".second-floor").fadeOut(500);
    });

    $("#admins_flowers").click(function () {
        $(".flowers").fadeIn(500);
        $(".flowers").css("visibility", "visible")
        $(".admins_flowers").fadeIn(500);
        $(".admins_flowers").css("visibility", "visible")
    });

    $("#admins_second-floor").click(function () {
        $(".second-floor").fadeIn(500);
        $(".admins").fadeOut(500);
    });

    $("#admins_admins2").click(function () {
        $(".admins2").fadeIn(500);
        $(".admins").fadeOut(500);
    });

    $("#flowers_admins").click(function () {
        $(".admins").fadeIn(500);
        $(".flowers").fadeOut(500);
    });

    $("#admins2_admins").click(function () {
        $(".admins").fadeIn(500);
        $(".admins2").fadeOut(500);
    });

    $("#admins2_admins3").click(function () {
        $(".admins3").fadeIn(500);
        $(".admins2").fadeOut(500);
    });

    $("#admins3_admins2").click(function () {
        $(".admins2").fadeIn(500);
        $(".admins3").fadeOut(500);
    });

    $("#a210_second-floor").click(function () {
        $(".second-floor").fadeIn(500);
        $(".a210").fadeOut(500);
    });

    $("#a210_awards").click(function () {
        $(".awards").fadeIn(500);
        $(".awards").css("visibility", "visible")
        $(".a210_awards").fadeIn(500);
        $(".a210_awards").css("visibility", "visible")
    });

    $("#a210_graduates").click(function () {
        $(".graduates").fadeIn(500);
        $(".graduates").css("visibility", "visible")
        $(".a210_graduates").fadeIn(500);
        $(".a210_graduates").css("visibility", "visible")
    });

    $("#a210_mey").click(function () {
        $(".mey").fadeIn(500);
        $(".a210").fadeOut(500);
    });

    $("#mey_a210").click(function () {
        $(".a210").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey_mey2").click(function () {
        $(".mey2").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey_mey3").click(function () {
        $(".mey3").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey_tso").click(function () {
        $(".tso").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey2_mey").click(function () {
        $(".mey2").fadeIn(500);
        $(".mey").fadeOut(500);
    });

    $("#mey2_mey3").click(function () {
        $(".mey3").fadeIn(500);
        $(".mey2").fadeOut(500);
    });

    $("#mey2_mey").click(function () {
        $(".mey").fadeIn(500);
        $(".mey2").fadeOut(500);
    });

    $("#mey3_mey2").click(function () {
        $(".mey2").fadeIn(500);
        $(".mey3").fadeOut(500);
    });

    $("#mey3_mey").click(function () {
        $(".mey").fadeIn(500);
        $(".mey3").fadeOut(500);
    });

    $("#mey3_urists").click(function () {
        $(".urists").fadeIn(500);
        $(".mey3").fadeOut(500);
    });

    $("#mey2_pictures").click(function () {
        $(".meypictures").fadeIn(500);
        $(".meypictures").css("visibility", "visible")
        $(".mey2_pictures").fadeIn(500);
        $(".mey2_pictures").css("visibility", "visible")
    });

    $("#tso_mey").click(function () {
        $(".mey").fadeIn(500);
        $(".tso").fadeOut(500);
    });

    $("#tso_a212").click(function () {
        $(".a212").fadeIn(500);
        $(".tso").fadeOut(500);
    });

    $("#a212_tso").click(function () {
        $(".tso").fadeIn(500);
        $(".a212").fadeOut(500);
    });

    $("#urists_mey3").click(function () {
        $(".mey3").fadeIn(500);
        $(".urists").fadeOut(500);
    });

    $("#urists_accounting").click(function () {
        $(".accounting").fadeIn(500);
        $(".urists").fadeOut(500);
    });

    $("#accounting_urists").click(function () {
        $(".urists").fadeIn(500);
        $(".accounting").fadeOut(500);
    });

    $("#urists_urists2").click(function () {
        $(".urists2").fadeIn(500);
        $(".urists").fadeOut(500);
    });

    $("#urists_psychologists").click(function () {
        $(".psychologists").fadeIn(500);
        $(".urists").fadeOut(500);
    });

    $("#urists2_urists").click(function () {
        $(".urists").fadeIn(500);
        $(".urists2").fadeOut(500);
    });

    $("#urists2_stand").click(function () {
        $(".stand").fadeIn(500);
        $(".stand").css("visibility", "visible");
        $(".urists_stand").fadeIn(500);
        $(".urists_stand").css("visibility", "visible")
    });

    $("#urists_pictures").click(function () {
        $(".urispictures").fadeIn(500);
        $(".urispictures").css("visibility", "visible");
        $(".urists_pictures").fadeIn(500);
        $(".urists_pictures").css("visibility", "visible")
    });

    $("#urists2_psychologists").click(function () {
        $(".psychologists").fadeIn(500);
        $(".urists2").fadeOut(500);
    });

    $("#psychologists_urists2").click(function () {
        $(".urists2").fadeIn(500);
        $(".psychologists").fadeOut(500);
    });

    $("#psychologists_psychologists2").click(function () {
        $(".psychologists2").fadeIn(500);
        $(".psychologists").fadeOut(500);
    });

    $("#psychologists2_psychologists").click(function () {
        $(".psychologists").fadeIn(500);
        $(".psychologists2").fadeOut(500);
    });

    $("#psychologists2_psychologists3").click(function () {
        $(".psychologists3").fadeIn(500);
        $(".psychologists2").fadeOut(500);
    });

    $("#psychologists3_psychologists2").click(function () {
        $(".psychologists2").fadeIn(500);
        $(".psychologists3").fadeOut(500);
    });

    $("#psychologists3_first-floor").click(function () {
        $(".first-floor").fadeIn(500);
        $(".psychologists3").fadeOut(500);
    });

    $("#first-floor_psychologists3").click(function () {
        $(".psychologists3").fadeIn(500);
        $(".first-floor").fadeOut(500);
    });

    $("#first-floor_near-gym").click(function () {
        $(".near-gym").fadeIn(500);
        $(".first-floor").fadeOut(500);
    });

    $("#near-gym_first-floor").click(function () {
        $(".first-floor").fadeIn(500);
        $(".near-gym").fadeOut(500);
    });

    $("#near-gym_near-court").click(function () {
        $(".near-court").fadeIn(500);
        $(".near-gym").fadeOut(500);
    });

    $("#near-court_near-gym").click(function () {
        $(".near-gym").fadeIn(500);
        $(".near-court").fadeOut(500);
    });

    $("#near-court_near-itally").click(function () {
        $(".near-itally").fadeIn(500);
        $(".near-court").fadeOut(500);
    });

    $("#near-itally_near-court").click(function () {
        $(".near-court").fadeIn(500);
        $(".near-itally").fadeOut(500);
    });

    $("#near-gym_near-itally").click(function () {
        $(".near-itally").fadeIn(500);
        $(".near-gym").fadeOut(500);
    });

    $("#near-itally_near-gym").click(function () {
        $(".near-gym").fadeIn(500);
        $(".near-itally").fadeOut(500);
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".main"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.fadeOut(300);
            $(".overlay").fadeOut(300);// скрываем его
        }
    });
});














