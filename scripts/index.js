const posterImg = document.querySelector('.poster__img');
const slider = document.querySelector('.slider');
const leftSliderButton = document.querySelector('.slider__left-button');
const rightSliderButton = document.querySelector('.slider__right-button');
const selectPadding = document.querySelector('.poster-block__select-padding');
const selectOption = document.querySelector('.poster-block__option');
const inputCheckbox = document.querySelector('.poster-block__input-checkbox');
const imgSlides = Array.from(slider.querySelectorAll('.poster__background'));
const posterUpload = document.getElementById('poster-upload');
const imageUploadInput = document.querySelector('.poster-block__upload');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const slideCount = imgSlides.length;
let slideCounter = 0;

leftSliderButton.addEventListener('click', showPreviousSlide);
rightSliderButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideCounter = (slideCounter - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideCounter = (slideCounter + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  imgSlides.forEach((slide, index) => {
    if (index === slideCounter) {
      slide.style.display = 'block';
      posterImg.style.display = 'block';
    } else {
      slide.style.display = 'none';
      posterImg.style.display = 'none';
    }
  });
}

updateSlider();

imageUploadInput.addEventListener('change', imagePreviewViewer);

function imagePreviewViewer() {
    const file = imageUploadInput.files[0];

    posterImg.style.width = '';
    posterImg.style.height = '';

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            posterImg.src = e.target.result;
            posterUpload.src = e.target.result;

            widthInput.value = 30;

            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                const aspectRatio = img.width / img.height;
                heightInput.value = Math.round(widthInput.value / aspectRatio);
            };
        };
        reader.readAsDataURL(file);
    }
};


widthInput.addEventListener('input', widthInputSize);

function widthInputSize() {
    const newWidth = parseInt(widthInput.value);
    const aspectRatio = posterImg.naturalWidth / posterImg.naturalHeight;
    const newHeight = Math.round(newWidth / aspectRatio);
    
    posterImg.style.width = (newWidth + 50) + "px";
    posterImg.style.height = (newHeight + 50) + "px";
    
    heightInput.value = newHeight;
};

heightInput.addEventListener('input', heightInputSize)

function heightInputSize() {
    const newHeight = parseInt(heightInput.value);
    const aspectRatio = posterImg.naturalWidth / posterImg.naturalHeight;
    const newWidth = Math.round(newHeight * aspectRatio);
    
    posterImg.style.width = (newWidth + 50)+ "px";
    posterImg.style.height = (newHeight + 50)+ "px";
    
    widthInput.value = newWidth;
};

inputCheckbox.addEventListener('change', inputCheckboxToggle);

function inputCheckboxToggle(e) {
    const isChecked = e.target.checked;
    if (isChecked) {
        posterImg.style.border = '2px solid black';
    } else {
        posterImg.style.border = 'none';
    }
};

selectPadding.addEventListener('change', selectChange);

function selectChange() {
    const resizeFactor = parseInt(selectPadding.value);
    if (resizeFactor === 0) {
        posterImg.style.transform = 'scale(1)';
        posterImg.style.padding = '0';
    } else {
        const scaleFactor = 1 - (resizeFactor / 100);
        const padding = (resizeFactor / 5) - 1;
        posterImg.style.transform = `scale(${scaleFactor})`;
        posterImg.style.padding = `${padding}px`;
    }
};