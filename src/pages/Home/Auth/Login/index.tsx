import './styles.css';

const Login = () => {
    return(
        <div className="login-container">
            <h1>LOGIN</h1>
            <form className="form-container">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <button className="buttom-custom">FAZER LOGIN</button>
            </form>
        </div>
    );
}

export default Login;