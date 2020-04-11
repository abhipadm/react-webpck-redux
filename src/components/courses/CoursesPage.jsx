/* eslint-disable import/no-unresolved */
import React from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";

import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const styleColorRed = {
  color: "red"
};

class CoursesPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch(error => {
      alert("error " + error);
    });
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map(course => (
          <p style={styleColorRed} key={course.title}>
            {course.title}
          </p>
        ))}
      </>
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
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
