//GDPR card show/hide
//parameter: flag -> bool, show / hide the .GDPR-card
const setGDPRCardVisibility = flag => {
  const GDPRCard = document.querySelector('.gdpr-card');

  //if no .GDPR-card, do nothing
  if (!GDPRCard) {
    return;
  }

  if (flag) {
    GDPRCard.classList.add('visible');
  } else {
    GDPRCard.classList.remove('visible');
  }
};

setGDPRCardVisibility(true);
