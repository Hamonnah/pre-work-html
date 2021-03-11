let btnToogle = document.querySelector('.btn-toogle');

btnToogle.addEventListener('click', e => {
    document.querySelector('.target').classList.toggle('bg-blue');
});