import React, { useState } from "react";
const AdmissionForm = () => {
  const courses = [
    "Select Course",
    "Computer Basics",
    "MS Office",
    "Graphics Designing",
    "Web Development",
    "Digital Marketing",
    "English Language",
    "Basic Mathematics",
    "Typing Course",
  ];

  const [form, setForm] = useState({
    name: "",
    fname: "",
    ph: "",
    add: "",
    courses: "-",
  });
  const [submittedData, setSubmittedData] = useState(null);

  const resetForm = () => {
    setForm({
      name: "",
      fname: "",
      ph: "",
      add: "",
      courses: "-",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(form);
    resetForm();
  };

  return (
    <div className="form-container">
      <h4>Admission Form</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="fname">Father Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={form.fname}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            id="phone"
            name="ph"
            value={form.ph}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input
            type="text"
            name="add"
            id="add"
            value={form.add}
            onChange={handleInput}
            required
          />
        </div>
        <div>
          <label htmlFor="courses">Courses</label>
          <select
            id="courses"
            name="courses"
            value={form.courses}
            onChange={handleInput}
          >
            {courses.map((course, i) => (
              <option key={i} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="admission-btn">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="submitted-box">
          <h4>Submitted Information</h4>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Father Name:</strong> {submittedData.fname}
          </p>
          <p>
            <strong>Phone:</strong> {submittedData.ph}
          </p>
          <p>
            <strong>Address:</strong> {submittedData.add}
          </p>
          <p>
            <strong>Course:</strong> {submittedData.courses}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdmissionForm;
