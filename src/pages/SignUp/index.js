import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert email valid')
    .required('email is obrigatorio'),
  password: Yup.string()
    .min(6, 'password minimun length 6')
    .required('password is obrigatorio'),
  name: Yup.string().required('name is obrigatorio'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="logo" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input placeholder="name" name="name" />
        <Input type="email" placeholder="email" name="email" />
        <Input placeholder="password" name="password" />

        <button type="submit">Create your account</button>
        <Link to="/register">has account</Link>
      </Form>
    </>
  );
}
