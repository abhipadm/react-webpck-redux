import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/createCourse";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

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
    debugger;
    this.props.actions.createCourse(this.state.course);

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
          <p style={styleColorRed} key={course.title}>
            {course.title}
          </p>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch) {
  debugger;
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
