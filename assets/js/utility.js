var folder = "/assets/img/kansha/";

if (location.hostname == "127.0.0.1") {
    for (let n = 0; n < 5; n++) {
        $.ajax({
            url: folder,
            success: function (data) {
                $(data).find("a").attr("href", function (i, val) {
                    if (val.match(/\.(jpe?g|png|gif)$/)) {
                        $(".kansha-gallery").append("<img src='" + val + "'>");
                    }
                });
            }
        });
    }
}
else if (location.hostname == "yshi112358.github.io") {
    for (let n = 0; n < 5; n++) {
        $.ajax({
            url: folder,
            success: function (data) {
                $(data).find("a").attr("href", function (i, val) {
                    if (val.match(/\.(jpe?g|png|gif)$/)) {
                        $(".kansha-gallery").append("<img src='/kansha" + folder + val + "'>");
                    }
                });
            }
        });
    }
}
else {
    for (let n = 0; n < 5; n++) {
        $.ajax({
            url: folder,
            success: function (data) {
                $(data).find("a").attr("href", function (i, val) {
                    if (val.match(/\.(jpe?g|png|gif)$/)) {
                        $(".kansha-gallery").append("<img src='" + folder + val + "'>");
                    }
                });
            }
        });
    }
}