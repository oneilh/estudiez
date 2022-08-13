let additional = document.querySelector('.additional');
let focus = document.querySelector('.focus-border');

// =================Result===============
let result = document.querySelector('.result-info');
let displayRes = document.querySelector('.result');
let closeBtn = document.querySelector('.closebtn');

displayRes.addEventListener('click', () => {
    result.style.display = 'block';
    additional.style.display = 'none';
    resource.style.display = 'none';
    note_table.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    result.style.display = 'none';
    additional.style.display = 'block';
    note_table.style.display = 'none';
});


//=============study resources================
let study = document.querySelector('.study-resource');
let resource = document.querySelector('.resources-info');
let closeBtn1 = document.querySelector('.closebtn1');
study.addEventListener('click', () => {
    resource.style.display = 'block';
    additional.style.display = 'none';
    result.style.display = 'none';
    note_table.style.display = 'none';
});
closeBtn1.addEventListener('click', () => {
    additional.style.display = 'block';
    resource.style.display = 'none';
    note_table.style.display = 'none';
});

//===============extra classes/revision==============
let notifcation = document.querySelector('.revision');
let note_table = document.querySelector('.notification-table');
let closeBtn2 = document.querySelector('.closebtn2');
notifcation.addEventListener('click', () => {
    note_table.style.display = 'block';
    additional.style.display = 'none';
    result.style.display = 'none';
    resource.style.display = 'none';
});
closeBtn2.addEventListener('click', () => {
    additional.style.display = 'block';
    note_table.style.display = 'none'
    resource.style.display = 'none';
});
