import userData from "./UserData";
export default function checkLoginService(state) {
  const userdataa = userData();
  let isLogged = false;

  userdataa.forEach((item) => {
    if (item.username === state.username && item.password === state.password) {
      isLogged = true;
    }
  });

  return isLogged;
}
