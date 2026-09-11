const biography = document.querySelector('#about-bio');
const biographyButton = document.querySelector('.bio-open');

if (biography && biographyButton) {
  biographyButton.addEventListener('click', () => biography.showModal());
  biography.addEventListener('click', event => {
    const box = biography.getBoundingClientRect();
    if (event.target === biography && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) biography.close();
  });
}
