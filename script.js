$(document).ready(() => {
  $('#sendForm').on('submit', (e) => {
    let size = document.getElementById('size').value;
    let age = document.getElementById('age').value
    //console.log(size);
    //console.log(age);

    drawImage(size, age);
    
    e.preventDefault();
  });
});

function drawImage(size, age){
  var imgsrc = "outputs/" + size + age + ".png";
  //console.log(imgsrc);
  document.getElementById('outputImage').src = imgsrc;
  
}
