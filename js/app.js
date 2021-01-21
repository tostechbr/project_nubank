// SCROLL HEADER
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header');
}

window.addEventListener('scroll', scrollHeader)

// DROPDOWN MENU
const dropdownMenu1 = document.getElementById('dropdown-item-1');
const dropdownMenu2 = document.getElementById('dropdown-item-2');
const dropdownMenu3 = document.getElementById('dropdown-item-3');

const menuItem1 = document.getElementById('menu-item-1');
const menuItem2 = document.getElementById('menu-item-2');
const menuItem3 = document.getElementById('menu-item-3');

function ShowDropdown1(event){
    event.preventDefault(); // Não fazer a função original - direcionar para o link
    dropdownMenu1.classList.toggle('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}
function ShowDropdown2(event){
    event.preventDefault(); // Não fazer a função original - direcionar para o link
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu2.classList.toggle('active-dropdown-menu');
    dropdownMenu3.classList.remove('active-dropdown-menu');
}
function ShowDropdown3(event){
    event.preventDefault(); // Não fazer a função original - direcionar para o link
    dropdownMenu1.classList.remove('active-dropdown-menu');
    dropdownMenu2.classList.remove('active-dropdown-menu');
    dropdownMenu3.classList.toggle('active-dropdown-menu');
}

function RemoveDropdown(){
    dropdownMenu1.addEventListener.remove('active-dropdown-menu');
    dropdownMenu2.addEventListener.remove('active-dropdown-menu');
    dropdownMenu3.addEventListener.remove('active-dropdown-menu');  
}

menuItem1.addEventListener('Click', ShowDropdown1);
menuItem2.addEventListener('Click', ShowDropdown2);
menuItem3.addEventListener('Click', ShowDropdown3);

dropdownMenu1.addEventListener('mouseleave', RemoveDropdown);
dropdownMenu2.addEventListener('mouseleave', RemoveDropdown);
dropdownMenu3.addEventListener('mouseleave', RemoveDropdown);