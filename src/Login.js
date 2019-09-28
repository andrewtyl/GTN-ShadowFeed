import React from 'react';
import { GoogleLogin } from 'react-google-login';

function Login() {
    window.localStorage.clear()

    const responseGoogle = (res) => {
        fetch('http://holorecord.ajessen.com/googleAuth/validateToken', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ access_token: res.accessToken, email: res.profileObj.email, google_id: res.googleId })
        })
            .then(res => {
                return res.json()
            })
            .then(parsedRes => {
                if (parsedRes.error) {
                    alert("Login failed. Refreshing page...")
                    window.location.reload();
                }
                else {
                    fetch('http://holorecord.ajessen.com/users/exists', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({ google_id: parsedRes.user_id })
                    })
                        .then(usersRes => {
                            return usersRes.json()
                        })
                        .then(parsedUserRes => {
                            console.log(parsedUserRes)
                            if (!parsedUserRes.error) {
                                window.localStorage.setItem('user_id', parsedUserRes.user_id)
                                window.location.href = "/main"
                            }
                            else if (parsedUserRes.error === "User could not be found or does not exist") {
                                window.localStorage.setItem('gid', parsedRes.user_id)
                                window.localStorage.setItem('user_email', parsedRes.email)
                                window.localStorage.setItem('registering', true)
                                window.location.href = "/register"
                            }
                            else {
                                console.error('ERROR at /src/Login.js during login process. Line of code should be unreachable. Additional details following ' + parsedUserRes)
                                alert("There was an issue logging you in. Refreshing page...")
                                window.location.reload();
                            }
                        })
                }
            })
    }
    
    const responseGoogleFail = (res) => {
        alert("Login failed. Refreshing page...")
        window.location.reload();
    }
    
    return (
        <div id="login-main">
            <GoogleLogin
                clientId="336049997618-4kmahk10enhfr6d39gn05rrf5lu7b4n3.apps.googleusercontent.com"
                buttonText="Log In with Google"
                cookiePolicy={'single_host_origin'}
                onSuccess={responseGoogle}
                onFailure={responseGoogleFail}
            />
            <h3 id="tosLabel">Terms of Service</h3>
            <textarea id="tos" disabled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Eu sem integer vitae justo eget magna fermentum. Fusce ut placerat orci nulla pellentesque dignissim enim. In eu mi bibendum neque egestas congue quisque egestas diam. Risus sed vulputate odio ut enim. Fringilla phasellus faucibus scelerisque eleifend donec. Suspendisse potenti nullam ac tortor. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Integer enim neque volutpat ac tincidunt vitae semper quis. Quam id leo in vitae turpis massa sed elementum tempus. Facilisis gravida neque convallis a cras semper auctor neque vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies. Ut tristique et egestas quis ipsum suspendisse ultrices. Aliquet nibh praesent tristique magna sit amet purus gravida. Tortor at auctor urna nunc. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Sit amet volutpat consequat mauris nunc. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Metus aliquam eleifend mi in nulla posuere. Volutpat ac tincidunt vitae semper. Quisque id diam vel quam elementum. Magna fringilla urna porttitor rhoncus. Nam aliquam sem et tortor. Vitae proin sagittis nisl rhoncus mattis rhoncus. Quisque sagittis purus sit amet volutpat. Adipiscing commodo elit at imperdiet. Faucibus purus in massa tempor nec. Praesent elementum facilisis leo vel. Quis varius quam quisque id diam vel quam elementum pulvinar. Volutpat odio facilisis mauris sit amet massa vitae. Sagittis purus sit amet volutpat consequat. Et malesuada fames ac turpis egestas. Porta lorem mollis aliquam ut porttitor leo. In hac habitasse platea dictumst quisque sagittis purus. Eu tincidunt tortor aliquam nulla facilisi cras. In iaculis nunc sed augue lacus viverra vitae. Felis imperdiet proin fermentum leo vel orci porta non. Et ligula ullamcorper malesuada proin. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Turpis massa sed elementum tempus egestas sed sed risus. Lacus luctus accumsan tortor posuere. Condimentum id venenatis a condimentum. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Varius morbi enim nunc faucibus a pellentesque sit. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Leo urna molestie at elementum eu facilisis sed odio. Donec enim diam vulputate ut pharetra sit. Ante in nibh mauris cursus. Euismod in pellentesque massa placerat duis ultricies. Quam vulputate dignissim suspendisse in est. Id velit ut tortor pretium viverra suspendisse. Mattis nunc sed blandit libero volutpat. Accumsan sit amet nulla facilisi morbi tempus iaculis. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Egestas integer eget aliquet nibh praesent tristique magna sit amet. Felis eget nunc lobortis mattis aliquam faucibus purus in. Consequat id porta nibh venenatis cras. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Quisque egestas diam in arcu cursus euismod quis. Sed turpis tincidunt id aliquet. Tortor posuere ac ut consequat semper. Vivamus arcu felis bibendum ut. Tellus rutrum tellus pellentesque eu tincidunt tortor. Justo donec enim diam vulputate ut pharetra. Ultrices tincidunt arcu non sodales neque sodales ut. Erat velit scelerisque in dictum non consectetur a erat. Dictumst vestibulum rhoncus est pellentesque. Aliquet bibendum enim facilisis gravida neque. Neque convallis a cras semper. Sit amet consectetur adipiscing elit ut aliquam purus. Pretium viverra suspendisse potenti nullam ac tortor vitae. Aliquet porttitor lacus luctus accumsan tortor posuere. Adipiscing at in tellus integer feugiat scelerisque. Ut diam quam nulla porttitor massa id neque aliquam. Et netus et malesuada fames ac turpis egestas. Tempor nec feugiat nisl pretium fusce id velit. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed viverra ipsum nunc aliquet bibendum enim.
        </textarea>
        </div>
    );
}


export default Login;
