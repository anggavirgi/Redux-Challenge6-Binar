import React from "react";
import { Header } from "../components/fragments/Header";
import { Footer } from "../components/fragments/Footer";
import profile from "../assets/img/profile.jpg";
import reacticon from "../assets/img/react-icon.png";
import tailwindicon from "../assets/img/tailwind-icon.png";
import tmdbicon from "../assets/img/tmdb-icon.png";

export const About = () => {
  return (
    <div>
      <Header />
      <div className="px-14 pt-10 pb-36 bg-main text-white text-center">
        <div>
          <img
            src={profile}
            alt=""
            className="w-40 h-40 mx-auto rounded-full object-cover mb-6"
          />
        </div>
        <div className="flex gap-1 justify-center items-end">
        <div className="italic font-bold text-2xl text-secondary">
          MOVIES APP
        </div>
        <div className="text-blue-300 text-xs">.v2</div>
        </div>
        <hr className="w-1/6 mx-auto bg-white/60 my-2" />
        <div className="flex justify-center items-center gap-3 mb-5">
          <img src={reacticon} alt="" className="w-6 object-cover rounded" />
          <img src={tailwindicon} alt="" className="w-9 object-cover rounded" />
          <img src={tmdbicon} alt="" className="w-7 object-cover rounded" />
          <svg
            width="22"
            height="22"
            viewBox="0 0 256 244"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            className="w-9"
          >
            <path
              d="M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
              fill="#764ABC"
            />
          </svg>
        </div>
        <div className="w-3/5 flex flex-col gap-3 mx-auto text-left text-sm">
          <div className="border border-secondary rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <div className="font-semibold">Tentang Projek</div>
            </div>
            <div className="indent-6 text-justify">
              <span className="italic">Movies App v2</span> merupakan projek
              untuk challenge Chapter 6 Studi Independen{" "}
              <span className="text-purple-600 italic">
                Binar Academy Batch 5
              </span>
              . Untuk tech-stack yang digunakan adalah{" "}
              <span className="text-blue-500">ReactJs</span> &{" "}
              <span className="text-blue-500">Tailwind</span>. Pada projek kali
              ini, saya menggunakan{" "}
              <span className="text-blue-500">TMDB API</span> &{" "}
              <span className="text-blue-500">API BINAR</span>. Lalu sebagai
              tambahan, untuk consume API wajib menggunakan redux.
            </div>
            <div className="indent-6 text-justify">
              Disini saya menggunakan 2 endpoint dari TMDB API, yaitu{" "}
              <span className="text-blue-500">now playing & upcoming</span>.
              Lalu, untuk API BINAR terdapat 7 endpoint, yaitu{" "}
              <span className="text-blue-500">
                popular, detail, search, me, login, register & login by google.
              </span>{" "}
              Fitur pada website ini hanya untuk menampilkan data movie now
              playing & popular, lalu menampilkan detail movie ketika salah satu
              movie di klik.
            </div>
          </div>
          <div className="border border-secondary rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <div className="font-semibold">Kriteria / Ketentuan</div>
            </div>
            <div className="indent-6 text-justify">
              <ul>
                <li>1. Mengimplementasikan redux state management.</li>
                <li>
                  2. Menggunakan middleware (redux thunk) untuk passing data
                  dari API.
                </li>
                <li>3. Mampu mengintegrasikan redux di UI frontend.</li>
                <li>4. Melakukan debugging redux menggunakan devtools.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
