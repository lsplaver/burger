$(function () {
    $(".isEaten").on("click", function (event) {
        var id = $(this).data("id");
        var wasEaten = $(this).data("waseaten");
        var newEatenState = {
            devoured: wasEaten
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".newForm").on("submit", function (event) {
        event.preventDefault();
        var name = $("#inputBurger").val().trim();
        var newName = {
            burger_name: name,
            devoured: false
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newName
        }).then(
            function() {
                location.reload();
            }
        );
    });
});