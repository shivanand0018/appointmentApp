var userList = document.getElementById('users');
var form = document.getElementById('my-form')
var userName = document.getElementById('userName')
var email = document.getElementById('email')
var phoneNumber = document.getElementById('phone')
var submitBtn = document.getElementById('submit')
window.addEventListener('DOMContentLoaded', async () => {
    const user = await axios.get(`http://localhost:3000/home/users`)
    console.log(user);
    for (let i = 0; i < user.data.userData.length; i++) {
        showData(user.data.userData[i])
    }
})

function showData(obj) {
    let text = `<li id=${obj.email} >${obj.username}   |   ${obj.email}   |   ${obj.phoneNumber}
        <button class="deleteBtn" onclick="deleteUser('${obj.email}')" style="position:absolute; right:35%" >Delete</button>  
        </li>`
    userList.innerHTML = userList.innerHTML + text
}

async function deleteUser(id) {
    try {
        console.log(id)
        const resp = await axios.delete(`http://localhost:3000/home/deleteUser/${id}`)
        console.log(resp)
        let li = document.getElementById(id);
        userList.removeChild(li);
    } catch (err) {
        console.log("ERR: FE_main.js deleteUser")
    }
}

async function addUser(e) {
    try {
        e.preventDefault();
        const data = {
            username: userName.value,
            email: email.value,
            phoneNumber: phoneNumber.value
        }
        console.log(data);
        let res=await axios.post("http://localhost:3000/home/addUsers", data)
        showData(res.data.userData)
        console.log(res.data)
    }
    catch (err) {
        console.log(err)
    }
}
