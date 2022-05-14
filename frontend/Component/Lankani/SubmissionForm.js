import React, { useState } from "react";

export default function SubmissionForm(props) {
  const { label, type = "text", name, onChange } = props;

  return (
    <div className="FormInput">
      <label>{label}</label>
      <input style={{
          borderRadius: "15px",
          width: "400px",
          height: "40px",
           }}
          type={type} name={name} onChange={onChange} />
    </div>
  );
}
