import React, { Component } from 'react';

class Project extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="Project">
      My project
{this.props.test}

      </div>
    );
  }
}

export default Project;
