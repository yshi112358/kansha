var NGComments = ["死ね", "バカ", ".exe"]; // 簡易的なNGワードの設定
var regex = new RegExp(NGComments.join("|"));
var submitted = 0;
function test(wcheck) {
    if (wcheck.match(regex) != null) {
        alert("ERROR: コメントにNGワードが含まれています");
        return false;
    }
    document.getElementById("submitbutton").disabled = true;
    textOnCommentareas = document.getElementsByTagName('textOnCommentarea');
    for (var i = 0; i < textOnCommentareas.length; i++) {
        textOnCommentareas[i].value = textOnCommentareas[i].value.replace(/</g, '&lt;');
    }
    inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = inputs[i].value.replace(/</g, '&lt;');
    }
    return submitted = !0;
}

var form_recipe = document.getElementById("comment-form")
form_recipe.addEventListener("submit", function () {
    var yourComment = document.forms[0].elements[0].value;
    $('.bg-gallery').append("<p class='comment-yours'>" + yourComment + "</p>");

    const tl = gsap.timeline();
    tl.to(".comment-box", {
        scale: 0.5,
        duration: 0.4,
        ease: "sine",
        onComplete: () => {
            form_recipe.reset();
            tlGallery.to(".comment-yours", {
                x: '-200vw',
                duration: "random(10, 50)",
                ease: "power0.inOut"
            }, "comment");
        }
    }).to(".comment-box", {
        scale: 1,
        duration: 0.2,
        ease: "sine"
    });
});

d3.csv("https://docs.google.com/spreadsheets/d/18OItshR90FlLKuGzSAqV2yqYVUcm4xAEbPYNyBnJKhM/export?format=csv&range=A3:D", function (error, data) {
    var textOnComment = [];
    for (let i = 0; i < 100; i++) {
        textOnComment[i] = [];
    }

    for (let i = 0; i < data.length; i++) {
        var comment = "";
        comment = data[i].Comments;
        var idx = textOnComment[comment.length].length;
        textOnComment[comment.length][idx] = data[i].Comments;
    }

    for (let i = 0; i < textOnComment.length; i++) {
        for (let k = 0; k < textOnComment[i].length; k++) {
            $('.comment-flow').append("<p class='comment-move'>" + textOnComment[i][k] + "</p>");
        }
    }
});