import React from 'react';
import {  Link } from "react-router-dom";
import './login.scss';
import {Header} from './home_page';
import {Footer,BrandTag} from '../Common/Footer'
import {AuthButton,AuthInput} from '../Common/Common';

const Login = () => (
    <div className="user-log">
     <Header/>
     <div className="log-block-sec">
        <div className="log-section-box">
            <h1 id="log-title">
                Log in to Your Academy Account!
            </h1>
            <SyncBtn
            sync ={[
                {
                    idbtn:"facebook",
                    btnsync:" Connect with Facebook",
                    btnicon:"fab fa-facebook-f"
                },
                {
                    idbtn:"google",
                    btnsync:" Connect with Google",
                    btnicon:"fab fa-google"
                },
                {
                    idbtn:"apple",
                    btnsync:" Connect with Apple",
                    btnicon:"fab fa-apple"
                },
            ]}
            
            />
            <LoginValid/>
            <p>or <span>forgot password</span></p>
            <h2>Don't have an account?
                <Link  to="/signup">
                    <span>Sign up</span>
                </Link>
                
            </h2>
        </div>
        <BrandTag/>
     </div>
     <Footer/>
    </div>
);






const SyncBtn = ({sync}) => (
    <div className="sync-btn-sec">
        {sync.map (syncbtn => (
            <div className="syn-btn-sec-1">
                <button type="button" id={syncbtn.idbtn}><i class= {syncbtn.btnicon}/>{syncbtn.btnsync}</button>
            </div>
        ))}
    </div>
)
export default Login;



const initialState = {
    email: "",
    // emailError: "",
    password: "",
    // passwordError: ""
  };
  class LoginValid extends React.Component {
    state = initialState;
  
    handleChange = e => {
      console.log(e.target.value);
      this.setState({
        [e.target.name]: e.target.value
      });
    };
    // valid = () => {
    //   let emailError = "";
    //   let passwordError = "";
  
    //   const { email, password } = this.state;
  
    //   if (!email.includes("@")) {
    //     emailError = "Invalid Email,Enter valid Email";
    //   }
    //   if (password.length <= 5) {
    //     passwordError = "password is incorrect";
    //   }
    //   if (emailError || passwordError) {
    //     this.setState({ emailError, passwordError });
    //     return false;
    //   }
    //   return true;
    // };
    handleSubmit = e => {
      e.preventDefault();
      console.log(this.state);

      // const isValid = this.valid();
      // if (isValid) {
      //   console.log(this.state);
      // }
    };
    render() {
      const { email, password, } = this.state;
      return (
        <div className="log-in-form">
          <form onSubmit={this.handleSubmit}>
            <AuthInput
              name="email"
              type="text"
              value={email}
              placeholder="email"
              onChange={this.handleChange}
            />
  
            {/* <p>{emailError}</p> */}
            <AuthInput
              name="password"
              type="password"
              value={password}
              placeholder="password"
              onChange={this.handleChange}
            />
            {/* <p>{passwordError}</p> */}
            <AuthButton title="Log in" />
          </form>
        </div>
      );
    }
  }