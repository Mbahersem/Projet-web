const btns = document.querySelectorAll('.btn');
const resultat = document.getElementById('resultat');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        resultat.value = resultat.value + btn.textContent;
    });
});

clear.addEventListener('click', () => {
    resultat.value = "";
});

equal.addEventListener('click', () => {
    resultat.value = eval(resultat.value);
})