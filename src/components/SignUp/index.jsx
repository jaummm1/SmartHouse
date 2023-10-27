import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [nao, setNao] = useState(false);
  const [nao2, setNao2] = useState(false);
  const [nao3, setNao3] = useState(false);
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:9000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div >
    
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
             
            </button>
          </Link>
        </div>
        <div >
          <form className={styles.form_container} onSubmit={handleSubmit}>
          {!nao2 && nao ? (<button type="submit" onClick={()=>{setNao2(true)
          setNao3(false)}} className={styles.green_btn}>
                NAO
              </button> ):null}
           <h5>Quero te pedir uma chance para fazer a gente dar certo e ficar daqui até a eternidade juntos.</h5><h5> Topa?</h5>
           
           {!nao3 && nao && nao2? (<button type="submit" onClick={()=>{setNao2(true)
             setNao3(true) 
             setNao(false)}} className={styles.green_btn}>
                NAO
              </button> ):null}
              <Link to="/Menu">
              <button type="submit" className={styles.green_btn}>
                SIM
              </button>
              </Link>
            {!nao  ? (<button type="submit" onClick={()=>{setNao(true)
               setNao2(false)
               }} className={styles.green_btn}>
                NAO
              </button> ):null}
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
