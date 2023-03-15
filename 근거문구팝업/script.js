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
  // $(txt_pop).html(text_list);
  // document.querySelector(txt_pop).innerHTML=text_list;   HTML 태그 요소들까지 입력(XSS 공격에 취약할 수가 있음)
  document.querySelector(txt_pop).textContent=text_list;
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
    text03: {
        txt: "<p style='color:red;'>세 번째 근거문구!</p>입니다.",
      },
  };

  try {
    evidenceShow(".txt_cont", text_list[args]["txt"]);
  } catch (e) {}
}
