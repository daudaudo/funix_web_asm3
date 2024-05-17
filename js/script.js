function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = emailValue.match(checkMail);
  const sectionContent = document.querySelector("#info .section-content");
  const submitControl = document.querySelector(".submit-email");
  if (checkEmail) {
    sectionContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập đúng định dạng email";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const lessMore = element.querySelector(".less-more");
  lessMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".colll");
  const sectionContent = parentElement.querySelectorAll(".cty");

  sectionContent.forEach((element) => {
    element.style.display = "block";
  });
}
