import {
  FaBriefcase,
  FaHourglassHalf,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { MdOutlineWork } from "react-icons/md";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";

const JobDetail = () => {
  const {
    title,
    company,
    company_logo,
    responsibilities,
    description,
    location,
    requirements,
    category,
    applicationDeadline,
    salaryRange,
    jobType,
  } = useLoaderData();
 const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
     
      confirmButtonText: "OK",
       didOpen: (popup) => {
        popup.style.zIndex = '9999999'; // Set the z-index for the SweetAlert popup
      }
    });
  };
  const id = useParams()
  const {user} = useContext(AuthContext);
    console.log(id, user);;
    const navigate = useNavigate();
  //
  const handleSumbitJob = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const gitHubLInk= form.gitHubLInk.value;
    const tel = form.tel.value;
    const discrp = form.textAria.value;
    // const jbApler = {name,gitHubLInk, tel, discrp};
    // console.log(jbApler);

    //
    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      name,
      gitHubLInk,
      tel,
      discrp
    }
    console.log(jobApplication);
    fetch('https://career-climb-server.vercel.app/job-application', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobApplication),
    })
    .then(res=> res.json())
    .then(data=>{
   
      if (data.insertedId) {
        
        showAlert("Success!", "Your application has been submitted successfully.", "success");
          document.getElementById("job_application_modal").close();
          navigate('/myApplication');
          form.reset();
      }
    })
   
  }
  return (
    <div className="container py-12 mx-auto">
      {/* Header Section */}
      <div>
        <div
          className="h-48 md:h-64 lg:h-72 w-full bg-cover object-cover bg-center rounded-t-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          aria-label="Office setting with people working"
        ></div>

        <div className="mt-4 text-white">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-2xl md:text-3xl font-bold ">{title}</h1> {/* Added text-gray-800 for visibility against white background */}

            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => document.getElementById("job_application_modal").showModal()}
            >
              Apply
            </button>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Dallas, Texas Remote Friendly
          </p>
          {/* You might add salary, experience brief here if they are visually part of the header, but in the demo, they are under Employment Information */}
        </div>
      </div>

      {/* Modal */}
      <dialog id="job_application_modal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="text-center mb-6">
            <h3 className="font-bold text-2xl">Start Your Career Today</h3>
            <p className="py-2 text-sm text-gray-500">Please fill in your information and send it to the employer.</p>
          </div>

          <form onSubmit={handleSumbitJob} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Full Name <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Steven Job"
                className="input input-bordered w-full"
                name="name"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  GitHub Link <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="link"
                placeholder="your gitHub Link "
                className="input input-bordered w-full"
                name="gitHubLInk"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Contact Number <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="tel"
                placeholder="(+01) 234 567 89"
                className="input input-bordered w-full"
               name="tel"
                required
              />
            </div>

            <div className="form-control flex flex-col">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea

                className="textarea textarea-bordered w-full h-24"
                placeholder="Your description..."
                name="textAria"
              ></textarea>
            </div>

            {/* <div className="form-control">
              <label className="label">
                <span className="label-text">Upload Resume</span>
              </label>
              <input type="file" className="file-input file-input-bordered w-full" />
            </div> */}

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox checkbox-primary" />
                <span className="label-text">Agree our terms and policy</span>
                <a href="#" className="link link-hover text-sm">
                  Learn more
                </a>
              </label>
            </div>

            <div className="modal-action justify-center mt-6">
              <button className="btn btn-primary w-full max-w-xs" >Apply Job</button>
            </div>
          </form>
          <div className="text-center mt-4 text-sm ">
            Do you need support? <a href="#" className="link link-hover">Contact Us</a>
          </div>
        </div>
      </dialog>

      {/* This button seems redundant if you have an "Apply" button in the header section */}
      {/* <button className="btn" onClick={() => document.getElementById('job_application_modal').showModal()}>Open Job Application</button> */}

      {/* Main Content Area */}
      <div className="mt-6">
        {/* Employment Information */}
        <section className="mb-8 p-8 bg-base-200 border">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 ">
            Employment Information
          </h2>
          <div className="bg-base-200">
            <div className="divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-200 gap-4">
            <div>
              <div className="flex items-center">
                <img className="w-10 me-2" src={company_logo} alt="" />
                <div>
                  <div className="text-sm text-gray-500">Industry</div>
                  <div className="font-semibold ">{company}</div>
                </div>
              </div>
              <div className="flex mt-4 items-center">
                <MdOutlineWork className="h-5 w-5 mr-2 text-gray-500" />{" "}
                {/* Changed to MdOutlineWork for Job Type */}
                <div>
                  <div className="text-sm text-gray-500">Job type</div>
                  <div className="font-semibold ">{jobType}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <FaBriefcase className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Job level</div>
                  <div className="font-semibold ">{category}</div>
                </div>
              </div>

              <div className="flex mt-4 items-center">
                <FaHourglassHalf className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Salary</div> {/* Corrected "Sullary" to "Salary" */}
                  <div className="font-semibold ">
                    {salaryRange?.min} - {salaryRange?.max} bdt
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <FaRegCalendarAlt className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Deadline</div>
                  <div className="font-semibold ">{applicationDeadline}</div>
                </div>
              </div>

              <div className="flex mt-4 items-center">
                <FaMapMarkerAlt className="h-5 w-5 mr-2 text-gray-500" />
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="font-semibold ">{location}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* Welcome to AliStudio Team */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 ">
            Welcome to AliStudio Team
          </h2>
          <p className="leading-relaxed mb-4 text-gray-500">{description}</p> {/* Added text-gray-700 */}
          <p className="leading-relaxed text-gray-500"> {/* Added text-gray-700 */}
            This ideal candidate will have strong creative skills and a
            portfolio of work which demonstrates that passion for illustrative
            design and typography. This candidate will have experiences in
            working with numerous different design platforms such as digital and
            print forms.
          </p>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* Essential Knowledge, Skills, and Experience */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 ">
            Essential Knowledge, Skills, and Experience
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-500"> {/* Added text-gray-700 */}
            {requirements?.map((item, indx) => (
              <li key={indx}>{item}</li>
            ))}
          </ul>
        </section>

        <hr className="my-6 border-gray-200" />

        {/* Preferred Experience */}
        <section className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 ">
            Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-500"> {/* Added text-gray-700 */}
            {responsibilities?.map((itm, idx) => (
              <li key={idx}>{itm}</li>
            ))}
          </ul>
        </section>
      </div>
      <div className="divider"></div>
      {/* Footer Actions */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 p-4 mb-6">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => document.getElementById("job_application_modal").showModal()} // Changed to job_application_modal to match above
          >
            Apply
          </button>
          <button className="btn btn-outline btn-primary px-6 py-2 rounded-lg text-lg">
            Save Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;