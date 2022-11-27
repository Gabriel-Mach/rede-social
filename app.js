const feed = document.querySelector('.feed')
window.addEventListener('DOMContentLoaded', e =>{
    e.preventDefault()

    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(({users})=>{
        users.forEach(user =>{
            fetch('https://dummyjson.com/posts/'+user.id)
           .then(res => res.json())
           .then((posts)=>{
            fetch('https://jsonplaceholder.typicode.com/photos/'+user.id) 
            .then(res => res.json())
            .then((photo)=>{
                fetch('https://dummyjson.com/comments/'+user.id)
                .then(res => res.json())
                .then((comment) => {
                const postagem = `<div class="post">
                <div class ="perfil">
                    <img src="${user.image}" alt="">
                    <a href="./perfil/perfil.html" class="link" data-id="${user.id}"><p>${user.username}</p></a>
                    </div>
                <img class="foto-post" src="${photo.url}" alt="">
                <div class="reacao">
                    <div>
                    <img class="like butom" src="tt.png" alt="curte">
                    <img class="butom" src="dsc2.png" alt="comenta">
                    <img class="butom" src="pal.png" alt="compartilha">
                </div>
                </div>
                <p> ${posts.body} </p>
                <div class="sessaoComentarios">
                <div class="comentario">
                    <h3>@${comment.user.username}</h3>
                    <p>${comment.body}</p>
                </div>
            </div>
            <div class="comentar-wrapper">
                <input type="text" class="comment-box" placeholder="adicionar comentário">
         </div>
            </div>`
            feed.innerHTML += postagem

            const link = document.querySelectorAll(".link");
                link.forEach(i =>{
                    i.addEventListener('click', ()=>{
                        const dataId = i.getAttribute("data-id")
                            localStorage.setItem('id',dataId)
                    })
                })
                                        
            })
           })
        })  
    })
})
})