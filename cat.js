for(let i = 0; i < 20; i++){
fetch("https://api.thecatapi.com/v1/images/search")
.then(response=>response.json())
.then(response=>imageProcessing(i, response[0].url))
.catch(e=>console.log(e))

function imageProcessing(i, url){
let image = document.createElement("img");
image.setAttribute('src', url);
main.appendChild(image);

let card = createElement('div', 'card');
let info = createElement('p', 'info');
info.innerHTML = json.all[i].text;
let userName = createElement('p', 'user');;
userName.innerHTML = json.all[i].user.name.first + ' ' + json.all[i].user.name.last;
let likes = createElement('p', 'likes');
let meta = createElement('div', 'meta');
likes.innerHTML = json.all[i].upvotes;

card.appendChild(image);
card.appendChild(info);
meta.appendChild(userName);
meta.appendChild(likes);
card.appendChild(meta);
main.appendChild(card);}
}

function createElement(element, elClass){
  let elem=document.createElement(element);
  elem.className=elClass;
  return elem;
}
