const read = () => {
  let a = document.getElementsByClassName("three");
  a[0].innerHTML = "0";
  for (let i = 2; i >= 0; i--) {
    let b = document.getElementsByClassName("dot");
    b[i].classList.remove("dot");
    let c = document.getElementsByClassName("bg-color");
    c[i].classList.remove("bg-color");
  }
};
