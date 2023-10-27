import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Chart from "chart.js/auto";

const Dashboard = () => {
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

  const option = {
    xAxis: {
      data: ["A", "B", "C", "D", "E"],
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 43, 49],
        type: "line",
        stack: "x",
      },
      {
        data: [5, 4, 3, 5, 10],
        type: "line",
        stack: "x",
      },
    ],
  };

  return (
    <div className={styles.left}>
      <form className={styles.form_container} onSubmit={handleSubmit}>
      <h1>TE AMO POHAAAAAAAAAA &#10084;</h1>

    
      <Link to="/">
        <button type="button" style={{ color: "black" }} className={styles.white_btn}>
          Home
        </button>
      </Link>
      </form>
  
      </div>
  );
};

export default Dashboard;
