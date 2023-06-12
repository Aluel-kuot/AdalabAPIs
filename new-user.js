
document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    let firstName=document.getElementById('first-name').value;
    let lastName=document.getElementById('last-name').value;
    let age=document.getElementById('age').value;

    let data={
    firstName:firstName,
    lastName:lastName,
    age:age
};
console.log({data});
fetch('https://dummyjson.com/users/add', {
    method:'POST',
    headers:{
        'content-Type':'application/json'
    },
    body:JSON.stringify(data)
})
.then(response=>response.json())
.then(response=>console.log({response}))
.catch(error=>console.log({error}))
})

