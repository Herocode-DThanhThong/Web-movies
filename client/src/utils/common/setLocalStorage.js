import { TOKEN, USER_INFO } from "../contants/settingSystem";

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token);
};

export const setInfoUser = (data) => {
  // console.log("data: ", data);
  localStorage.setItem(USER_INFO, JSON.stringify(data.content));
};
