document.addEventListener('DOMContentLoaded', function () {
    //lista de atividades realizadas
    const atividadesLista = document.getElementById('atividadesLista');
    const atividades = ['Atividade 1 HTML ', 'Atividade 2 CSS ', 'Atividade 3 GITHUB ','Atividade 4 vamos aprender JS '];

    atividades.forEach(atividade => {
        const li = document.createElement('li');
        li.textContent = atividade;
        atividadesLista.appendChild(li);
    });
});
