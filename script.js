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
        console.log(json.avatar_url);
        console.log(json.name);
        console.log(json.bio);
        console.log(json.html_url);
        let avatar = new Image();
        avatar.src = json.avatar_url;
        body.append(avatar);
        let name = document.createElement('h2');
        if (json.name != null) {
            name.innerHTML = json.name;
        } else {
            name.innerHTML = 'Пользователь не найден';
        }
        body.append(name);
        name.addEventListener("click", () => window.location = 'https://webheroschool.github.io/newZhanRep/');

        let bio = document.createElement('h2');
        if (json.bio != null) {
            bio.innerHTML = json.bio;
        } else {
            bio.innerHTML = 'Пользователь не найден';
        }
        body.append(bio);
    })
    .catch(err => alert('Пользователь не найден'));
