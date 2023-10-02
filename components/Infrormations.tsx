import { formType } from "@/zod/formSchemas";
import { FC } from "react";

interface InfrormationsProps {
  informations: formType;
}

const Infrormations: FC<InfrormationsProps> = ({ informations }) => {
  return (
    <div className="m-2 p-2 text-center">
      \
      <div className="border m-2 p-2 ">
        <h3>Personal Information</h3>
        <div className="">
          <p>Full Name : {informations.personalInfo.fullName}</p>
          <p>Country: {informations.personalInfo.country}</p>
          <p>Gender : {informations.personalInfo.gender}</p>
          <p>
            Date of Birth : {informations.personalInfo.dateOfBirth.toString()}
          </p>
          <p>Marital Status : {informations.personalInfo.maritalStatus}</p>
        </div>
      </div>
      <div className="border m-2 p-2 ">
        <h3>Contact Information</h3>
        <div className="">
          <p>Email : {informations.contactInfo.email}</p>
          <p>address: {informations.contactInfo.address}</p>
          <p>
            Mobile :{" "}
            {informations.contactInfo.countryCode +
              " " +
              informations.contactInfo.phone}
          </p>
        </div>
      </div>
      <div className="border m-2 p-2 ">
        <h3>Education Information</h3>
        <div className="">
          <p>Degree : {informations.education.degree}</p>
          <p>Field of study: {informations.education.fieldOfStudy}</p>
          <p>
            Start Year
            {informations.education.startYear}
          </p>
          <p>
            End Year
            {informations.education.endYear}
          </p>
        </div>
      </div>
      {informations?.experience?.length && (
        <div className="border m-2 p-2 ">
          <h3>Work experience</h3>
          {informations.experience.map((item, i) => (
            <div className="border p-2 m-2 " key={i}>
              <p>Company :{item?.company}</p>
              <p>position :{item?.position}</p>
              <p>Start Date :{item?.startDate.toString()}</p>
              <p>End Date :{item?.endDate.toString()}</p>
            </div>
          ))}
        </div>
      )}
      {informations?.hobbies?.length && (
        <div className="border m-2 p-2 ">
          <h3>Hobbies</h3>
          {informations.hobbies.map((item, i) => (
            <div className="border p-2 m-2 inline-block " key={i}>
              <p>Company :{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Infrormations;
