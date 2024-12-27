// src/components/Projects.js
import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <ul>
          <li>IMDb Project</li>
          <li>CSS Project</li>
          <li>React Portfolio Website</li>
        </ul>
      </section>
    );
  }
}

export default Projects;
