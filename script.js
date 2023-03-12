var cardpopup = document.querySelector('.cardpopup');
var loginLink = document.querySelector('.link-login');
var registroLink = document.querySelector('.link-registro');
var btnPopup = document.querySelector('.btnLogin-popup');
var fecharPopup = document.querySelector('.icone-fechar');


/* faz a troca da tela de login para a tela de cadastro */
registroLink.addEventListener('click',()=> {
    cardpopup.classList.add('active');
});

loginLink.addEventListener('click',()=> {
    cardpopup.classList.remove('active');
});

/* abre e fecha popup */
btnPopup.addEventListener('click', ()=> {
    cardpopup.classList.add('active-popup');
});

fecharPopup.addEventListener('click', ()=> {
    cardpopup.classList.remove('active-popup');
});