// Thay đổi nội dung búc thư ở đây
var letterContent =
  "Gửi em - Người con gái của anh, Hôm nay là ngày Valentine, anh muốn gửi đến em những lời chúc yêu thương và nụ hôn ngọt ngào 😘😘😘. Cảm ơn em đã luôn ở bên anh, là động lực để anh vượt qua mọi khó khăn. Anh yêu em, dù có những lúc anh hơi đáng ghét 🤥 nhưng anh lúc nào cũng yêu thương em cả. Đừng bận tâm về những chuyện nhỏ đó nhé em nhé của anh. Cảm ơn em, cảm ơn tình yêu của chúng ta!";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50;

// Hiệu ứng gõ chữ

function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});
