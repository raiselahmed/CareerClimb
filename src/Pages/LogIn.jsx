import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Corrected import for Link
import { FaGithub, FaGoogle } from "react-icons/fa";
import login from '../assets/Lottie/register.json' // Assuming 'register.json' is the correct Lottie file for login
import Lottie from "lottie-react";
import axios from "axios";

const LogIn = () => {
  const { signInUser, googleSignup } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state || '/';
  const navigate = useNavigate();

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "OK",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((res) => {
        console.log(res.user.email);
        showAlert("Success!", "Login Successful.", "success");

        //token apis
        const user = {email : email};
        axios.post('https://career-climb-server.vercel.app/jwt', user, {withCredentials: true})
        .then(res =>{
          console.log(res.data);
        })

        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        showAlert("Error", errorMessage, "error");
      });
  };

  const handleGoogleLogin = () => {
    console.log("gooole");
    googleSignup()
      .then(() => {
        showAlert("Success!", "Google Login Successful.", "success");
        navigate(from);
      })
      .catch(() => {
        showAlert("Error!", "Google Login Failed. Please try again.", "error");
      });
  };

  const handleGitHubLogin = () => {
    showAlert(
      "Coming Soon!",
      "GitHub login functionality is under development.",
      "info"
    );
  };

  return (
    <div className="hero min-h-screen"> {/* Added className */}
      <div className="hero-content flex-col lg:flex-row-reverse"> {/* Added className */}
        <div className="text-center lg:text-left lg:w-3xl"> {/* Added className */}
          <Lottie animationData={login}></Lottie>
        </div>
        <div className="card w-full max-w-2xl bg-base-100 shadow-xl rounded-lg overflow-hidden"> {/* Added className */}
          <div className="card-body p-8"> {/* Added className */}
            <h2 className="card-title text-2xl text-center font-bold mb-6 "> {/* Added className and text-gray-800 for contrast */}
              Log in Info
            </h2>

            <form onSubmit={handleLogin} className="space-y-6"> {/* Added className */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Added className */}
                {/* email */}
                <div className="form-control"> {/* Added className */}
                  <label className="label"> {/* Added className */}
                    <span className="label-text text-sm font-medium text-gray-600"> {/* Added className */}
                      EMAIL
                    </span>
                  </label>
                  <label className="input input-bordered w-full flex items-center gap-2"> {/* Added className */}
                    <input
                      type="email"
                      name="email"
                      className="grow" // Added className
                      required
                    />
                  </label>
                </div>

                {/* password */}
                <div className="form-control"> {/* Added className */}
                  <label className="label"> {/* Added className */}
                    <span className="label-text text-sm font-medium text-gray-600"> {/* Added className */}
                      PASSWORD
                    </span>
                  </label>
                  <label className="input input-bordered w-full flex items-center gap-2"> {/* Added className */}
                    <input
                      type="password"
                      name="password"
                      className="grow" // Added className
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-8"> {/* Added className */}
                <button
                  type="submit"
                  className="btn w-full bg-green-500 hover:bg-green-600 text-white border-none" // Added className
                >
                  LOGIN
                </button>
              </div>
            </form>

            <div>
              <h1 className="font-semibold my-3 text-gray-800">Login With</h1> {/* Added className and text-gray-800 */}
              <div className="*:w-full space-y-1"> {/* Added className. Note: *:w-full is a Tailwind JIT feature, ensure it's enabled if using older Tailwind */}
                <button
                  onClick={handleGoogleLogin}
                  className="btn w-full bg-blue-500 hover:bg-blue-600 text-white border-none flex items-center gap-2" // Added className
                >
                  <FaGoogle /> Google
                </button>
                <button
                  onClick={handleGitHubLogin}
                  className="btn w-full bg-gray-600 hover:bg-gray-700 text-white border-none flex items-center gap-2" // Added className
                >
                  <FaGithub /> GitHub
                </button>
              </div>
            </div>

            <p className="text-center mt-3 text-gray-400"> {/* Added className and text-gray-700 */}
              Don’t Have An Account ?{" "}
              <Link to={"/register"} className="text-red-600"> {/* Added className */}
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;