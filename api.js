checkSession();
let user;

const endpoint = "http://localhost/php&js/backend/";

function checkSession() {

    fetch(endpoint + 'checksession.php')
        .then(response => response.json())
        .then(data => {

            if (data.valid) {

                fetch(`${endpoint}getuser.php?id=${data.user_id}`)
                    .then(response => response.json())
                    .then(data => {

                        user = data.user;
                        const username = document.querySelector('#name');
                        username.innerHTML = user.firstname + " " + user.lastname;

                    })

            }

        })

}

try {
    const loginForm = document.querySelector("#loginForm");
    loginForm.addEventListener("submit", login);
} catch (e) {

}

try {
    const registrationForm = document.querySelector("#registrationForm");
    registrationForm.addEventListener("submit", register);

} catch (e) {

}

try {
    const logoutButton = document.querySelector("#logout");
    logoutButton.addEventListener("click", logout);
} catch (e) {

}


function login(event) {

    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirm_password = document.querySelector("#confirm_password").value;

    if (password === confirm_password) {

        fetch(endpoint + 'login.php', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })

        })
            .then(response => response.json())
            .then(data => {

                if (data.success) {

                    alert(data.message);
                    window.location.replace('home.html');

                } else {

                    alert(data.message);

                }

            })

    } else {
        alert("Password doesn't matched!");

    }


}


function register(event) {

    event.preventDefault();

    const email = document.querySelector("#email").value;
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const birthdate = document.querySelector("#birthdate").value;
    const password = document.querySelector("#password").value;
    const confirm_password = document.querySelector("#confirm_password").value;

    if (password === confirm_password) {

        fetch(endpoint + 'register.php', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                email: email,
                firstname: firstname,
                lastname: lastname,
                birthdate: birthdate,
                password: password,

            })

        })
            .then(response => response.json())
            .then(data => {

                if (data.success) {

                    alert(data.message);
                    window.location.replace("login.html");

                } else {

                    alert(data.message)

                }

            })


    } else {

        alert("Password doesn't matched!");

    }


}

function logout() {

    fetch(endpoint + 'logout.php')
        .then(response => response.json())
        .then(data => {

            if (data.success) {
                alert(data.message);
                window.location.replace('login.html');
            }

        })

}


