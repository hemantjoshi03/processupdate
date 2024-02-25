function clearCode() {
  let str = document.getElementById('pre').innerText;
  console.log(str);
  document.getElementById('pre').innerText = "";

  setTimeout(function () {
    document.getElementById('pre').innerText = str;
  }, 1000);
}

function copyCode() {
  const codeText = document.querySelector('.code-box pre').innerText;
  navigator.clipboard.writeText(codeText).then(() => {
  }).catch((err) => {
    console.error("Failed to copy code:", err);
  });
}

let container = document.querySelector('.container');
let codeBox = document.getElementById('code-box');
let buttonsContainer = document.getElementById('buttons-container');
let settingsIcon = document.getElementById('settings-icon');
let minimizeButton = document.querySelector('.options .minimize');

function minimizeCodeBox() {
  container.style.display = 'none';
  document.body.style.display = 'none';
}

function showCodeBox() {
  container.style.display = 'block';
  document.body.style.display = 'block';
}

function toggleCodeVisibility() {

  if (container.style.display === 'none' || document.body.style.display === 'none') {

    showCodeBox();

  } else {
    
    document.getElementById('mini').addEventListener('click', function () {

      parent.postMessage('minimize', '*');
    });
    console.log("minimize");
  }
}




minimizeButton.addEventListener('click', toggleCodeVisibility);
settingsIcon.addEventListener('click', toggleCodeVisibility);

clearCode();