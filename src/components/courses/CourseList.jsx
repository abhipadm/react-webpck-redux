import React from "react";
import PropTypes from "prop-types";

const CourseList = ({ courses }) => (
  <table className="table">
    <thead>
      <th>Course</th>
      <th>Author</th>
      <th>Category</th>
    </thead>
    <tbody>
      {courses.map((course) => (
        <tr key={course.id}>
          <td>{course.title}</td>
          <td>{course.authorId}</td>
          <td>{course.category}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CourseList;
