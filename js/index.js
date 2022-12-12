document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', e => {
        e.preventDefault()
        const users = form.search.value
        getGitUser(users)
        form.reset()
    })
})
function getGitUser(username){
    fetch(`https://api.github.com/search/users?q=${username}`, {method: 'GET', headers: {
        Accept: 'application/vnd.github.v3+json'
    }}).then(res => res.json()).then(data => {
        const users = data.items
        users.forEach(user => {
            userList(user)
        });
    })
}
function getUserRepos(url){
    fetch(url, {method: 'GET', headers: {
        Accept: 'application/vnd.github.v3+json'
    }}).then(res => res.json()).then(data => userRepos(data))
}
function userList(user){
    const userUl = document.getElementById('user-list')
    const userLi = document.createElement('li')
    userLi.style.padding = '15px'
    userLi.innerHTML =
    `
    <img src='${user.avatar_url}' width='100' height='100' alt='avatar' />
    <h2 id='${user.login}'>${user.login}</h2>
    `
    userUl.appendChild(userLi)
    document.getElementById(`${user.login}`).addEventListener('click', () => {
        const repoUrl = `${user.repos_url}`
        getUserRepos(repoUrl)
    })
}
function userRepos(repos){
    const reposUl = document.getElementById('repos-list')
    repos.map(repo => {
        const reposLi = document.createElement('li')
        reposLi.textContent = repo.name
        console.log(repo.name);
        reposUl.appendChild(reposLi)
    })
}
// document.addEventListener("DOMContentLoaded", () => {
 

// })

// let url = "https://api.github.com/search/users"

// let form = document.getElementById('myForm')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let search = document.getElementById('search').value
    
//     let originalName = search.split(' ').join('');
//      alert (originalName);

     
  
//     fetch("https://api.github.com/search/users?"+ originalName, {
//         method:'GET',
//         headers:{
//             'Content-type': 'application/json',
//             'Accept': 'application/vnd.github.v3+json'
//         },
//         body: JSON.stringify()
//     })


// })

// // function getUsers(){
// //     fetch(`https://api.github.com/search/users`, {
// //         method:'GET',
// //         headers:{
// //             'Content-type': 'application/json',
// //             'Accept' : 'application/vnd.github.v3+json',
// //         },
// //         body: JSON.stringify()
// //     })
// //     .then(res => console.log(res))
// //     // .then(res => res.json())
// //     .then(data => console.log(data))

// // }

// // function displayUsers(items){
// //     // characters.preventDefault()
// //     console.log(items.login);
// //     let login = document.createElement('p')
// //     login.textContent = items.login
// //     let main = document.getElementById("main")
// //     main.append(login)
// //     login.addEventListener('click', () =>{
// //         // getOneChar(characters)
// //     })

// // }


// //   function updateVotes(characters){
// //     fetch(`http://localhost:3000/characters/${characters.id}`, {
// //         method:'PATCH',
// //         headers:{
// //             'Content-type': 'application/json'
// //         },
// //         body: JSON.stringify(characters)
// //     })
// //     .then(res => res.json())
// //     .then(characters => console.log(characters))

// // }


