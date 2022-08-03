function Resume() {
  const projName = "/CNC-Portfolio/";
  const windowOrigin = window.location.origin;
  const resumeName = windowOrigin + projName + "ChrisChampness_2022-5-3.pdf";
  const iconLoc = windowOrigin + projName + "icons/";
  return (
    <div>
      <section className="row justify-center">
      <h3>Resume</h3>
      </section>
      <section className="row justify-center">
      <a href={resumeName} className="resume" download="ChrisChampness_2022-5-3.pdf">Download Resume</a>
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
        <h4>Skillset</h4>
        <ul className="icon-grid">
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Apache</span>
            <img src={iconLoc+"apacheD22128.svg"} loading="lazy" alt="apache icon"></img>
          </li>

          <li className="icon-grid-item icontip">
            <span className="icontiptext">Apache Tomcat</span>
            <img src={iconLoc+"apachetomcatF8DC75.svg"} loading="lazy" alt="apache tomcat icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">ApolloGraphQL</span>
            <img src={iconLoc+"apollographql311C87.svg"} loading="lazy" alt="apollographql icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Arduino</span>
            <img src={iconLoc+"arduino00979D.svg"} loading="lazy" alt="Arduino icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Arm</span>
            <img src={iconLoc+"arm0091BD.svg"} loading="lazy" alt="Arm icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Bootstrap</span>
            <img src={iconLoc+"bootstrap7952B3.svg"} loading="lazy" alt="Bootstrap icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">C Plus Plus</span>
            <img src={iconLoc+"cplusplus0059CC.svg"} loading="lazy" alt="C Plus Plus icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">CSS3</span>
            <img src={iconLoc+"css31572B6.svg"} loading="lazy" alt="CSS3 icon"></img>
          </li>
          {/* <li className="icon-grid-item icontip">
            <span className="icontiptext">Elementor</span>
            <img src={iconLoc+"elementor.svg"} loading="lazy" alt="Elementor icon"></img>
          </li> */}
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Github</span>
            <img src={iconLoc+"github181717.svg"} loading="lazy" alt="Github icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">GraphQL</span>
            <img src={iconLoc+"graphqlE10098.svg"} loading="lazy" alt="GraphQl icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Heroku</span>
            <img src={iconLoc+"heroku430098.svg"} loading="lazy" alt="Heroku icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">HTML5</span>
            <img src={iconLoc+"html5E34F26.svg"} loading="lazy" alt="HTML5 icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Insomnia</span>
            <img src={iconLoc+"insomnia4000BF.svg"} loading="lazy" alt="Insomnia icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">JavaScript</span>
            <img src={iconLoc+"javascriptF7Df1E.svg"} loading="lazy" alt="JavaScript icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Jest</span>
            <img src={iconLoc+"jestC21325.svg"} loading="lazy" alt="Jest icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Jquery</span>
            <img src={iconLoc+"jquery0769AD.svg"} loading="lazy" alt="Jquery icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Json</span>
            <img src={iconLoc+"json000000.svg"} loading="lazy" alt="Json icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">JsonWebToken</span>
            <img src={iconLoc+"jsonwebtokens000000.svg"} loading="lazy" alt="JsonWebToken icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Linux</span>
            <img src={iconLoc+"linuxFCC624.svg"} loading="lazy" alt="Linux icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">MariaDB</span>
            <img src={iconLoc+"mariadb003545.svg"} loading="lazy" alt="MariaDB icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Markdown</span>
            <img src={iconLoc+"markdown000000.svg"} loading="lazy" alt="Markdown icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">MongoDB</span>
            <img src={iconLoc+"mongodb47A248.svg"} loading="lazy" alt="MongoDB icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Mysql</span>
            <img src={iconLoc+"mysql4479A1.svg"} loading="lazy" alt="Mysql icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Node</span>
            <img src={iconLoc+"nodedotjs339933.svg"} loading="lazy" alt="Node icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">NPM</span>
            <img src={iconLoc+"npmCB3837.svg"} loading="lazy" alt="NPM icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Octave</span>
            <img src={iconLoc+"octave0790C0.svg"} loading="lazy" alt="Octave icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">OpenGL</span>
            <img src={iconLoc+"opengl5586A4.svg"} loading="lazy" alt="OpenGL icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Perl</span>
            <img src={iconLoc+"perl39457E.svg"} loading="lazy" alt="Perl icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">PHP</span>
            <img src={iconLoc+"php777BB4.svg"} loading="lazy" alt="PHP icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">React</span>
            <img src={iconLoc+"react61DAFB.svg"} loading="lazy" alt="React icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Sequelize</span>
            <img src={iconLoc+"sequelize52B0E7.svg"} loading="lazy" alt="Sequelize icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">SVG</span>
            <img src={iconLoc+"svgFFB13B.svg"} loading="lazy" alt="SVG icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Tailwind</span>
            <img src={iconLoc+"tailwindcss06B6D4.svg"} loading="lazy" alt="Tailwind icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Typescript</span>
            <img src={iconLoc+"typescript3178C6.svg"} loading="lazy" alt="Typescript icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Ubuntu</span>
            <img src={iconLoc+"ubuntuE95420.svg"} loading="lazy" alt="Ubuntu icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Vue</span>
            <img src={iconLoc+"vuedotjs4FC08D.svg"} loading="lazy" alt="Vue icon"></img>
          </li>
          <li className="icon-grid-item icontip">
            <span className="icontiptext">Wordpress</span>
            <img src={iconLoc+"wordpress21759B.svg"} loading="lazy" alt="Wordpress icon"></img>
          </li>
        </ul>
      </article>
      <article>
        <h4>Experience</h4>
          <table><tbody>
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
          </tbody></table>
        </article>
        <article>
          <h4>Education and Training</h4>
          <ul>
            <li>Georgia Tech Full-Stack Web Development Coding Bootcamp</li>
            <li>Georgia Institute of Technology Bachelor ComputerScience</li>
          </ul>
      </article>
      </section>
    </div>
  );
}

export default Resume;

