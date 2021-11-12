 import { useState } from "react";
 
 export default function LogIn({ login }) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);
   
    const performLogin = (evt) => {
      evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password);
    }
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
    }
   
    return (
      <html>
        <body> 
      <div>
        <h1>Velkommen Til Denne Seje Side</h1>
        <img src="img/oliver-be-like.jpg" />
        <h2>Log Venligst Ind Herunder:</h2>
        <form onChange={onChange} >
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          <button onClick={performLogin}>Login</button>
        </form>
        </div>
      </body>
      </html>
    )
   
  }