const $menu = document.getElementById('menu');
const $cancel = document.getElementById('cancel')

function toggleBtn(e) {
    document.querySelector('.nav-body-items').classList.toggle('mostrar-menu');
}

$menu.addEventListener('click', toggleBtn);
$cancel.addEventListener('click', toggleBtn);