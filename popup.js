document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('start-button');
  const resultInput = document.getElementById('result');

  startButton.addEventListener('click', function() {

    if (!window.EyeDropper) {
       alert('Your browser does not support this extension, consider using Chrome.');
      return
    }

    const eyeDropper = new EyeDropper();

    eyeDropper.open().then((result) => {
      resultInput.value = result.sRGBHex;
    }).catch((error) => {
      alert(error);
    })

  });
});
