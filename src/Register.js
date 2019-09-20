import React from 'react';

const regSubmit = e => {
    e.preventDefault()
    let errorThrown = false;
    const user_name = document.getElementById('user_name-input').value
    const user_google_id = window.localStorage.getItem('gid')
    const user_email = window.localStorage.getItem('user_email')
    const tos_agreement = true
    const age_confirmation = true
    const newUser = { "user_google_id": user_google_id, "user_email": user_email, "tos_agreement": tos_agreement, "age_confirmation": age_confirmation, "user_name": user_name }
    fetch('http://holorecord.ajessen.com/users/newUser', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(postRes => {
            return postRes.json()
        })
        .then(parsedPostRes => {
            if (!parsedPostRes.error) {
                const user_id = parsedPostRes[0].user_id
                window.localStorage.clear()
                window.localStorage.setItem('user_id', user_id)
                let newDB = { "owner_user_id": user_id, "server_name": "Satele Shan" };
                fetch('http://holorecord.ajessen.com/db/newDB', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(newDB)
                })
                    .then(newDBres => {
                        if (!newDBres.error) {
                            window.location.href = "/main"
                        }
                        else {
                            errorThrown = true;
                            console.error(`ERROR at /src/Register.js while POSTing to /db/newDB for user ${user_id}. Please set up their databases manually.`)
                            alert("There was an issue creating your databases. Please contact support ASAP so you can login properly.")
                            window.location.href = "/"
                        }
                    })
            }
            else {
                errorThrown = true;
                console.error('ERROR at /src/Register.js while POSTing to /users/NewUser. Additional details following ' + parsedPostRes.error)
                alert("There was an issue registering your account. Please try logging in again. Redirecting...")
                window.location.href = "/login"
            }
        })
        .catch(error => {
            if (!errorThrown) {
                console.error('ERROR at /src/Register.js while POSTing to /users/NewUser. Additional details following ' + error)
                alert("There was an issue registering your account. Refreshing page...")
                window.location.reload()
            }
        })
}

function Register() {
    const registering = window.localStorage.getItem('registering')
    if (!(registering == 'true')) {
        window.location.href = "/login";
        return null;
    }
    else {
        return (
            <div id="register-main">
                <form id="register-form" onSubmit={regSubmit}>
                    <label htmlFor="user_name-input">What should we call you?</label>
                    <input type="text" id="user_name-input" placeholder="Your in game name works too!" required maxlength="32" name="user_name" />
                    <h4 id="tosLabel-register">Terms of Service</h4>
                    <textarea id="tos-register" disabled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Eu sem integer vitae justo eget magna fermentum. Fusce ut placerat orci nulla pellentesque dignissim enim. In eu mi bibendum neque egestas congue quisque egestas diam. Risus sed vulputate odio ut enim. Fringilla phasellus faucibus scelerisque eleifend donec. Suspendisse potenti nullam ac tortor. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Integer enim neque volutpat ac tincidunt vitae semper quis. Quam id leo in vitae turpis massa sed elementum tempus. Facilisis gravida neque convallis a cras semper auctor neque vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies. Ut tristique et egestas quis ipsum suspendisse ultrices. Aliquet nibh praesent tristique magna sit amet purus gravida. Tortor at auctor urna nunc. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet volutpat consequat mauris nunc. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Metus aliquam eleifend mi in nulla posuere. Volutpat ac tincidunt vitae semper. Quisque id diam vel quam elementum. Magna fringilla urna porttitor rhoncus. Nam aliquam sem et tortor. Vitae proin sagittis nisl rhoncus mattis rhoncus. Quisque sagittis purus sit amet volutpat. Adipiscing commodo elit at imperdiet. Faucibus purus in massa tempor nec. Praesent elementum facilisis leo vel. Quis varius quam quisque id diam vel quam elementum pulvinar. Volutpat odio facilisis mauris sit amet massa vitae. Sagittis purus sit amet volutpat consequat. Et malesuada fames ac turpis egestas. Porta lorem mollis aliquam ut porttitor leo. In hac habitasse platea dictumst quisque sagittis purus. Eu tincidunt tortor aliquam nulla facilisi cras. In iaculis nunc sed augue lacus viverra vitae. Felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Turpis massa sed elementum tempus egestas sed sed risus. Lacus luctus accumsan tortor posuere. Condimentum id venenatis a condimentum. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Varius morbi enim nunc faucibus a pellentesque sit. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Leo urna molestie at elementum eu facilisis sed odio. Donec enim diam vulputate ut pharetra sit. Ante in nibh mauris cursus. Euismod in pellentesque massa placerat duis ultricies. Quam vulputate dignissim suspendisse in est. Id velit ut tortor pretium viverra suspendisse. Mattis nunc sed blandit libero volutpat. Accumsan sit amet nulla facilisi morbi tempus iaculis. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Felis eget nunc lobortis mattis aliquam faucibus purus in. Consequat id porta nibh venenatis cras. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Quisque egestas diam in arcu cursus euismod quis. Sed turpis tincidunt id aliquet. Tortor posuere ac ut consequat semper. Vivamus arcu felis bibendum ut. Tellus rutrum tellus pellentesque eu tincidunt tortor. Justo donec enim diam vulputate ut pharetra. Ultrices tincidunt arcu non sodales neque sodales ut. Erat velit scelerisque in dictum non consectetur a erat. Dictumst vestibulum rhoncus est pellentesque. Aliquet bibendum enim facilisis gravida neque. Neque convallis a cras semper. Sit amet consectetur adipiscing elit ut aliquam purus. Pretium viverra suspendisse potenti nullam ac tortor vitae. Aliquet porttitor lacus luctus accumsan tortor posuere. Adipiscing at in tellus integer feugiat scelerisque. Ut diam quam nulla porttitor massa id neque aliquam. Et netus et malesuada fames ac turpis egestas. Tempor nec feugiat nisl pretium fusce id velit. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed viverra ipsum nunc aliquet bibendum enim.</textarea>
                    <input id="tosAgreement" name="tosAgreement" type="checkbox" required />
                    <label htmlFor="tosAgreement">I agree to the Terms of Service</label><br />
                    <input id="AgeConfirmation" name="ageConfirmation" type="checkbox" required />
                    <label htmlFor="AgeConfirmation">I am over the age of 13.</label><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}


export default Register;