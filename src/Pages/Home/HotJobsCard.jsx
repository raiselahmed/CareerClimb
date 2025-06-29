import React from "react";
import { FaRegClock, FaSuitcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { Link } from "react-router-dom"; // Changed to react-router-dom for Link
import SpotlightCard from "../../../cardAnimation/SpotlightCard/SpotlightCard";

const HotJobsCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;

  return (
    <>
    <SpotlightCard
    
    >

      <div className="card   relative">
      {" "}
      {/* Corrected */}
      {/* Top Right Icon */}
      <div className="absolute top-4 right-4 text-green-500">
        {" "}
        {/* Corrected */}
        <HiOutlineLightBulb size={24} />
      </div>
      {/* Company Info */}
      <div className="flex items-center gap-4 mb-4">
        {" "}
        {/* Corrected */}
        <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-gray-200">
          {" "}
          {/* Corrected */}
          <img
            src={company_logo}
            alt={`${company} logo`}
            className="w-full h-full object-cover"
          />{" "}
          {/* Corrected */}
        </div>
        <div>
          <h2 className="text-xl font-semibold hover:text-[#3363cc] ">
            {company}
          </h2>{" "}
          {/* Corrected, added text-gray-800 */}
          <p className="text-sm text-gray-500 flex items-center gap-1">
            {" "}
            {/* Corrected */}
            <FaLocationDot className="inline-block" /> {location}{" "}
            {/* Corrected */}
          </p>
        </div>
      </div>
      {/* Job Title */}
      <h3 className="text-2xl font-bold mb-4 ">{title}</h3>{" "}
      {/* Corrected, added text-gray-800 */}
      {/* Job Details - Fulltime & Time */}
      <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
        {" "}
        {/* Corrected */}
        <span className="flex items-center gap-1">
          {" "}
          {/* Corrected */}
          <FaSuitcase className="inline-block" /> Fulltime {/* Corrected */}
        </span>
        <span className="flex items-center gap-1">
          {" "}
          {/* Corrected */}
          <FaRegClock className="inline-block" /> 4 minutes ago{" "}
          {/* This is static in the demo, you'd make it dynamic */}{" "}
          {/* Corrected */}
        </span>
      </div>
      {/* Description */}
      <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>{" "}
      {/* Corrected */}
      {/* Requirements/Skills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {" "}
        {/* Corrected */}
        {requirements &&
          requirements.map((req, index) => (
            <span
              key={index}
              className="badge badge-lg bg-base-300 shadow-lg cursor-pointer px-4 py-2 rounded-full text-gray-700"
            >
              {" "}
              {/* Corrected, added text-gray-700 */}
              {req}
            </span>
          ))}
      </div>
      {/* Salary and Apply Button */}
      <div className="flex justify-between items-center">
        {" "}
        {/* Corrected */}
        <div className="text-3xl font-bold ">
          {" "}
          {/* Corrected, changed text-gray-200/300 to 800/700 for better contrast */}
          ${salaryRange?.min}
          <span className="text-xl font-normal ">
            /{salaryRange?.currency}
          </span>{" "}
          {/* Corrected */}
        </div>
        <Link to={`/jobs/${_id}`}>
          <button className="btn btn-primary px-6 py-3 rounded-lg text-white font-semibold">
            Job Details
          </button>{" "}
          {/* Corrected */}
        </Link>
      </div>
    </div>
    </SpotlightCard>
    </>

    
  );
};

export default HotJobsCard;
