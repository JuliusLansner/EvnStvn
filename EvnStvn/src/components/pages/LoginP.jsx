import {useState} from 'react';
import LoggedIn from './LoggedIn';
function LoginP({login}) {
const init= { username: '',password: ''};
const [loginCreds,setLoginCreds] = useState(init);

const performLogin = (e) =>{
    
    e.preventDefault();
    login(loginCreds.username,loginCreds.password);
};
const onChange = (e) => {
    
setLoginCreds({...loginCreds,[e.target.id]:e.target.value});
};
    return (<div>
    <h2>Login her</h2>
    <form onChange={onChange}>
        <input placeholder="Username" id="username"/>
        <input placeholder="Password" id="password"/>
        <button onClick={performLogin}>Login</button>
    </form>
   
    </div>  );
}

export default LoginP;