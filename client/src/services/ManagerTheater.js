import { BaseService } from "./BaseServices";

export class ManagerTheater extends BaseService {
  constructor() {
    return super();
  }

  getALlSystemTheaterApi = () => {
    return this.get("manageTheater/getAllSystemTheater");
  };

  getChildrenSystemTheaterApi = (params) => {
    return this.post(
      `manageTheater/getAllChildrenSystemTheater?theater=${params}`
    );
  };
}

export const managerTheater = new ManagerTheater();
