import React from "react";
import "../works/works.css";
import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'
import work3 from '../../assets/work3.png'
import avatar from '../../assets/Frame (1).png'

const works = [
  {
    title: 'Analysis Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['FIGMA', 'UX'],
    image: work1,
  },
  {
    title: 'Fortknox Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['MOBILE', 'WEB'],
    image: work2,
  },
  {
    title: 'Zenocide Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['APP', 'WEB'],
    image: work3,
  },
];

const experience = [
  {
    role: 'Lead Product Designer',
    company: 'Fortknox',
    duration: 'Mar 2022 – Oct 2023',
  },
  {
    role: 'Intern Designer',
    company: 'OmniSafe',
    duration: 'Mar 2022 – Oct 2023',
  },
  {
    role: 'UI Designer',
    company: 'Doradesign',
    duration: 'Mar 2022 – Oct 2023',
  },
  {
    role: 'Frontend Developer',
    company: 'OpacityAuthor',
    duration: 'Mar 2022 – Oct 2023',
  },
];
const blogs = [
  {
    id: 1,
    date: 'Nov 9, 2023',
    title: 'How UX works in web',
    tags: ['UI', 'UX'],
    image: work1,
  },
  {
    id: 2,
    date: 'Aug 18, 2023',
    title: 'Case study - Analysis Application.',
    tags: ['DESIGN', 'PRINT'],
    image: work2,
  },
  {
    id: 3,
    date: 'Feb 16, 2023',
    title: '3 ways to develop your skill',
    tags: ['FIGMA', 'WEB'],
    image: work3,
  },
];
const worksection = () => {
  return (
    <section className="work-section">
      
      {/* Works Section inside About */}
      <div className="works-section">
        <div className="works-header">
          <h2>✹ Works</h2>
          <a href="#" className="view-all">view all</a>
        </div>

        {works.map((work, idx) => (
          <div className="work-card" key={idx}>
            <img src={work.image} alt={work.title} className="work-image" />
            <div className="work-content">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className="tags">
                {work.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <button className="view-button">View Case Study</button>
            </div>
          </div>
        ))}
      </div>

      <div className="experience-section">
  <h2 className="experience-title">✹ Experience</h2>

  {experience.map((item, index) => (
    <div className="experience-item" key={index}>
      <div className="experience-left">
        <h3>{item.role}</h3>
      </div>
      <div className="experience-right">
        <h4>{item.company}</h4>
        <p>{item.duration}</p>
      </div>
    </div>
  ))}
</div>

    <div className="blog-header">
        <h2>✹ Blog</h2>
        <a href="#" className="view-all">view all</a>
      </div>

      {blogs.map(blog => (
        <div key={blog.id} className="blog-card">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <p className="blog-date">{blog.date}</p>
            <h3 className="blog-title">{blog.title}</h3>
            <div className="blog-tags">
              {blog.tags.map((tag, idx) => (
                <span key={idx} className="blog-tag">{tag}</span>
              ))}
            </div>
          </div>
          <button className="read-button">Read</button>
        </div>
      ))}

      <div className="testimonial-section">
  <h2 className="testimonial-title">✹ What they say</h2>

  <div className="testimonial-content">
    <div className="testimonial-user">
      <img
  src={avatar}
  alt="Floyd Miles"
  className="user-avatar"
/>

      <div>
        <h4 className="user-name">Floyd Miles</h4>
        <p className="user-role">eBay</p>
      </div>
    </div>

    <div className="testimonial-text-block">
      <p className="testimonial-text">
        <span className="highlighted-word">Synergy</span>'s resume builder is fantastic. It helped me create a professional resume that stood
        out to employers. Synergy's resume builder is fantastic. It helped me create a professional
        resume that stood out to employers.
      </p>
      <div className="testimonial-nav">
        <button className="nav-button">←</button>
        <button className="nav-button">→</button>
      </div>
    </div>
  </div>
</div>


      <div className="faq-section">
  <h2 className="faq-title">✹ Frequently asked questions</h2>

  <div className="faq-item">
    <h3 className="faq-question">What is your design process?</h3>
    <p className="faq-answer">
      My design process typically involves four key phases: research, design, prototype, and test.
      In the research phase, I gather insights about the user and their needs. In the design phase,
      I create wireframes and visual designs that meet those needs. In the prototype phase, I create
      interactive models of the design for testing. In the test phase, I collect feedback from users
      to refine the design.
    </p>
  </div>

  <div className="faq-item">
    <h3 className="faq-question">What tools and software do you use for UX design?</h3>
  </div>

  <div className="faq-item">
    <h3 className="faq-question">How do you measure the success of your UX designs?</h3>
  </div>
</div>


    </section>
  );
};

export default worksection;