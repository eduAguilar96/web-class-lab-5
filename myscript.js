function itemButton(text) {
  return (
    "<li>" +
      "<fieldset>" +
        "<span>" +
          "<p>" + text + "</p>" +
        "</span>" +
        "<button type='submit' class='btnCheck'>Check</button>" +
        "<button type='submit' class='btnDelete'>Delete</button>" +
      "</fieldset>" +
    "</li>"
  );
}

$("#btnAddItem").on("click", function(e) {
  e.preventDefault();
  let text = $("#inputItemValue").val();
  if (text.trim().length > 0){
    $("#inputItemValue").val("");
    $("#listItems").append(itemButton(text));
  } else {
    alert("Invalid item input");
  }
});

$("#listItems").on("click", ".btnCheck", function(e) {
  e.preventDefault();
  let container = $(this).parent();
  container.val("pene");

  ($(container).hasClass("checked") ?
  $(container).removeClass("checked") :
  $(container).addClass("checked"));
});

$("#listItems").on("click", ".btnDelete", function(e) {
  $(this).parent().parent().remove();
});
