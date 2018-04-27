import React from 'react';

const Register = () => (
  <main>
    <section className="section" id="login">
      <div className="container">
        <div className="box">
          <form className="form">
            <h1 className="title">Register</h1>
            <div className="field">
              <label className="label" htmlFor="username">Username</label>
              <div className="control has-icons-left">
                <input type="text" name="username" id="username" className="input" />
                <span className="icon is-left">
                  <i className="fas fa-user" />
                </span>
              </div>
            </div>
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
            <div className="field">
              <label className="label" htmlFor="passwordConfirm">Confirm Password</label>
              <div className="control has-icons-left">
                <input type="password" name="passwordConfirm" id="passwordConfirm" className="input" />
                <span className="icon is-left">
                  <i className="fas fa-check" />
                </span>
              </div>
            </div>
            <p>Already registered ? Please  <a href="login.html" className="has-text-primary">login</a>.</p>
            <div className="field">
              <input type="submit" value="Submit" className="button is-primary is-outlined is-medium" />
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
);

export default Register;
