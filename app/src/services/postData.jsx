import axios from "axios";

const postData = async (item) => {
  axios({
    method: "post",
    url: "https://rickandandmorty-server.onrender.com/Comments",
    data: item,
  });
};

export default postData;
