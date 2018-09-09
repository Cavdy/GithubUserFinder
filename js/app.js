// Init @Github
const github = new Github();
// Init @UI
const ui = new UI();

// Search input 
const searchUser = document.querySelector('#searchUser');

// Event listener to listen the input
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userInputText = e.target.value;
    if (userInputText !== '') {
        // Make http call
        github.getUser(userInputText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos)
                }
            })
    } else {
        // Clear Data
        ui.clearProfile();
    }
});