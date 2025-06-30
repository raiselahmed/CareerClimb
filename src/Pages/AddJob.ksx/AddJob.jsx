import React, { useContext } from "react";
import { BiInfoCircle, BiPlus, BiUser } from "react-icons/bi";
import lotieBara from "../../assets/Lottie/postJob.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import AuthContext from "../../Context/AuthContext";

const AddJob = () => {
  // Handle form submission
  const {user} = useContext(AuthContext)
  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,

      confirmButtonText: "OK",
      didOpen: (popup) => {
        popup.style.zIndex = "9999999"; // Set the z-index for the SweetAlert popup
      },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJobs } = initialData;

    newJobs.salaryRange = { min : parseInt(min), max : parseInt(max), currency };

    newJobs.requirements = newJobs.requirements.split("\n");
    newJobs.responsibilities = newJobs.responsibilities.split("\n");
    console.log(newJobs);

    fetch("https://career-climb-server.vercel.app/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJobs),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          showAlert(
            "Success!",
            "Your Job Post has been submitted successfully.",
            "success"
          );
        }
      });
  };

  return (
    <>
      <div className="min-h-screen bg-base-100 flex justify-center items-start py-10 px-4 sm:px-6 lg:px-8 font-sans">
        {/* Container for the content, including the form and the image placeholder */}
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
          {/* Container for the form with a white background, padding, rounded corners, and shadow */}
          <div className="bg-base-200 p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl w-full lg:w-7/5">
            {/* Header Section: Title and Admin Post info */}

            {/* Form Begins */}
            <form onSubmit={handleSubmit}>
              {/* Section: Tell us about your role */}
              <div className="mb-4">
                <div className="">
                  <h1 className="text-5xl ">Post a Job</h1>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold  flex items-center mb-4">
                  <BiInfoCircle className="text-blue-800 mr-2 w-6 h-6" />{" "}
                  {/* Info icon from lucide-react */}
                  Tell us about your role
                </h2>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      Job title *
                    </span>
                  </label>
                  <input
                    name="jb_title"
                    type="text"
                    placeholder="e.g. Senior Product Designer"
                    className="input input-bordered w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      Add your job description *
                    </span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed at sem id enim suscipit commodo nec in ante..."
                    className="textarea textarea-bordered h-32 w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Section: Job Location and Workplace Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      Job location
                    </span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. New York City or 'San Francisco'"
                    className="input input-bordered w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-transparent"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      Workplace Type *
                    </span>
                  </label>
                  <select
                    name="jobType"
                    className="select select-bordered w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="remote">Remote</option>
                    <option value="on-site">On-site</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      Job Field Type *
                    </span>
                  </label>
                  <select
                    name="jobField"
                    className="select select-bordered w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="remote">Engineering</option>
                    <option value="on-site">Marketing</option>
                    <option value="hybrid">Teaching</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      Job Field Type *
                    </span>
                  </label>
                  <select
                    name="category"
                    className="select select-bordered w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="remote">Engineering</option>
                    <option value="on-site">Marketing</option>
                    <option value="hybrid">Teaching</option>
                  </select>
                </div>

                {/* Section: Salary  */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Salary Range</span>
                    </label>
                    <input
                      type="number"
                      name="min"
                      placeholder="Min"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="number"
                      name="max"
                      placeholder="Max "
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <select
                      defaultValue="Currency"
                      name="currency"
                      className="select select-ghost w-full max-w-xs"
                    >
                      <option disabled>Currency</option>
                      <option>BDT</option>
                      <option>USD</option>
                      <option>INR</option>
                    </select>
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      Company Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="cmpny_name"
                    placeholder="Company name"
                    className="input input-bordered w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      Requirements
                    </span>
                  </label>
                  <textarea
                    placeholder="Write each responsibility in a new line"
                    name="requirements"
                    className="textarea textarea-bordered h-22 w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                    required
                  ></textarea>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      responsibilities
                    </span>
                  </label>
                  <textarea
                    name="responsibilities"
                    placeholder="Write each responsibility in a new line"
                    className="textarea textarea-bordered h-22 w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                    required
                  ></textarea>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      Company Logo
                    </span>
                  </label>
                  <input
                    type="link"
                    name="company_logo"
                    placeholder="Comapny Logo"
                    className="input input-bordered w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text mb-1 text-gray-700">
                      HR Email
                    </span>
                  </label>
                  <input
                    defaultValue={user?.email}
                    type="email"
                    name="hr_email"
                    placeholder="hr_email"
                    className="input input-bordered w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Section: Upload File */}
              <div className="mb-8">
                <label className="label">
                  <span className="label-text text-gray-700">Upload File</span>
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden" // Hide the default file input for custom styling
                  />
                  <button
                    type="button"
                    className="btn bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6 py-3 flex items-center space-x-2 shadow-md hover:shadow-lg transition-all duration-200"
                    onClick={() =>
                      document.getElementById("file-upload").click()
                    } // Trigger hidden input click
                  >
                    <BiPlus className="w-5 h-5" />{" "}
                    {/* Plus icon from lucide-react */}
                    <span>Upload File</span>
                  </button>
                </div>
              </div>

              {/* Post New Job Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-md px-8 py-3 flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <BiPlus className="w-5 h-5" />{" "}
                  {/* Plus icon from lucide-react */}
                  <span>Post New Job</span>
                </button>
              </div>
            </form>
          </div>

          {/* Placeholder for the image */}
          <div className="hidden lg:flex lg:w-2/5 justify-center items-end p-4">
            <Lottie className="" animationData={lotieBara}></Lottie>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddJob;
