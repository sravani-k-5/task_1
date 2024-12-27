import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
    super(props)
    this.state={
        user:"raji",
        pass:"1234556",
        email:"sracvs@gmail.com",
    }
}
    handleSubmit(e){
        e.preventDefault();
        console.log({email:e.target.email.value,
            passord:e.target.password.value
        })
    
}
  render() {
    return (
      <>
      <h1>Login form</h1>
      <form id='loginform' onSubmit={(e)=>this.handleSubmit(e)}>
        <label>Email:</label>
        <input type="email" placeholder='Enter email....' name='email' value={this.state.email}/>
        <label>Password:</label>
        <input type='password' placeholder='enter password' name='password' value={this.state.password}/>
        <input type="submit" value="login" />
      </form>
      </>
    )
  }
}

