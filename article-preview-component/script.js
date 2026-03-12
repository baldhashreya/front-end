const shareButton = document.querySelector('.share-button');
const shareLink = document.querySelector('.share-link');

document.addEventListener('click', (event) => {
    if (shareButton.contains(event.target)) {
        shareLink.classList.toggle('active');
    }
    else {
        shareLink.classList.remove('active');
    }
});
