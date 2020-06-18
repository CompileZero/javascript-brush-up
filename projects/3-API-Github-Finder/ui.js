class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  //Display Profile in UI
  showProfile(user) {
    console.log(user);

    this.profile.innerHTML = `
    <div class = "card card-body mb-3">
        <h1>${user.name}</h1>
        <h6>${user.login}</h6>
        <div class="row">

            <div class="col-md-3">
                <img class="img-fluid mb-4" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>

            <div class="col-md-9">
                <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>

        </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;
  }

  //Show ALert Message
  showAlert(message, className) {
    //Clear Any Remaining Alert
    this.clearAlert();

    //Create div
    const div = document.createElement("div");

    //Add Classes
    div.className = className;

    //Add Text
    div.appendChild(document.createTextNode(message));

    //Get Parent
    const container = document.querySelector(".search-container");

    //Get Search Box
    const search = document.querySelector(".search");

    //Insert Alert
    container.insertBefore(div, search);

    //Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear Alert Message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //Clear Profile
  clearProfile() {
    this.profile.innerHTML = ``;
  }
}
