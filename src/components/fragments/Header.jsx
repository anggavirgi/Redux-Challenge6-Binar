import React from "react";
import { Input } from "../elements/Input";
import { useNavigate } from "react-router-dom";
import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { useDataMe } from "../../services/GetMe";
import ava from "../../assets/img/ava.jpg";

export const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (keyword) => {
    navigate("/search", {
      state: {
        search: keyword,
      },
    });
  };

  const { data: fetchMe, isSuccess } = useDataMe();
  const dataMe = isSuccess ? fetchMe : {};

  const handleLogout = () => {
    CookieStorage.remove(CookiesKeys.AuthToken);
    window.location.href = "/";
  };

  return (
    <div className="flex justify-between items-center px-14 py-7 gap-3 bg-main text-white">
      <div
        onClick={() => navigate("/home")}
        className="px-5 py-1.5 font-bold border-b border-secondary shadow shadow-secondary cursor-pointer"
      >
        <span className="text-secondary">Angga's</span>
        <span> Movies</span>
      </div>
      <div>
        <Input handle={handleSearch} />
      </div>
      <div className="flex items-center gap-8 text-sm font-semibold">
        <div
          onClick={() => navigate("/nowplaying")}
          className="cursor-pointer hover:text-secondary"
        >
          Now Playing
        </div>
        <div
          onClick={() => navigate("/popular")}
          className="cursor-pointer hover:text-secondary"
        >
          Popular
        </div>
        <div
          onClick={() => navigate("/about")}
          className="cursor-pointer hover:text-secondary"
        >
          About Me
        </div>
        <div className="flex items-center gap-2 border border-secondary rounded-full pe-3">
          <img src={ava} alt="" className="w-8 h-8 rounded-full object-cover" />
          <div className="text-secondary">{dataMe.name}</div>
        </div>
        <button
          onClick={handleLogout}
          className="py-1.5 w-[85px] text-white hover:text-red-500 text-sm font-semibold bg-red-500 border border-red-500 rounded-lg hover:bg-main hover:shadow-md hover:shadow-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
