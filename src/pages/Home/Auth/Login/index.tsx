import { useForm } from "react-hook-form";
import { requestBackendLogin } from "util/request";
import { useState } from "react";

import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const [hasError, setHasError] = useState(false);
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        console.log("Sucesso", response.data);

      })
      .catch((error) => {
        setHasError(true);
        console.log("Error", error);
      });
  };

  return (
    <div className="login-container">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger" role="alert">
          Erro ao efetuar login!
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <input
          type="text"
          {...register("username", {
            required: 'Campo obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'}
            })}
          placeholder="Email"
          name="username"
          className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback d-block feedback-custom">{errors.username?.message}</div>
        <input
          type="password"
          {...register("password", {
              required: 'Campo obrigatório',
          })}
          placeholder="Senha"
          name="password"
          className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback d-block feedback-custom">{errors.password?.message}</div>
        <button className="buttom-custom">FAZER LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
