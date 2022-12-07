import { TOKEN } from "../contants/settingSystem";

export const checkLogin = () => {
  const token = localStorage.getItem(TOKEN);
};
