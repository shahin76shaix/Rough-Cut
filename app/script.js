document.querySelector(".openNav").addEventListener("click", function () {
  document.querySelector(".aside").style.marginRight = "0";
  document.querySelector(".openNav").style.opacity = "0.2";
  document.querySelector(".aside-background").style.marginLeft = "0";
});

document.querySelector(".closeNav").addEventListener("click", function () {
  document.querySelector(".aside").style.marginRight = "-250rem";
  document.querySelector(".openNav").style.opacity = "1";
  document.querySelector(".aside-background").style.marginLeft = "-250rem";
});

document
  .querySelector(".aside-background")
  .addEventListener("click", function () {
    document.querySelector(".aside").style.marginRight = "-250rem";
    document.querySelector(".openNav").style.opacity = "1";
    document.querySelector(".aside-background").style.marginLeft = "-250rem";
  });
