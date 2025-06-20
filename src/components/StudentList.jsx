import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Students</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {students.map((student) => (
          <div key={student.id} className="border p-4 rounded shadow">
            {student.image && <img src={student.image} alt="Profile" className="w-24 h-24 object-cover rounded-full mb-2" />}
            <h3 className="text-xl font-bold">{student.name}</h3>
            <p>{student.email}</p>
            <p><strong>Course:</strong> {student.course}</p>
            <button onClick={() => onEdit(student)} className="mt-2 bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
            <button onClick={() => onDelete(student.id)} className="mt-2 ml-2 bg-red-500 text-white px-3 py-1 rounded">Delete</button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;