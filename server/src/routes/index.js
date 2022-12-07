const authRouter = require("./auth");
const manageUserRouter = require("./manageUser");
const manageFilmRouter = require("./manageFilm");

const route = (app) => {
  app.use("/api/auth", authRouter);
  app.use("/api/manageFilm", manageFilmRouter);
  app.use("/api/manageUser", manageUserRouter);
};

module.exports = route;
