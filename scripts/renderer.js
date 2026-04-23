const titleBar = document.querySelector('.title-bar');

if (!window.api ) {
  titleBar.style.display = 'none';
}
document.getElementById('min').onclick = () => {
  window.api.minimize();
};

document.getElementById('max').onclick = () => {
  window.api.maximize();
};

document.getElementById('close').onclick = () => { 
  window.api.close();       
};                  