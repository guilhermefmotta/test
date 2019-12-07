import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert email valid')
    .required('email is obrigatorio'),
  password: Yup.string().required('password is obrigatorio'),
});

export default function Signin() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="logo" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input type="email" placeholder="email" name="email" />
        <Input placeholder="password" name="password" />

        <button type="submit">{loading ? 'loading..' : 'Acess'}</button>
        <Link to="/register">Create you account</Link>
      </Form>
    </>
  );
}
