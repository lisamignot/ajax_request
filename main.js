document.addEventListener('DOMContentLoaded', function() {
    
    const avatarProfile = document.querySelector('#avatar-image');
    const nameProfile = document.querySelector('#name');
    const usernameProfile = document.querySelector('#username');
    const location = document.querySelector('#location-user');
    const repositoryNumber = document.querySelector('#repositorys');
    const followersNumber = document.querySelector('#followers');
    const followingsNumber = document.querySelector('#following');
    const linkProfile = document.querySelector('#link');
    const endpoint = `https://api.github.com/users/lisamignot`;

    fetch(endpoint)
        .then(function(resposta) {
            return resposta.json();
    }) 
    //reposta positiva
    .then(function(json) {
        avatarProfile.src = json.avatar_url;
        nameProfile.innerText = json.name;
        usernameProfile.innerText = json.login;
        location.innerText = json.location;
        repositoryNumber.innerText = json.public_repos;
        followersNumber.innerText = json.followers;
        followingsNumber.innerText = json.following;
        linkProfile.href = json.html_url;
    })
    //resposta negativa
    .catch(function(error) {
        alert('Os dados solicitados não puderam ser consultados!')
    })
})