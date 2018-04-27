import React from 'react';

const Login = () => (
  <section className="section" id="login">
    <div className="container">
      <div className="box">
        <form className="form">
          <h1 className="title">Login</h1>
          <div className="field">
            <label className="label" htmlFor="email">Email Address</label>
            <div className="control has-icons-left">
              <input type="email" name="email" id="email" className="input" />
              <span className="icon is-left">
                <i className="fas fa-envelope" />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <div className="control has-icons-left">
              <input type="password" name="password" id="password" className="input" />
              <span className="icon is-left">
                <i className="fas fa-lock" />
              </span>
            </div>
          </div>
          <p>Don't have an account, register <a href="register.html" className="has-text-primary">here</a></p>
          <div className="field">
            <input type="submit" value="Submit" className="button is-primary is-outlined is-medium" />
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Login;
