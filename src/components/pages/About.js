function About() {
  return (
    <div>
      <hr />
        <section id="about-section">
          <h3>About Me</h3>
            <article id="about">
              <img className="textwrap-img" src={window.location.origin + '/profile.jpg'} />
              {/* <img className="textwrap-img" src="/profile.jpg" alt="Profile photo" /> */}
              <div>
        Chris is a software engineer with 25 years of experience in both very large
        and very small organizations.  He has been cited as an
        outstanding team collaborator, as well as a persistent individual contributor.
        His enthusiasm for the mission is demonstrated by the many successful
        outcomes on the products and projects he has worked on.  At Harris Corporation, Chris
        developed a version of the UNIX System V Operating System which conformed to the DoD
        specification at the B2 Trusted Computing Level.  He produced key software modules
        for the 3G Cellular Data Plane product while at InterDigital Communications Corporation (IDCC).
        He led a team to develop control software that runs the Diesel Monitoring System
        for extreme-duty mining trucks while at GE Transportation Systems.  At Computer
        Science Innovations, which is now part of Northrup-Grumman, he wrote a client-side application for
        viewing high-dimensional data.  When he's off the clock, he can be found hiking, kayaking,
        gardening, woodworking or singing in the church choir.
        Recently he is graduated from the Georgia Tech Full-Stack Web Coding Bootcamp.  He
        is now offering web development services to businesses, small organizations, and individuals.
            </div>
          </article>
        </section>
      <hr />
    </div>
  );
}

export default About;