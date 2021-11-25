const body = document.querySelector('body'),
      form = document.querySelector('form'),
      messageContainer = document.querySelector('.message-container'),
      message = document.querySelector('#message'),
      secondLevelHeadings = document.querySelectorAll('h2'),
      btnNextExercise = document.querySelector('.next_btn');
      colorForm = document.querySelector('.color_foem');

let isValid = false;

function validateForm() {
    isValid = form.checkValidity();
    if (isValid) {
        messageContainer.style.display = 'flex';
        form.style.opacity = '0.4';
        
    }
}

function moveFormLeft() {
    body.style.justifyContent = 'space-around';
    body.style.flexDirection = 'row';
}

function showResult(result) {
    text = [].slice.call(secondLevelHeadings);
    for (let i = 0; i < result.length; i++) {
        text[i].textContent += result[i];
    }
    moveFormLeft();
}

function storeFormData() {
    const user = [
        form.userName.value,
        form.userGroup.value,
        form.userVariant.value,
        form.userPhone.value,
        form.userEmail.value,
    ]
    showResult(user);
    form.reset();
}

function processFormData(event) {
    event.preventDefault();
    validateForm();
    if (isValid) {
        storeFormData();
    }
}

form.addEventListener('mouseup', processFormData);
btnNextExercise.addEventListener('mouseup', SecondExercise);


const map = document.querySelector('.map'),
      cells = [].slice.call(document.querySelectorAll('.map_cell')),
      variantCell = document.getElementById('variant'),
      p = document.querySelector('p'),
      buttonColor = document.querySelector('.btn_color'),
      inputColor = document.querySelector('.input_color'),
      colorBlock = document.querySelector('.color_block');

function hideFirstExercise() {
    form.style.display = 'none';
    messageContainer.style.display = 'none';
}

function displayMap() {
    map.style.display = 'flex';
    p.style.display = 'block';
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = i + 1;
    }
    console.log(1);
}

function randomNumber(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function randomColor() {
    let values = [];
    for (let i = 0; i < 3; i++) {
        values.push(randomNumber(0, 255));   
    }
    return values;
    
}

function changeRandomColor() {
    cells[9].addEventListener('mouseover', () => {
        colors = randomColor();
        cells[9].style.borderColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
        cells[11].style.borderColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    });
    cells[9].addEventListener('mouseout', () => {
        cells[9].style.borderColor = 'black';
        cells[11].style.borderColor = 'black';
    });
}

function setColor() {
    cells[9].addEventListener('click', () => {
        colorBlock.style.display = 'block';
        colorBlock.style.display = 'flex';
    });
    buttonColor.addEventListener('click', () => {
        let color = inputColor.value;
        cells[9].style.backgroundColor = color;
        cells[11].style.backgroundColor = color;
    });    
}

function SecondExercise(event) {
    event.preventDefault();
    hideFirstExercise();
    displayMap();
    changeRandomColor();
    setColor();
}