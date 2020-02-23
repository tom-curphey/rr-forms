import React from "react";

const FormPanel = ({ formValues }) => {
  console.log("formValues", formValues);
  console.log("formValues.formValues.formA", formValues.formA);

  const {
    formA: { firstName, location },
    formB: { lastName, artur }
  } = formValues;

  return (
    <div>
      {/* {JSON.stringify(formValues, null, 2)} */}
      <br />
      <span>Firstname: {firstName}</span>
      <br />
      <span>Location: {location}</span>
      <br />
      <span>Lastname: {lastName}</span>
      <br />
      <span>Artur: {artur}</span>
    </div>
  );
};

export default FormPanel;
