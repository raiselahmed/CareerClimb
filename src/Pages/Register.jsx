import Lottie from "lottie-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Corrected import for Link
import login from '../assets/Lottie/login.json'; // Assuming this is the correct Lottie file for the register page background animation
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { creatUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURl.value; // Fixed the typo from photoURl to photoURL for consistency
    const user = { name, email, password, photoURL }; // Create the user object
    console.log(user); // Log the user object

    // Create New User
    creatUser(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Success!",
          text: "User registered successfully.",
          icon: "success",
          confirmButtonText: "Cool",
        });
        form.reset(); // Clear the form after successful submission
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
            title: "Error!",
            text: errorMessage,
            icon: "error",
            confirmButtonText: "OK",
          });
      });
  };

  return (
    <div className="hero min-h-screen"> {/* Added className */}
      <div className="hero-content flex-col lg:flex-row-reverse"> {/* Added className */}
        <div className="text-center lg:text-left lg:w-3xl"> {/* Added className */}
          <Lottie animationData={login}></Lottie>
        </div>
        <div className="card w-full max-w-2xl bg-base-100 shadow-xl rounded-lg overflow-hidden"> {/* Added className and bg-base-100 shadow-xl */}
          <div className="card-body p-8"> {/* Added className */}
            <h2 className="card-title text-2xl font-bold mb-6 text-gray-800"> {/* Added className and text-gray-800 for contrast */}
              Registration Info
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6"> {/* Added className */}
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm font-medium text-gray-600">
                    NAME
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name" // Corrected: Comment is now inline or removed if not needed
                  className="input input-bordered w-full"
                />
              </div>

              {/* Email and Password */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-sm font-medium text-gray-600">
                      EMAIL
                    </span>
                  </label>
                  <label className="input input-bordered flex w-full items-center gap-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email" // Corrected
                      className="grow"
                      required
                    />
                  </label>
                </div>

                {/* Password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-sm font-medium text-gray-600">
                      PASSWORD
                    </span>
                  </label>
                  <label className="input input-bordered w-full flex items-center gap-2">
                    <input
                      type="password"
                      name="password"
                      placeholder="Your Password" // Corrected
                      className="grow"
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm font-medium text-gray-600">
                    PHOTO URL
                  </span>
                </label>
                <label className="input input-bordered w-full flex items-center gap-2">
                  <input
                    type="text"
                    name="photoURl"
                    placeholder="Photo URL" // Corrected
                    className="grow"
                    required
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-8">
                <button
                  type="submit"
                  className="btn w-full bg-green-500 hover:bg-green-600 text-white border-none"
                >
                  Submit
                </button>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-8"> {/* Added className */}
                <button
                  type="submit"
                  className="btn w-full bg-green-500 hover:bg-green-600 text-white border-none" // Added className
                >
                  Submit
                </button>
              </div>
            </form>

            <p className="text-center mt-3 text-gray-700"> {/* Added className and text-gray-700 */}
              Already Have An Account?{" "}
              <Link to={"/auth/login"} className="text-red-600"> {/* Corrected path to /auth/login, added className */}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;