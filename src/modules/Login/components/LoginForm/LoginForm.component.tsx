import { useFormik } from 'formik';
import { LoginFormStyles } from './LoginForm.styles';

const initialValues = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <LoginFormStyles.FormWrapper>
      <LoginFormStyles.Form onSubmit={formik.handleSubmit}>
        <LoginFormStyles.Title>
          Iniciar Sesion
        </LoginFormStyles.Title>
        <label htmlFor="username">
          Usuario
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Usuario"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </label>
        <label htmlFor="username">
          Password
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </label>
        <LoginFormStyles.Button type="submit">
          Submit
        </LoginFormStyles.Button>
      </LoginFormStyles.Form>
    </LoginFormStyles.FormWrapper>
  );
};

export default LoginForm;
