import React, { useEffect, useState } from "react";
import sideimage from "../assets/img/side-login.jpg";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../services/auth/LoginUser";
import { useGoogleLogin } from "@react-oauth/google";
import { useDataGoogle } from "../services/auth/GoogleAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookieStorage, CookiesKeys } from "../utils/cookies";

export const Login = () => {
  const navigate = useNavigate();

  const token = CookieStorage.get(CookiesKeys.AuthToken);
  if (token) {
    window.location.href = "/home";
  }

  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  const { mutate: postLogin, data: errMsg, status } = useLogin();

  const handleLogin = () => {
    postLogin({
      email: getEmail,
      password: getPassword,
    });
  };

  const { mutate: postGoogleLogin } = useDataGoogle();

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      postGoogleLogin({
        access_token: credentialResponse.access_token,
      });
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  useEffect(() => {
    if (errMsg) {
      toast.error(errMsg, {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [status === "success"]);

  const getToken = CookieStorage.get(CookiesKeys.RegisterToken);
  useEffect(() => {
    if (getToken) {
      toast.success("Register Berhasil, Silahkan Login!", {
        position: "top-right",
        autoClose: 3500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setTimeout(() => {
      CookieStorage.remove(CookiesKeys.RegisterToken);
    }, 3600);
  }, [getToken]);
  
  return (
    <div className="w-[100vw] h-[100vh] imglogin bg-cover">
      <div className="fixed">
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
      <div className="w-[100vw] h-[100vh] bg-black/70 text-white">
        <div className="h-[100vh] flex justify-center items-center text-white">
          <div className="flex w-3/4 max:w-3/5 h-[92%] max:h-[80%] bg-black shadow-2xl shadow-red-400">
            <div className="w-1/2">
              <img
                src={sideimage}
                alt=""
                className="h-full object-cover rounded-e-3xl"
              />
            </div>
            <div className="w-1/2 gap-10 flex flex-col justify-center items-center">
              <div className="px-5 py-1.5 font-bold border-b border-secondary shadow shadow-secondary cursor-pointer">
                <span className="text-secondary">Angga's</span>
                <span> Movies</span>
              </div>
              <div className="w-4/5 max:w-3/5 flex flex-col text-sm">
                <div className="flex flex-col gap-2 mb-5">
                  <div className="text-4xl">Welcome back</div>
                  <div>Sign in to your account</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="px-3 py-2 rounded text-black"
                      placeholder="enter your email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="px-3 py-2 rounded text-black"
                      placeholder="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    onClick={handleLogin}
                    className="bg-secondary mt-1 px-3 py-2 font-semibold rounded hover:bg-orange-900"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-2.5 flex justify-between text-xs">
                  <div className="flex gap-2">
                    <div>Don't have an account?</div>
                    <div
                      className="text-secondary underline cursor-pointer hover:text-orange-900"
                      onClick={() => navigate("/register")}
                    >
                      Register here
                    </div>
                  </div>
                  <div className="w-fit hover:text-secondary cursor-pointer">
                    Forgot password?
                  </div>
                </div>
                <div className="flex items-center gap-3 my-6">
                  <hr className="w-full bg-white" />
                  <div>OR</div>
                  <hr className="w-full bg-white" />
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    onClick={() => handleGoogleLogin()}
                    className="flex justify-center items-center gap-5 px-3 py-2 bg-white text-black rounded border-2 border-white hover:border-2 hover:border-secondary hover:text-secondary cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="23"
                      height="23"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#fbc02d"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                      <path
                        fill="#e53935"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      ></path>
                      <path
                        fill="#1565c0"
                        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      ></path>
                    </svg>
                    <div>Connect with Google</div>
                  </div>
                  <div className="flex justify-center items-center gap-5 px-3 py-2 bg-white text-black rounded border-2 border-white hover:border-2 hover:border-secondary hover:text-secondary cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="23"
                      height="23"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                        x1="9.993"
                        x2="40.615"
                        y1="9.993"
                        y2="40.615"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#2aa4f4"></stop>
                        <stop offset="1" stopColor="#007ad9"></stop>
                      </linearGradient>
                      <path
                        fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                        d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                      ></path>
                    </svg>
                    <div>Connect with Facebook</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
