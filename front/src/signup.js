import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from './photo/logo.png'

// add config
const instance = axios.create({
  baseURL: 'http://localhost:8000',
  crossDomain: true,
  withCredentials: true,
  header:"multipart/form-data"
});

class SignUp extends Component{
  constructor(props){
    super(props);
    this.state={
      username:"",
      name:"",
      password:"",
      errorMessage:""
    }
  }


  onChangeName(evt){
    this.setState({
      name:evt.target.value
    })
  }

  onChangeUser(evt){
    this.setState({
      username:evt.target.value
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
    instance.post('/register/', {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.name[0],
      lastName: this.state.name.substr(1)
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
              <p className="loginField">
              <span className="loginText">用户名：</span>
              <input className="login" type="text" onChange={this.onChangeUser.bind(this) } />
              </p>
              <p className="loginField">
              <span className="loginText">&nbsp;&nbsp;&nbsp;&nbsp;姓名：</span>
              <input className="login" type="text" onChange={this.onChangeName.bind(this) } />
              </p>
              <p className="loginField">
              <span className="loginText">&nbsp;&nbsp;&nbsp;&nbsp;密码：</span>
              <input class="login" type="password"  onChange={this.onChangePass.bind(this) }/>
              </p>
              <p>{this.state.errorMessage}</p>
              <p>&nbsp;</p>
              <button class="loginButton" onClick={() => this.SubmitInfo()} >完成</button>
              <p>&nbsp;</p>
              <p className="loginText"><Link to="/login">已有账号？点此登录</Link></p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}



export default SignUp;