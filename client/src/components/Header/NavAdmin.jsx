import { Link } from "react-router-dom";
import avt from "../../assests/img/avt.png";
import { TOKEN, USER_INFO } from "../../utils/contants/settingSystem";

function NavAdmin(props) {
  const getInfoUser = () => {
    if (localStorage.getItem(USER_INFO)) {
      const data = JSON.parse(localStorage.getItem(USER_INFO));
      return data.username;
    }
  };
  return (
    <>
      <Link to="/admin/user" className="mx-2 hover:text-gray-900">
        <button className="bg-red-600 text-white font-medium inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-opacity-5 hover:text-red-500   rounded text-base mt-4 md:mt-0">
          Admin
        </button>
      </Link>
      <button
        onClick={() => {
          localStorage.removeItem(USER_INFO);
          localStorage.removeItem(TOKEN);
          window.location.reload();
        }}
        className="bg-red-600 mx-2 text-white font-medium inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-opacity-5 hover:text-red-500   rounded text-base mt-4 md:mt-0"
      >
        Đăng xuất
      </button>

      <div className="relative mx-2 text-white font-medium inline-flex items-center  border-0 py-1 rounded text-base mt-4 md:mt-0 flex-shrink-0">
        <img
          src={avt}
          alt="error"
          className="w-6 h-6 border rounded-full dark:bg-coolGray-500 dark:border-coolGray-700"
        />
      </div>
      <div className="mx-2 text-white relative capitalize font-medium inline-flex items-center  border-0 py-1 rounded text-base mt-4 md:mt-0 ">
        {getInfoUser()}
      </div>
    </>
  );
}

export default NavAdmin;
