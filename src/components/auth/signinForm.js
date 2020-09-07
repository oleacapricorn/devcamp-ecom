import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';
import { FormButton } from '../formFields';
import Details from '../details';
import history from '../../history';


class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: 'Create Account',
        onClick: () => history.push('/sigup')
      },
      {
        _id: 1,
        title: 'Forgot account email',
        onClick: () => console.log('Forgot account email')
      },
      {
        _id: 2,
        title: 'Forgot Password',
        onClick: () => console.log('Forgot Password')
      }
    ]
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field className='sign-in-form__email'
          type='email'
          title='Email'
          placeholder='Email'
          name='email'
          component={FormInput} />
        <Field className='sign-in-form__password'
          type='password'
          title='Password'
          placeholder='Password'
          name='password'
          component={FormInput} />
        <div className='sign-in-form__line'></div>
        <Field className='sign-in-form__login'
          onClick={() => history.push('/shop')}
          type='submit'
          title='Login'
          name='login'
          component={FormButton} />
        <Details className='sign-in-form__details' title='QuickLinks' links={links} />
      </form>
    );
  }
}
SignInForm = reduxForm({
  form: 'SignInForm'
})(SignInForm);

export default SignInForm;