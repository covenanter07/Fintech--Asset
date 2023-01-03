$("#choice").selectmenu();
$("#choice").on("selectmenuchange", function () {
  var choice = $(this).val();
  alert("---未選擇--- : " + choice);
});

function isInputNumber(evt) {
  var char = string.fromCharCode(evt.which);

  if (!/[0-9]/.test(ch)) {
    evt.preventDefault();
  }
}
