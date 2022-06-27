function Resume() {
  const projName = "/CNC-Portfolio/";
  const resumeName = window.location.origin + projName + "ChrisChampness_2022-5-3.pdf";
  return (
    <div>
      <section className="row justify-center">
      <h3>Resume</h3>
      <p>
      <a href={resumeName} className="resume" download="ChrisChampness_2022-5-3.pdf">Download Resume</a>
      </p>
      <article>
        <h4>Summary</h4>
        <p>
        Chris Champness is a software engineer with 25 years of experience in both very large
        and very small organizations.  He has been cited as an
        outstanding team collaborator, as well as a persistent individual contributor.
        His enthusiasm for the mission is demonstrated by the many successful
        outcomes on the products and projects he has worked on.  At Harris Corporation, Chris
        developed a version of the UNIX System V Operating System which conformed to the DoD
        specification at the B2 Trusted Computing Level.  He produced key software
        modules for the 3G Cellular Data Plane product while at InterDigital Communications Corporation (IDCC).
        He led a team to develop control software that runs the Diesel Monitoring System
        for extreme-duty mining trucks while at GE Transportation Systems.  At Computer
        Science Innovations, which is now part of Northrup-Grumman, he wrote a client-side application for
        viewing high-dimensional data.  When he's off the clock, he can be found hiking, kayaking,
        gardening, woodworking, singing, or praying, but not all at once!
        Recently he has completed the Georgia Tech Full-Stack Web Coding Bootcamp.  He is 
        offering web development services to businesses, small organizations, and individuals.
        </p>
      </article>
      <article>
        <h4>Skills</h4>
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Full-Stack Web Development</li>
            <li>Embedded Software</li>
            <li>C++</li>
          </ul>
      </article>
      <article>
        <h4>Experience</h4>
          <table>
            <tr>
              <td>Home Depot</td>
              <td>Sales Associate (2020-2021)</td>
            </tr>
            <tr>
              <td>Toccoa Hardware</td>
              <td>Small Engine Parts Manager (2018-2020)</td>
            </tr>
            <tr>
              <td>Technical Equipment Distributors, Inc.</td>
              <td>Warehouse Manager (2015-2017)</td>
            </tr>
            <tr>
              <td>Home Depot</td>
              <td>Sales Associate (2014-2015)</td>
            </tr>
            <tr>
              <td>NCH Software</td>
              <td>Software Engineer (2009-2010)</td>
            </tr>
            <tr>
              <td>InterDigital Communications LLC</td>
              <td>Staff Software Engineer (2005-2009)</td>
            </tr>
            <tr>
              <td>Essex/CSI (now part of Northrup Grumman)</td>
              <td>Principal Software Engineer (2002-2005)</td>
            </tr>
            <tr>
              <td>General Electric Transportation (now Wabtec)</td>
              <td>Lead Professional Band Software Engineer (2000-2002)</td>
            </tr>
            <tr>
              <td>Computer Science Innovations</td>
              <td>Principal Software Engineer (1990-2000)</td>
            </tr>
            <tr>
              <td>Harris Corporation</td>
              <td>Lead Software Engineer (1985-1990)</td>
            </tr>
            <tr>
              <td>Georgia Tech Research Institute</td>
              <td>Engineering Research Associate (1982-1985)</td>
            </tr>
          </table>
        </article>
        <article>
          <h4>Education and Training</h4>
          <ul>
            <li>Georgia Tech Full-Stack Web Development Coding Bootcamp (2021)</li>
            <li>Georgia Institute of Technology Bachelor ComputerScience (1985, Honors)</li>
          </ul>
      </article>
      </section>
    </div>
  );
}

export default Resume;

