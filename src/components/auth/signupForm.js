import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormInput } from '../formFields';
import { FormButton } from '../formFields';
import Details from '../details';
import history from '../../history';


class SignUpForm extends Component {
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
      <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
        <Field className='sign-up-form__name'
          type='name'
          title='Name'
          placeholder='Name'
          name='name'
          component={FormInput} />
        <Field className='sign-up-form__email'
          type='email'
          title='Email'
          placeholder='Email'
          name='email'
          component={FormInput} />
        <Field className='sign-up-form__password'
          type='password'
          title='Password'
          placeholder='Password'
          name='password'
          component={FormInput} />
        <Field className='sign-up-form__confirm-password'
          type='password'
          title='Confirm Password'
          placeholder='Confirm Password'
          name='confirm'
          component={FormInput} />

        <div className='sign-up-form__line'></div>

        <Field className='sign-up-form__login'
          type='submit'
          title='Login'
          name='login'
          short='true'
          component={FormButton} />
        <Field className='sign-up-form__back'
          onClick={() => console.log('tryna go back')}
          type='button'
          title='Back'
          name='back'
          short={true}
          component={FormButton} />
        <Details className='sign-up-form__details' title='QuickLinks' links={links} />
      </form>
    );
  }
}
SignUpForm = reduxForm({
  form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;