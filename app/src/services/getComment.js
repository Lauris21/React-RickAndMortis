export const getComment = async () => {
  const data = await fetch(
    "https://rickandandmorty-server.onrender.com/Comments"
  );
  const dataJson = await data.json();
  return dataJson;
};
