fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(res=>console.log(res))
fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json()).then(res=>document.getElementById('lga').innerHTML=res[0].title)