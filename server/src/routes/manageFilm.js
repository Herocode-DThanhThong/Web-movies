const express = require("express");
const {
  getListBanner,
  getPopularFilms,
  getNewFilms,
  createBanner,
  deleteBanner,
  createNewFilm,
  createPopularFilm,
  deleteNewFilm,
  deletePopularFilm,
  editNewFilm,
  editPopularFilm,
  getFilmDetail,
  testAddEpisodes,
  addEpisodeFilm,
  deleteAllEpisodeFilm,
  getEpisodeFilmDetail,
  getAllFilm,
  recommendFilm,
} = require("../controllers/managerFilmController");
const { checkAdmin } = require("../controllers/managerUserController");
const { verifyToken } = require("../middlewares/auth/verifyToken");

const router = express.Router();

router.get("/getAllFilm", getAllFilm);
router.get("/recommendFilm", recommendFilm);

router.get("/getListBanner", getListBanner);
router.post("/createBanner", verifyToken, checkAdmin, createBanner);
router.delete("/deleteBanner/:id", verifyToken, checkAdmin, deleteBanner);

router.get("/getListNewFilm", getNewFilms);
router.post("/createNewFilm", verifyToken, checkAdmin, createNewFilm);
router.put("/updateNewFilm", verifyToken, checkAdmin, editNewFilm);
router.delete("/deleteNewFilm/:id", verifyToken, checkAdmin, deleteNewFilm);

router.get("/getListPopularFilm", getPopularFilms);
router.post("/createPopularFilm", createPopularFilm);
router.put("/updatePopularFilm", verifyToken, checkAdmin, editPopularFilm);
router.delete(
  "/deletePopularFilm/:id",
  verifyToken,
  checkAdmin,
  deletePopularFilm
);

router.get("/getFilmDetail/:id", getFilmDetail);
router.get("/getEpisode/:id/detail", getEpisodeFilmDetail);
router.put("/addEpisodes", verifyToken, checkAdmin, addEpisodeFilm);
router.delete("/deleteEpisode", verifyToken, checkAdmin, deleteAllEpisodeFilm);

router.put("/testAddEpisodes", testAddEpisodes);

module.exports = router;
