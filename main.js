const lenghtEl = document.getElementById('lenght-el');
const volumeEl = document.getElementById('volume-el');
const massEl = document.getElementById('mass-el');
const inputEl = document.getElementById('input-el');
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', function () {
  console.log('testconverbtn');

  renderLenght();
  renderVolume();
  renderMass();

  function renderLenght() {
    lenghtEl.textContent = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(2)} feet | 
    ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(2)} meters`;
  }

  function renderVolume() {
    volumeEl.textContent = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(2)} gallons | 
    ${inputEl.value} gallons = ${(inputEl.value / 3.785).toFixed(2)} liters`;
  }

  function renderMass() {
    massEl.textContent = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(2)} pounds | 
    ${inputEl.value} pounds = ${(inputEl.value / 0.453).toFixed(2)} kilos`;
  }
});
