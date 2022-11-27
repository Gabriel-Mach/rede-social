const id = localStorage.getItem('id')
window.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()
    fetch('https://dummyjson.com/users/'+id)
    .then(res => res.json())
    .then((user)=>{
        const foto = document.querySelector('.fotoPerfil')
        const username = document.querySelector('.username')
        const nome = document.querySelector('.nome')
        const idade = document.querySelector('.idade')
        const cidade = document.querySelector('.cidade')
foto.setAttribute('src', user.image)
        username.innerHTML = user.username
        nome.innerHTML = user.firstName
        idade.innerHTML = user.age
        cidade.innerHTML = user.address.city
    });
    fetch('https://dummyjson.com/quotes/'+id)
    .then(res => res.json())
    .then((frase)=>{
        const descricao = document.querySelector('.descricao')
        descricao.innerHTML = frase.quote
    });
})

const voltarReseta = document.querySelector('.voltar')
voltarReseta.addEventListener('click', ()=>{
    localStorage.clear();
    window.history.back()
})