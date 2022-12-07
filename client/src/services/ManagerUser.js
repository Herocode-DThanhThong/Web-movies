import { BaseService } from "./BaseServices";

export class ManagerUser extends BaseService {
  constructor() {
    return super();
  }

  loginApi = (data) => {
    // {username:'',password:''}
    return this.post("auth/login", data);
  };

  registerApi = (data) => {
    return this.post("auth/register", data);
  };

  checkLoginApi = () => {
    return this.get("auth");
  };

  checkAdminApi = () => {
    return this.get("manageUser/admin");
  };

  getAllUserApi = () => {
    return this.get("manageUser/getAllUser");
  };

  editUserApi = (data) => {
    return this.put("manageUser/updateUser", data);
  };

  deleteUserApi = (id) => {
    return this.delete(`manageUser/deleteUser/${id}`);
  };

  searchUserApi = (username) => {
    return this.get(`manageUser/search?username=${username}`);
  };
}

export const manageUser = new ManagerUser();
