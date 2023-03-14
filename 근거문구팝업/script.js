function layerOpen(el) {
  $(document).ready(function () {
    console.log(el)
    var temp = $("#" + el);
    // var id = temp.attr("id");

    $(temp).parent(".layer").fadeIn();
  });
}

function evidenceShow(txt_pop, text_list) {
    console.log(text_list)
  $(txt_pop).text(text_list);
}

function openTextPopup(args) {
    console.log(args);
  var text_list = {
    text01: {
      txt: "첫 번째 근거문구!첫 번째 근거문구!첫 번째 근거문구!첫 번째 근거문구!",
    },
    text02: {
      txt: "두 번째 근거문구!두 번째 근거문구!두 번째 근거문구!두 번째 근거문구!",
    },
  };

  try {
    evidenceShow(".txt_cont", text_list[args]["txt"]);
  } catch (e) {}
}
