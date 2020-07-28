import React from 'react';
import {Header} from './home_page';
import {  Link } from "react-router-dom";
import {Footer} from './Coursecategories';
import {BrandTag} from './Login';
import './sign.scss';
import {AuthInput,AuthButton} from '../Common/Common';

const Signup = () => (
    <div className="user-signup">
        <Header/>
        <div className="signup-block-sec">
            <div className="sign-in-block1">
                <h1 id="sign-title">Sign Up and Start Learning! </h1>
                <SignValid/>
                <p id="par">By signing up, you agree to our <span>Terms of Use</span>  and <span>Privacy Policy.</span> </p>
                <h2>Don't have an account?
                    <Link  to="/login">
                        <span>Log in</span>
                    </Link>
                </h2>
            </div>
            <BrandTag/>
        </div>
        <Footer/>
    </div>
);

export default Signup;

const signstate = {
    fullname:"",
    email:"",
    password:"",
    check:false
};

class SignValid extends React.Component {
    state = signstate;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
          [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
      };

    handleSubmit = e => {
        e.preventDefault ();
        console.log(this.state)
    }

    render() {
        const {fullname,email,password,check} = this.state;
        return (
            <div className="sign-in-form">
                <form onSubmit={this.handleSubmit}>
                <AuthInput
                    name="fullname"
                    type="text"
                    value={fullname}
                    placeholder="full name"
                    onChange={this.handleChange}
                />
                <AuthInput
                    name="email"
                    type="text"
                    value={email}
                    placeholder="email"
                    onChange={this.handleChange}
                />
                <AuthInput
                    name="password"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={this.handleChange}
                />
                <div id="check">
                <input
                name="check"
                type="checkbox"
                checked={check}
                onChange={this.handleChange}
                 />
                 <p>I’m in for emails with exciting discounts and personalized recommendations </p>
                </div>
                
                 <AuthButton title="Sign in" />
                </form>
            </div>
        )
    }

}