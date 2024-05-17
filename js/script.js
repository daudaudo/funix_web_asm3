function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("error-email");
  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const checkEmail = emailValue.match(checkMail);
  const sectionContent = document.querySelector(
    ".infotarget-list .info .section-content"
  );
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

/**
 *
 * @param {Element} element
 */
function handleViewMore(element) {
  const parentElement = element.closest(".jobinfo-item");
  const sectionContent =
    parentElement.querySelectorAll(".jobinfo-item-body")[0];

  if (!sectionContent) {
    throw new Error("Not found DOM");
  }

  if (sectionContent.classList.contains("show")) {
    sectionContent.classList.remove("show");
    element.innerHTML = "View more";
  } else {
    sectionContent.classList.add("show");
    element.innerHTML = "Less more";
  }
}
