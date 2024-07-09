const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownmenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function (){
    dropdownmenu.classList.toggle('open');
    const isOpen = dropdownmenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa fa-times'
    : 'fa fa-bars';
}