import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10"> {/* Corrected */}
      <nav>
        <h6 className="footer-title">Services</h6> {/* Corrected */}
        <a className="link link-hover">Branding</a> {/* Corrected */}
        <a className="link link-hover">Design</a> {/* Corrected */}
        <a className="link link-hover">Marketing</a> {/* Corrected */}
        <a className="link link-hover">Advertisement</a> {/* Corrected */}
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6> {/* Corrected */}
        <a className="link link-hover">About us</a> {/* Corrected */}
        <a className="link link-hover">Contact</a> {/* Corrected */}
        <a className="link link-hover">Jobs</a> {/* Corrected */}
        <a className="link link-hover">Press kit</a> {/* Corrected */}
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6> {/* Corrected */}
        <a className="link link-hover">Terms of use</a> {/* Corrected */}
        <a className="link link-hover">Privacy policy</a> {/* Corrected */}
        <a className="link link-hover">Cookie policy</a> {/* Corrected */}
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6> {/* Corrected */}
        <fieldset className="form-control w-80"> {/* Corrected: added form-control, adjusted w-80 as per common Tailwind/DaisyUI usage */}
          <label className="label"> {/* Added label for consistency with other form elements */}
            <span className="label-text">Enter your email address</span> {/* Added span and label-text */}
          </label>
          <div className="join"> {/* Corrected */}
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item" // Corrected
            />
            <button className="btn btn-primary join-item">Subscribe</button> {/* Corrected */}
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;