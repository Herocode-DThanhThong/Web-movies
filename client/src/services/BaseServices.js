import axios from "axios";
import { DOMAIN, TOKEN } from "../utils/contants/settingSystem";

export class BaseService {
  constructor() {}

  get = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      data: model,
      method: "POST",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      data: model,
      method: "PUT",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };

  delete = (url) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
}
