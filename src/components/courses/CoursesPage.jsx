import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/createCourse";

import PropTypes from "prop-types";
const styleColorRed = {
  color: "red"
};

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
    console.log("saving ....");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Create Course</h3>

        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />

        <input type="submit" value="save" />

        {this.props.courses.map(course => (
          <p key={course.title}>{course.title}</p>
        ))}

        <p style={styleColorRed}>
          <i>{this.state.course.title}</i>
        </p>
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(CoursesPage);
