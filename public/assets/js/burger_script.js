$(function () {
    $(".isEaten").on("click", function (event) {
        var id = $(this).data("id");
        var wasEaten = $(this).data("waseaten");

        var newEatenState = {
            devoured: wasEaten
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState //wasEaten
        }).then(
            function () {
                console.log("The burger number #" + id + " is has now been devoured");
                location.reload();
            }
        );
    });
});