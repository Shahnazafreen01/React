import React from "react";

function AboutProject() {
  return (
    <section className="about" id="about">

      <h2>About This Project</h2>

      <p>
        This comprehensive project is designed to help you practice
        modern web development concepts including responsive design,
        authentication, navigation, forms and reusable components.
      </p>

      <div className="about-list">

        <div>
          Single-page app you can open directly in a modern browser
        </div>

        <div>
          Simple file structure with clean and reusable components
        </div>

        <div>
          Sign-up page with form validation and authentication
        </div>

        <div>
          Login page with simple authentication logic
        </div>

        <div>
          Responsive design for desktop and mobile devices
        </div>

        <div>
          Easy-to-understand React component structure
        </div>

      </div>

    </section>
  );
}

export default AboutProject;