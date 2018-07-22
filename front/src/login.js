import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from './photo/logo.png'

// add config
const instance = axios.create({
  baseURL: 'http://localhost:8000',
  crossDomain: true,
  withCredentials: true
});

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      password:"",
      errorMessage:""
    }
  }


  onChangeName(evt){
    this.setState({
      name:evt.target.value
    })
  }

  onChangeEmail(evt){
    this.setState({
      email:evt.target.value
    })
  }

  onChangePass(evt){
    this.setState({
      password:evt.target.value
    })
  }

  catchErr(error){
    console.log(error);
    this.setState({
      errorMessage:error
    })
  }

  catchRes(res){
    const msg = res.data;
    console.log(msg);
    this.props.updateUser(true,msg.name);
  }

  SubmitInfo(){
    axios.post('/login', {
      username: this.state.name,
      password: this.state.password
    }).then( (res) => {
      console.log("pack to main");
      this.catchRes(res);
    }).catch( (error) => {
      this.catchErr(error);
    });
  }
  

  render(){
    return(
      <div className="loginPage">
        <section class="hero is-fullheight">
          <div class="hero-body">
            <div class="container has-text-centered">
              <img src={logo} width="80px" />
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p className="loginField">
              <span className="loginText">用户名：</span>
              <input className="login" type="text" onChange={this.onChangeName.bind(this) } />
              </p>
              <p>
              <span className="loginText">&nbsp;&nbsp;&nbsp;&nbsp;密码：</span>
              <input class="login" type="password"  onChange={this.onChangePass.bind(this) }/>
              </p>
              <p>{this.state.errorMessage}</p>
              <p>&nbsp;</p>
              <button class="loginButton" onClick={() => this.SubmitInfo()} >进入</button>
              <p>&nbsp;</p>
              <p className="loginText"><Link to="/signup">没有账号？点此注册</Link></p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}



export default Login;