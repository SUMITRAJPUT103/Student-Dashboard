import React, { useState, useEffect } from 'react';

const StudentForm = ({ onSubmit, editingStudent, courses }) => {
  const [formData, setFormData] = useState({ name: '', email: '', course: '', image: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
    }
  }, [editingStudent]);

  const validate = () => {
    let err = {};
    if (!formData.name) err.name = 'Name is required';
    if (!formData.email) err.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) err.email = 'Invalid email';
    if (!formData.course) err.course = 'Course is required';
    return err;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
      setFormData({ name: '', email: '', course: '', image: '' });
      setErrors({});
    }
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input name="name" value={formData.name} onChange={handleChange} className="w-full border p-2" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input name="email" value={formData.email} onChange={handleChange} className="w-full border p-2" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Course</label>
        <select name="course" value={formData.course} onChange={handleChange} className="w-full border p-2">
          <option value="">Select a course</option>
          {courses.map((c) => (
            <option key={c.id} value={c.name}>{c.name}</option>
          ))}
        </select>
        {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Profile Image URL</label>
        <input name="image" value={formData.image} onChange={handleChange} className="w-full border p-2" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editingStudent ? 'Update' : 'Add'} Student
      </button>
    </form>
  );
};

export default StudentForm;