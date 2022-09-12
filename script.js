fetch('https://reqres.in/api/users').then((resultValue)=>{
    resultValue.json().then((data)=>{
        console.log(data)
        showData(data)

    })
})
function showData(value){
    console.log(value)
    let list = value.data;
    console.log(list)
    let htmlPage = " ";
    list.forEach((clientObj)=>{
        htmlPage += `<div class="box">
        <h1 class ="fullname">${clientObj.first_name} ${clientObj.last_name}</h1>
        <h3 class="email"><b>Email: </b>${clientObj.email}</h3>
        <img class = "img" src="${clientObj.avatar}"/>
         </div>`
    })
    document.getElementById("container").innerHTML=htmlPage;
    console.log(htmlPage)
}