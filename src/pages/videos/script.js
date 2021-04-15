//Function to fill the video label content with the iframe title
function fillVideoTitle() {
  let iframeIds = document.getElementsByTagName("iframe");
  let labelIds = document.getElementsByTagName("label");

  for(let i=0; i<iframeIds.length; i++) {
    labelIds[i].innerHTML = iframeIds[i].title;
  }
}

//Redirect use to login screen
function btnNewVideoRedirection () {
  let isLogged = loginValidation();

  !isLogged ? redirectTo("../login/index.html") : redirectTo("../videos/newVideo.html");
};

//Validate if the user in logged
function loginValidation() {
  let isLogged = false;

  

  return isLogged;
};

//The onclick redirect to...
function redirectTo(link) {
  console.log("chegou no redirectTo");
  window.location.href = link;
};