$("#WL-Add-Btn").click(function () {
    var myVal = $("#WL-TxtBox").val();
    console.log(myVal);
    var uid = generateId();
    $("#Weight-Location-Count-List")
        .append("<li data-uid='" + uid + "' data-id='" +
            myVal +
            "' class='list-group-item list-group-item-default text-info mb-1' >" +
            myVal +
            " <button type='button' class='close remove-button'>&times;</button></li>");
    $("#Weigh-Location-Count-ListBox").append("<option data-uid='" +
        uid +
        "' selected='true' value='" +
        myVal +
        "'>" +
        myVal +
        "</option>");
    $("#WL-TxtBox").val("");
});