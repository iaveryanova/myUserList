import React, {useState} from 'react'

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
  return (
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Login</label>
    <input type="text" className="form-control" id="exampleInputLogin1" value={login} onChange={(event) => setLogin(event.target.value)}/>

  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(event) => setPassword(event.target.value)}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}

export default Login 