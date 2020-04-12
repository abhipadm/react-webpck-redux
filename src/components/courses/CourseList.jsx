import React from "react";
import PropTypes from "prop-types";

const CourseList = ({ courses }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Course</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {courses.map((course) => (
        <tr key={course.id}>
          <td>{course.title}</td>
          <td>{course.authorName}</td>
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
