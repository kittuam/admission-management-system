import { useState } from "react";

function ApplicantForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
    console.log(form);
  };

  return (
    <div className="card">
      <h2>Applicant Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />

        <select name="course" onChange={handleChange} required>
          <option value="">Select Course</option>
          <option value="BSc">BSc</option>
          <option value="BCom">BCom</option>
          <option value="BA">BA</option>
          <option value="BCA">BCA</option>
        </select>

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <button type="submit">Submit Admission</button>
      </form>
    </div>
  );
}

export default ApplicantForm;