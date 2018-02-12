import constants from 'base/constants';
import sha256 from 'sha256';
import { getData } from 'base/settings';
import * as actionsProfile from 'users/profile/actions'
import { translate } from "../../base/utils";


let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let result = {
  login: {
    submit: (response, dispatch) => {
      return response.json().then(json => {
        if (json.error) {
          return dispatch({
            type: constants.USERS_LOGIN_FETCH_FORM_ERROR,
            payload: {
              error: translate('error.wrong_user')
            }
          });
        }

        if (json.result.status === "registered") {
          return dispatch({
            type: constants.USERS_AUTH_FORM_ERROR,
            payload: {
              error: translate('error.not_activated_acc')
            }
          })
        }

        if (!json.result.ticket) {
          return dispatch({
            type: constants.USERS_LOGIN_CONTENT_AUTHENTICATION,
          })
        }

        localStorage.setItem('ticket', json.result.ticket);
        dispatch(actionsProfile.getInfo());

        return dispatch({
          type: constants.USERS_LOGIN_FETCH_FORM_SUCCESS,
        });
      });
    }
  },
  auth: {
    submit: (response, dispatch) => {
      return response.json().then(json => {
        if (json.error) {
          return dispatch({
            type: constants.USERS_AUTH_FETCH_FORM_ERROR,
            payload: {
              error: translate('error.invalid_auth_key')
            }
          });
        }

        localStorage.setItem('ticket', json.result.ticket);
        dispatch(actionsProfile.getInfo());

        return dispatch({
          type: constants.USERS_LOGIN_FETCH_FORM_SUCCESS,
        });

      });
    }
  }
};


export let login = {
  updateLoginForm: (field, value) => {
    return {
      type: constants.USERS_LOGIN_UPDATE_FORM,
      payload: {
        field, value
      }
    }
  },
  submitLoginForm: form => {
    return dispatch  => {

      let params = Object.assign({}, form);

      if (!params.password || !params.login ) {
        return dispatch({
          type: constants.USERS_LOGIN_FORM_ERROR,
          payload: {
            error: translate('error.fill_all_field')
          }
        });
      }

      if (!regEmail.test(params.login)) {
        return dispatch({
          type: constants.USERS_LOGIN_FORM_ERROR,
          payload: {
            error: translate('error.invalid_format', {field: translate('form.email')})
          }
        })
      }

      if (params.google_recaptcha_response === '') {
        delete params.google_recaptcha_response;
      }

      params.password = sha256(params.password);
      params.password = sha256(params.password + params.login);

      dispatch({type: constants.USERS_LOGIN_FETCH_FORM});

      return getData(1, params, 'user.login').then(response => {
        if (response.ok) {
          result.login.submit(response, dispatch);
        } else {
          return response.json().then(json => {
            return dispatch({
              type: constants.USERS_LOGIN_FETCH_FORM_ERROR,
              payload: {
                error: translate('error.unknown_error'),
              }
            });
          });
        }
      }).catch(error => {
        console.log(error);
      });
    }
  },
};

export let auth = {
  cancel: () => {
    return {type: constants.USERS_AUTH_CANCEL}
  },
  updateAuthForm: (field, value) => {
    return {
      type: constants.USERS_AUTH_UPDATE_FORM,
      payload: {
        field,
        value
      }
    }
  },
  submitAuthForm: (form, login)=> {
    return dispatch => {

      if(!form.code) {
        return dispatch({
          type: constants.USERS_AUTH_FORM_ERROR,
          payload: {
            error: translate('error.fill_all_field')
          }
        });
      }

      if(!Number(form.code)) {
        return dispatch({
          type: constants.USERS_AUTH_FORM_ERROR,
          payload: {
            error: 'Enter the 6-digit code!'
          }
        });
      }

      let params = {
        login: login,
        'auth_2fa_code': Number(form.code)
      };

      params.password = sha256(form.password);
      params.password = sha256(params.password + params.login);

      dispatch({type: constants.USERS_AUTH_FETCH_FORM});

      return getData(1, params, 'user.login').then(response => {
        if (response.ok) {
          result.auth.submit(response, dispatch);
        } else {
          return response.json().then(json => {
            return dispatch({
              type: constants.USERS_AUTH_FETCH_FORM_ERROR,
              payload: {
                error: translate('error.unknown_error'),
              }
            });
          });
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }
};
