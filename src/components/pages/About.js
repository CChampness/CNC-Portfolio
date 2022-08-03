function About() {
  return (
    <div>
      <section id="about-section" className="row justify-center">
        <h3>About</h3>
          <article id="about">
            <img className="textwrap-img" src={window.location.origin + '/CNC-Portfolio/profile.jpg' } alt="Profile photo"/>
            <div>
      Thanks for visiting!  Please allow me to share with you some of the work I've done.
      This portfolio has examples of Web pages that I have built recently.  Some of my
      background experience includes 25 years as a software engineer, when I build a wide
      variety of software components and applications. 
      I recently graduated from the Georgia Tech Full-Stack Web
      Coding Bootcamp and
      I am now offering web development services to businesses, small organizations, and individuals.
      <br/><br/>
      One of my strengths is as a team collaborator, as well as a persistent and creative
      individual contributor.
      At Harris Corporation, I
      developed a version of the UNIX System V Operating System which conformed to the DoD
      specification at the B2 Trusted Computing Level.  I produced key software modules
      for the 3G Cellular Data Plane product while at InterDigital Communications Corporation (IDCC).
      At GE Transportation Systems I led a team to develop control software that runs a
       Diesel Monitoring System
      for extreme-duty mining trucks while .  At Computer
      Science Innovations (now part of Northrup-Grumman) I wrote a client-side application for
      viewing high-dimensional data.
          </div>
        </article>
      </section>
    </div>
  );
}

export default About;