class Github {
  constructor() {
    //TODO: change this when uploading for public
    this.client_id = "0231a44e5731e4c95db4";
    this.client_secret = "86f3bae0ef12651fa332be6f46c984955081bcee";
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profileData,
      repoData,
    };
  }
}
