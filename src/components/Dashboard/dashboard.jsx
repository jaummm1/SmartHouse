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
      <form className={styles.form_container} onSubmit={handleSubmit}></form>
      <h1>SmartHouse</h1>

      <h4>
        A casa automática com sensores de solo, chuva e gás é um exemplo
        avançado de residência inteligente, projetada para fornecer conforto,
        segurança e eficiência energética. Ela incorpora uma variedade de
        sensores estrategicamente colocados para monitorar as condições
        ambientais ao redor da casa. Vamos explorar as características dessa
        casa em detalhes:
      </h4>
      <ul>
        <li>
          Sensores de Solo: A casa possui sensores de solo instalados em seu
          jardim ou gramado. Esses sensores medem a umidade do solo e fornecem
          informações sobre as necessidades de irrigação das plantas. Com base
          nesses dados, um sistema automatizado de irrigação é acionado para
          fornecer água somente quando necessário, economizando recursos
          hídricos e garantindo que as plantas recebam a quantidade adequada de
          água.
        </li>

        <li>
          Sensores de Chuva: Os sensores de chuva instalados no telhado da casa
          monitoram a precipitação. Quando detectam chuva, eles enviam um sinal
          para o sistema automatizado da casa. Isso pode acionar o fechamento
          automático de janelas e toldos, garantindo que o interior da casa
          permaneça seco e protegido. Além disso, o sistema de irrigação pode
          ser temporariamente desativado, já que as plantas receberão água
          naturalmente.
        </li>

        <li>
          Sensores de Gás: A segurança é uma prioridade em uma casa automática.
          Portanto, sensores de gás são instalados em áreas propensas a
          vazamentos, como a cozinha e o sistema de aquecimento. Esses sensores
          monitoram a presença de gases inflamáveis e tóxicos no ar. Se houver
          uma concentração anormal desses gases, o sistema de segurança da casa
          é ativado imediatamente. Isso pode incluir o desligamento automático
          do fornecimento de gás, a abertura de janelas para ventilação e o
          envio de notificações de emergência para os moradores e serviços de
          emergência.
        </li>

        <li>
          Integração com Sistema de Automação Residencial: Além dos sensores
          específicos, a casa automática é equipada com um sistema de automação
          residencial central. Esse sistema permite a integração de todos os
          sensores e dispositivos da casa. Os moradores podem controlar
          remotamente várias funções da casa, como iluminação, temperatura,
          segurança e gerenciamento de energia, através de um aplicativo em seus
          smartphones ou de comandos de voz para assistentes virtuais.
        </li>

        <li>
          Eficiência Energética: A casa automática também é projetada para
          maximizar a eficiência energética. Sensores de luz natural podem
          ajustar automaticamente as cortinas ou persianas para aproveitar ao
          máximo a iluminação natural, reduzindo o uso de energia elétrica. Além
          disso, o sistema de automação residencial pode otimizar o uso de
          aquecimento e resfriamento, ajustando a temperatura de acordo com a
          presença dos moradores e a detecção de abertura de portas e janelas.
        </li>
      </ul>
      <Link to="/">
        <button type="button" style={{ color: "black" }}>
          Home
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
