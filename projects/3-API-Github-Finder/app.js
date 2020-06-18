//Init Github
const github = new Github();

//Init ui
const ui = new UI();
// Search Input
const searchUser = document.getElementById("searchUser");

//Search input event listener
searchUser.addEventListener("keyup", (e) => {
  //Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP Call

    github.getUser(userText).then((data) => {
      if (data.profileData.message === "Not Found") {
        //Show Alert
        ui.showAlert("User Not Found!", "alert alert-danger");
      } else {
        //Show Profile
        ui.showProfile(data.profileData);
      }
    });
  } else {
    //Clear Profile
    ui.clearProfile();
  }
});
