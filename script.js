// init github
const github = new Github;
// search input
const searchUser = document.getElementById('searchUser');

// search input event listener

searchUser.addEventListener('keyup', (e) => {
    // get input text

    const userText = e.target.value;

    if(userText !== ''){
        // make http call
        console.log('userText');
        github.getUser(userText)
        .then(data => {
            console.log(data);
            
        })
    }
});