const { findById, findOneAndUpdate } = require("../models/Banner");
const Banner = require("../models/Banner");
const FilmNew = require("../models/FilmNew");
const FilmPopular = require("../models/PopularFilm");
const TestModel = require("../models/Test");
const { randomIndex } = require("../utils/func/func");

const getListBanner = async (req, res, next) => {
  const listBanner = await Banner.find({});

  return res.status(200).json({
    success: true,
    message: "Get list banner successfully",
    content: listBanner,
  });
};

const getNewFilms = async (req, res, next) => {
  const listFilm = await FilmNew.find({});
  return res.status(200).json({
    success: true,
    message: "Get New Films Success Full",
    content: listFilm,
  });
};

const getPopularFilms = async (req, res, next) => {
  const listFilm = await FilmPopular.find({});
  return res.status(200).json({
    success: true,
    message: "Get list popular film successfully",
    content: listFilm,
  });
};

const createBanner = async (req, res, next) => {
  const { idYoutube, image } = req.body;
  if (!idYoutube || !image) {
    return res.status(400).json({
      success: false,
      message: "idYoutube,image required!",
    });
  }

  try {
    const newBanner = new Banner({
      idYoutube,
      image,
    });

    await newBanner.save();
    return res.status(200).json({
      success: true,
      message: "Create banner successfully!",
      content: newBanner,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const createNewFilm = async (req, res, next) => {
  const { name, top, image, imgTrailer, evaluate, description } = req.body;
  if (!name || !top || !image || !imgTrailer || !evaluate) {
    return res.status(400).json({
      success: false,
      message: "The information has not enough",
    });
  }

  try {
    const data = {
      name,
      top,
      image,
      imgTrailer,
      evaluate,
      description,
    };
    const newFilm = new FilmNew(data);
    await newFilm.save();
    return res.status(200).json({
      success: true,
      message: "Create new film successfully!",
      content: newFilm,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const createPopularFilm = async (req, res, next) => {
  const { name, image, imgTrailer, evaluate, description } = req.body;
  if (!name || !image || !imgTrailer || !evaluate) {
    return res.status(400).json({
      success: false,
      message: "The information has not enough",
    });
  }

  try {
    const data = {
      name,
      image,
      imgTrailer,
      evaluate,
      description,
    };
    const popularFilm = new FilmPopular(data);
    await popularFilm.save();
    return res.status(200).json({
      success: true,
      message: "Create popular film successfully!",
      content: popularFilm,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deleteBanner = async (req, res, next) => {
  const { id } = req.params;
  const lstBanner = await Banner.find({});
  if (lstBanner <= 1) {
    return res.status(400).json({
      success: false,
      message: "You must have at least 1 banner!",
    });
  }
  try {
    const bannerDelete = await Banner.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Delete Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const deleteNewFilm = async (req, res, next) => {
  const { id } = req.params;
  const lstFilm = await FilmNew.find({});
  if (lstFilm <= 6) {
    return res.status(400).json({
      success: false,
      message: "You must have at least 6 film new!",
    });
  }
  try {
    const filmDelete = await FilmNew.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Delete Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const deletePopularFilm = async (req, res, next) => {
  const { id } = req.params;
  const lstFilm = await FilmPopular.find({});
  if (lstFilm <= 6) {
    return res.status(400).json({
      success: false,
      message: "You must have at least 6 film popular!",
    });
  }
  try {
    const filmDelete = await FilmPopular.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      message: "Delete Successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const editNewFilm = async (req, res, next) => {
  const { id, name, image, imgTrailer, evaluate, top, description } = req.body;
  try {
    const data = {
      name,
      image,
      imgTrailer,
      evaluate,
      top,
      description,
    };
    const newFilmUpdate = await FilmNew.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      newFilmUpdate,
      message: "Update new Film successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const editPopularFilm = async (req, res, next) => {
  const { id, name, image, imgTrailer, evaluate, description } = req.body;
  try {
    const data = {
      name,
      image,
      imgTrailer,
      evaluate,
      description,
    };
    const popularFilmUpdate = await FilmPopular.findByIdAndUpdate(
      { _id: id },
      data,
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      popularFilmUpdate,
      message: "Update new Film successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const getFilmDetail = async (req, res, next) => {
  const { id } = req.params;
  try {
    let film = await FilmNew.findById(id);
    if (!film) {
      film = await FilmPopular.findById(id);
      if (!film) {
        return res.status(400).json({
          success: false,
          message: "No resource!",
        });
      }
    }

    return res.status(200).json({
      success: true,
      content: film,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const addEpisodeFilm = async (req, res, next) => {
  const { id, idYoutube, image } = req.body;
  let film, type;
  film = await FilmNew.findById(id);
  type = "newFilm";
  if (!film) {
    film = await FilmPopular.findById(id);
    type = "popularFilm";
  }

  try {
    if (type === "newFilm") {
      console.log(film.episodes.length);
      await FilmNew.findOneAndUpdate(
        { _id: id },
        {
          $addToSet: {
            episodes: {
              idYoutube,
              number: film?.episodes.length || 0,
              image,
            },
          },
        }
      );
    } else {
      await FilmPopular.findOneAndUpdate(
        { _id: id },
        {
          $addToSet: {
            episodes: {
              idYoutube,
              number: film?.episodes.length || 0,
              image,
            },
          },
        }
      );
    }

    return res.status(200).json({
      success: true,
      message: "Add Episode Successfullly!",
      film,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const deleteAllEpisodeFilm = async (req, res, next) => {
  try {
    await FilmNew.updateMany(
      {},
      {
        $set: {
          episodes: {},
        },
      }
    );

    await FilmPopular.updateMany(
      {},
      {
        $set: {
          episodes: {},
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Delete All Episode Successfullly!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const getEpisodeFilmDetail = async (req, res, next) => {
  const { id } = req.params;
  let film;
  film = await FilmNew.findById(id);

  if (!film) film = await FilmPopular.findById(id);

  try {
    return res.status(200).json({
      success: true,
      message: "Get Episode Successfullly!",
      content: film.episodes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

const testAddEpisodes = async (req, res, next) => {
  // let data = { name: "test" };
  // let newTest = new TestModel(data);
  // await newTest.save();

  await TestModel.findOneAndUpdate(
    { name: "test" },
    {
      $addToSet: {
        episodes: {
          idYoutube: "123",
          number: 1,
        },
      },
    }
  );
  return res.status(200).json({
    success: true,
    message: "test success!",
  });
};

const getAllFilm = async (req, res, next) => {
  let data;
  const listFilmPopular = await FilmPopular.find({});
  const listFilmNew = await FilmNew.find({});
  data = [...listFilmPopular];
  listFilmNew.forEach((x, y) => data.push(x));
  return res.status(200).json({
    success: true,
    message: "Get all film successfully!",
    content: data,
  });
};

const recommendFilm = async (req, res, next) => {
  try {
    const listFilmPopular = await FilmPopular.find({});
    const listFilmNew = await FilmNew.find({});

    // Random popular film
    const randomPopularFilmIndex = randomIndex(listFilmPopular);

    // Random new film
    const randomNewFilmIndex = randomIndex(listFilmNew);
    let result = [];
    randomPopularFilmIndex.forEach((item, index) => {
      result.push(listFilmPopular[item]);
    });
    randomNewFilmIndex.forEach((item, index) => {
      result.push(listFilmNew[item]);
    });
    return res.status(200).json({
      success: true,
      message: "Recommend film get successfully!",
      content: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

module.exports = {
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
};
