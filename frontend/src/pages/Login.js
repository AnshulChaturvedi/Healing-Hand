import React from "react";

export default function Login() {
    return (
        <div>
            <div className="loginbox">
                <p className="googlesignin">Sign in with google</p>
                <p>-OR-</p>
                <h4 className="login--heading">Login</h4>
                <form>
                    <div>
                        <label htmlFor="patient">Patient</label>
                        <input type="checkbox" id="patient" />
                        <label htmlFor="doctor">Doctor</label>
                        <input type="checkbox" id="doctor" />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            placeholder="username"
                            autoComplete="off"
                            name="username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            placeholder="password"
                            name="password"
                            id="password" 
                        />
                    </div>
                    <button type="submit">Login</button>
                    <p>Sign in to your account</p>
                    <button>Register New Account</button>
                </form>
                
            </div>
        </div>
    );
}
