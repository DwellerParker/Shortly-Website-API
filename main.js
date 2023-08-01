let orginalLink = document.querySelector('#orginalLink')
let shortLink = document.querySelector('#shortLink')
let copyUrl = document.querySelector('#copyUrl')
let resultsContainer = document.querySelector('.results-container');
document.querySelector('button').addEventListener('click', getFetch)

let form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
});



function getFetch(){
  let choice = document.querySelector('input').value
  const encodedChoice = encodeURIComponent(choice)
  const url = `https://api.shrtco.de/v2/shorten?url=${encodedChoice}`
  
  fetch(url)
      .then(res => res.json()) 
      .then(data => {
        const fullShortLink = data.result.full_short_link;
        shortLink.href = fullShortLink;
        shortLink.innerText = fullShortLink; 
        resultsContainer.style.display = 'flex';
        orginalLink.innerText = "https://" + choice;
      })
      .catch(err => {
          console.error(err)
      });
}

copyUrl.addEventListener('click', () => {
  let linkToCopy = shortLink.innerText;
  navigator.clipboard.writeText(linkToCopy)
    .then(() => {
      alert('Link copied to clipboard!');
    })
    .catch((error) => {
      console.error('Unable to copy link: ', error);
    });
});



const openNav = document.querySelector('.main-nav');
const mobileNav = document.querySelector('.mobile-nav'); 
const closeNav = document.querySelector('.mobile-toggle')
openNav.addEventListener('click', runNavi); 

function runNavi() {
  mobileNav.style.display = 'flex';
}
closeNav.addEventListener('click',closeNavi);

function closeNavi(){
  mobileNav.style.display = 'none';
}
