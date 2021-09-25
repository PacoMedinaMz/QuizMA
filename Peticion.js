import axios from "axios";

const sendFormulario = (path, datos) => {
  const url = "https://apiqm.rmaafs.com" + path;
  axios
    .post(url, datos)
    .then(({ data }) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default sendFormulario;
