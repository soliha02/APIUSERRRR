let btn = document.getElementById('btn');

btn.addEventListener("click", () => {
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((json) => userkorinishi(json.results[0]));
});
function userkorinishi(odam) {
    const user = document.getElementById('user')
    const ism = document.createElement('h1')
    const age = document.createElement('h2')
    const tel = document.createElement('h2')
    const address = document.createElement('h3')
    const email = document.createElement('h3')
    const rasm = document.createElement('img')
    user.innerHTML = ''
    rasm.src = odam.picture.large;
    ism.textContent = `${odam.name.title} ${odam.name.first} ${odam.name.last}`
    age.textContent = 'age: ' + odam.dob.age;
    tel.textContent = 'phone: ' + odam.phone;
    address.textContent = 'addres: ' + odam.location.country + '' + odam.location.city;
    email.textContent = 'email: ' + odam.email;
    user.appendChild(rasm)
    user.appendChild(ism)
    user.appendChild(age)
    user.appendChild(tel)
    user.appendChild(address)
    user.appendChild(email)
}