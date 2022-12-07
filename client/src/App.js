import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import BannerFilm from "./components/Admin/ManageFilmContent/BannerFilm/BannerFilm";
import ManageFilmContent from "./components/Admin/ManageFilmContent/ManageFilmContent";
import NewFilm from "./components/Admin/ManageFilmContent/NewFilm/NewFilm";
import PopularFilm from "./components/Admin/ManageFilmContent/PopularFilm/PopularFilm";
import ManageUserContent from "./components/Admin/ManageUserContent/ManageUserContent";
import Footer from "./components/Footer/Footer";
import Loading from "./components/global/Loading/Loading";
import Header from "./components/Header/Header";
import DrawerApp from "./components/HOC/DrawerApp";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import Film from "./pages/Film";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ProtectedRouteAdmin from "./protectedRoute/ProtectedRouteAdmin";
import ProtectedRouteHome from "./protectedRoute/ProtectedRouteHome";
import ProtectRouteAuth from "./protectedRoute/ProtectRouteAuth";
import { ADD_NAVIGATE } from "./redux/reducers/types/navigateType";
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.loadingReducer);
  // <--- Add Navigae for system --->
  useEffect(() => {
    dispatch({
      type: ADD_NAVIGATE,
      navigate,
    });
  }, [dispatch, navigate]);

  return (
    <div style={{ backgroundColor: "#101A24" }}>
      <Header />
      {loading && <Loading />}
      <DrawerApp />
      <Routes>
        <Route element={<ProtectRouteAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<ProtectedRouteHome />}>
          <Route path="/home" element={<Home />} />
          <Route path="/film/:id/detail" element={<Film />} />
          <Route path="/film/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
          <Route path="/admin" element={<Admin />}>
            <Route path="user" element={<ManageUserContent />} />
            <Route path="film" element={<ManageFilmContent />}>
              <Route path="banner" element={<BannerFilm />} />
              <Route path="newFilm" element={<NewFilm />} />
              <Route path="popularFilm" element={<PopularFilm />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
