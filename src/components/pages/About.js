function About() {
  return (
    <div>
        <section id="about-section" className="row justify-center">
          <h3>About Me</h3>
            <article id="about">
              <img className="textwrap-img" src={window.location.origin + '/CNC-Portfolio/profile.jpg' } alt="Profile photo"/>
              <div>
        Chris is a software engineer with 25 years of experience in both very large
        and very small organizations. He recently graduated from the Georgia Tech Full-Stack Web
        Coding Bootcamp and
        is now offering web development services to businesses, small organizations, and individuals.
        <br/><br/>
        He has been cited as an outstanding team collaborator, as well as a persistent and creative
        individual contributor.
        At Harris Corporation, Chris
        developed a version of the UNIX System V Operating System which conformed to the DoD
        specification at the B2 Trusted Computing Level.  He produced key software modules
        for the 3G Cellular Data Plane product while at InterDigital Communications Corporation (IDCC).
        He led a team to develop control software that runs the Diesel Monitoring System
        for extreme-duty mining trucks while at GE Transportation Systems.  At Computer
        Science Innovations, now part of Northrup-Grumman, he wrote a client-side application for
        viewing high-dimensional data.
            </div>
          </article>
        </section>
    </div>
  );
}

export default About;

// His enthusiasm for the mission is demonstrated by the many successful
// outcomes on the products and projects he has worked on.