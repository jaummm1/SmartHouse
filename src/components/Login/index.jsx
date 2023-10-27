import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:9000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>cici </h1>
          
           <p>Não estamos mais juntos, mas eu ainda te amo, como sempre amei. Desde quando ficamos a primeira vez em 2018,</p>
Cada vez que eu falo com você, que penso em você, que te vejo, meu coração bate mais forte como se fosse a primeira vez. <p>Eu sinto falta dos momentos em que estive com você, que hoje são apenas lembranças.</p> 
<p>Eu não sabia que conseguia amar alguém como te amo! A saudade é oque mais dói nesse amor infelizmente. Muitos dizem que amar é deixar ir.</p> <p>Eu não quero e não vou deixar algo de tão especial e tão puro para trás isso pode parecer muito egoísta da minha parte. Por querer tentar</p>
Mas sí eu não puder fazer você a pessoa mais feliz, eu chego o mais perto disso possível.
Te amo mil milhões, Cici. &#10084;


<p>Ass. Jv</p>

<Link to="/signup">
            <button type="button" className={styles.white_btn} style={{marginTop: "50px"}}>
              Continuar?
            </button>
          </Link>
           
          </form>
        </div>
       
      </div>
    </div>
  );
};

export default Login;
