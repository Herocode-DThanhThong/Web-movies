import { BaseService } from "./BaseServices";

export class ManagerFilm extends BaseService {
  constructor() {
    return super();
  }
  getAllFilmApi = () => {
    return this.get("manageFilm/getAllFilm");
  };

  getListBannerApi = () => {
    return this.get("manageFilm/getListBanner");
  };

  getListPopularFilmApi = () => {
    return this.get("manageFilm/getListPopularFilm");
  };

  getListNewFilmApi = () => {
    return this.get("manageFilm/getListNewFilm");
  };

  addBannerApi = (data) => {
    return this.post("manageFilm/createBanner", data);
  };

  deleteBannerApi = (id) => {
    return this.delete(`manageFilm/deleteBanner/${id}`);
  };

  addNewFilmApi = (data) => {
    return this.post("manageFilm/createNewFilm", data);
  };

  deleteNewFilmApi = (id) => {
    return this.delete(`manageFilm/deleteNewFilm/${id}`);
  };

  editNewFilmApi = (data) => {
    return this.put("manageFilm/updateNewFilm", data);
  };

  addPopularFilmApi = (data) => {
    return this.post("manageFilm/createPopularFilm", data);
  };

  editPopularFilmApi = (data) => {
    return this.put("manageFilm/updatePopularFilm", data);
  };

  deletePopularFilmApi = (id) => {
    return this.delete(`manageFilm/deletePopularFilm/${id}`);
  };

  getFilmDetailApi = (id) => {
    return this.get(`manageFilm/getFilmDetail/${id}`);
  };

  addEpisodeApi = (data) => {
    return this.put(`manageFilm/addEpisodes`, data);
  };

  getEpisodeDetailApi = (id) => {
    return this.get(`manageFilm/getEpisode/${id}/detail`);
  };

  getRecommendFilmApi = () => {
    return this.get("manageFilm/recommendFilm");
  };
}

export const managerFilm = new ManagerFilm();
