

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


function login(event) {

    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirm_password = document.querySelector("#confirm_password").value;

    if (password === confirm_password) {

        fetch('http://localhost/php&js/backend/login.php', {

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

        fetch('http://localhost/php&js/backend/register.php', {

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

