import projList from './displist';
import FSBlog from './FsBlog';
// import writeDetailsHtml from './details';

  // const cardClass = document.querySelector(".row");
  // const cardClass = document.querySelector("main");
  let ndx = 0;
  let imgDir = './images/';

  const pageChange = () => {<FSBlog />};

  function Projects () {
    return (
      projList.map((proj) =>
        <div className={(ndx++ === 0) ? "top-card" : "card-column"}>
          <figure className="proj-card">
            <span data-descr>
              <h4 className="card-title">{proj.title}</h4>
              <img src={imgDir+proj.img} alt={proj.alt}/>
            </span>
            <button onClick={() => pageChange('FSBlog')}>Click Me</button>
          </figure>
        </div>
      )
    )
  }

export default Projects;

{/* <a
onClick={() => handlePageChange('Contact')}
// Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
>Contact Me</a> */}
