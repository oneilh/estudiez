let additional = document.querySelector('.additional');
let focus = document.querySelector('.focus-border');
// ==========Result==========
let result = document.querySelector('.result-info');
let displayRes = document.querySelector('.result');
let closeBtn = document.querySelector('.closebtn');

displayRes.addEventListener('click', () => {
    result.style.display = 'block';
    additional.style.display = 'none';
    resource.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    result.style.display = 'none';
    additional.style.display = 'block';
});


//study resources
let study = document.querySelector('.study-resource');
let resource = document.querySelector('.resources-info');
study.addEventListener('click', () => {
    resource.style.display = 'block';
    additional.style.display = 'none';
    result.style.display = 'none';
});