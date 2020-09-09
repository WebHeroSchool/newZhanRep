let body = document.body;
let url = window.location.toString();

const getNameFromUrl = (url) => {
    let getUrl = url.split('=');
    let name = getUrl[1];
    if(name == undefined) {
        name = 'Zhan30';
    }
    return name;
}
  

fetch(`https://api.github.com/users/${getNameFromUrl(url)}`)
    .then(res => res.json())
    .then(json => {
        let avatar = new Image();
        avatar.src = json.avatar_url;
        body.append(avatar);

        let br = document.createElement('br');
        body.append(br);

        let name = document.createElement('a');
        if (json.name != null) {
            name.innerHTML = json.name;
        } else {
            name.innerHTML = 'Пользователь не найден';
        }
        body.append(name);
        // name.addEventListener("click", () => window.location = 'https://github.com/?username=${getNameFromUrl(url)}');
        name.href = json.html_url;
        name.title = json.login;
        name.innerText = json.login;

        let bio = document.createElement('h4');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Пользователь не найден';
        }
        body.append(bio);
    })
    .catch(err => alert('Пользователь не найден'));
