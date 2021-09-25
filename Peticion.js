import axios from "axios";

const sendFormulario = (path, datos) => {
  axios
    .post(
      "https://apiqm.rmaafs.com" + path,
      { datos },
      {
        "content-type": "application/json",
        Authorization: "xxx",
      }
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);
      alert("Se enviaron con éxito ");
    })
    .catch((error) => {
      console.log(error);
      alert("Error");
    });
};

export default sendFormulario;
