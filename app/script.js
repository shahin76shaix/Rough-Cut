// Open navigation bar
document.querySelector(".openNav").addEventListener("click", function () {
  document.querySelector(".aside").style.marginRight = "0";
  document.querySelector(".openNav").style.opacity = "0.2";
  document.querySelector(".aside-background").style.marginLeft = "0";
});

//Close navigation bar with btn
document.querySelector(".closeNav").addEventListener("click", function () {
  document.querySelector(".aside").style.marginRight = "-250rem";
  document.querySelector(".openNav").style.opacity = "1";
  document.querySelector(".aside-background").style.marginLeft = "-250rem";
});

//Close navigation bar with background
document
  .querySelector(".aside-background")
  .addEventListener("click", function () {
    document.querySelector(".aside").style.marginRight = "-250rem";
    document.querySelector(".openNav").style.opacity = "1";
    document.querySelector(".aside-background").style.marginLeft = "-250rem";
  });
