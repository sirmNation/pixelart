// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(m, n) {
    // Your code goes here!
    for (var rows = 0; rows < m; rows++) {
        for (var columns = 0; columns < n; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960 / n);
    $(".grid").height(960 / m);
}

function removeGrid() {
    $(".grid").remove();
};
//default grid and colour function
$(document).ready(function() {
    makeGrid(10, 10);

    $(".grid").click(function() {
        $(this).css("background-color", "black");
    });

    $("form").on("submit", function(event) {
        event.preventDefault();
        removeGrid();
        var height = $('#inputHeight').val();
        var weight = $('#inputWeight').val();
        var selectedcolor = $('#colorPicker').val();
        makeGrid(weight, height);

        $(".grid").click(function() {
            $(this).css("background-color", selectedcolor);
        });
    });
});