import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import { Link } from 'react-router-dom';
import { alert } from 'elements/alerts/index';
import Transition from 'react-transition-group/Transition';
import Processing from 'elements/processing';
import { translate } from "base/utils";

class Login extends Component {
  constructor(){
    super(...arguments);
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({type: 'USERS_LOGIN_LEAVE_PAGE'})
  }

  componentWillReceiveProps() {
    const { processing, content } = this.props;
    if (processing && this.recaptchaInstance && content === 'login') {
      this.recaptchaInstance.reset();
    }
  }

  onSubmit = ()=> {
    const { loginForm, submitLoginForm, statusRecaptcha} = this.props;
    const { dispatch } = this.props;
    if (statusRecaptcha && loginForm.google_recaptcha_response === '') {
      return dispatch({
        type: 'USERS_LOGIN_FORM_ERROR',
        payload: {
          error: translate('error.fill_all_field')
        }
      });
    }
    submitLoginForm(loginForm)
  };

  render() {
    const { loginForm, updateLoginForm, submitLoginForm, submitAuthForm,
            content, cancel, error, authForm, updateAuthForm, processing, statusRecaptcha } = this.props;
    return (
      <div className="login content">
        <div className="login__form">
          <div className="login__form-title">
            <p className="login__form-title__description">
              {translate('page.sign_in')}
            </p>
          </div>
          {processing ? <Processing />:null}
          <Transition in={content === 'login'} timeout={1300}
                      unmountOnExit={true}>
            {(state) => {
              return(
                <div className={`login__form-container ${state}`}>
                <div className="login__form-container__item">
                  <input type="text" className="login__form-container__item-input"
                         placeholder={translate('form.email')} value={loginForm.login}
                         onChange={e => updateLoginForm('login', e.target.value)}/>
                </div>
                <div className="login__form-container__item">
                  <input type="password" className="login__form-container__item-input"
                         placeholder={translate('form.password')}
                         style={{paddingRight: '120px'}}
                         onChange={e => updateLoginForm('password', e.target.value)}/>
                  <a href="/users/reset/password"
                     className="login__form-container__item-forgot">{translate('page.forgot_pwd')}</a>
                </div>
                  { statusRecaptcha? <Recaptcha
                    sitekey="6Lf2mQ8UAAAAAHxT3TvPR2KMOYW2qS4g8j7qsLH8"
                    render='explicit'
                    elementID="login__recaptcha"
                    onloadCallback={console.log.bind(this, "recaptcha loaded")}
                    verifyCallback={hash => updateLoginForm('google_recaptcha_response', hash)}
                    expiredCallback={() => updateLoginForm('google_recaptcha_response', '')}
                    ref={e => this.recaptchaInstance = e}
                  />: null}
                  <div className="login__form-container__item">
                    <div className="login__form-container__item-recaptcha">

                        <div className="submit">
                          <a className="button button-cover primary small"
                             onClick={this.onSubmit}>
                            {translate('action.login')}
                          </a>
                        </div>

                    </div>
                  </div>
                {error ?
                <div className="login__form-container__item">
                  <div className="login__form-container__error">
                    {error}
                  </div>
                </div>: null}

                <div className="login__form-container__link">
                  <Link to='/users/registration' className="login__form-container__link-item">
                    {translate('page.not_registered')}
                  </Link>
                </div>
              </div>
            )}}
          </Transition>
          <Transition in={content === 'auth'} timeout={1500} unmountOnExit={true}>
            {(state) => {
              return (
              <div className={`auth__form-container ${state}`}>
                <div className="login__form-container__item">
                  <input type="text" className="login__form-container__item-input"
                         placeholder={translate('form.auth_code')} value={authForm.code}
                         onChange={e => updateAuthForm('code', e.target.value)}/>
                </div>
                {error ?
                <div className="login__form-container__item">
                  <div className="login__form-container__error">
                    {error}
                  </div>
                </div>: null}
                <div className="auth__form-container__buttons">
                  <div className="auth__form-container__buttons-item">
                    <a className="button button-cover primary small"
                       onClick={e => cancel()}>
                      {translate('action.cancel')}
                    </a>
                  </div>
                  <div className="auth__form-container__buttons-item text-right">
                    <a className="button button-cover primary small"
                       onClick={ev => submitAuthForm(authForm, loginForm.login)}>
                      {translate('action.authenticate')}
                    </a>
                  </div>
                </div>
              </div>);
            }}
          </Transition>
        </div>
      </div>

    )
  }
}

export default Login;
