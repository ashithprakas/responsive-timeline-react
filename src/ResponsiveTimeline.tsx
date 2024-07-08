import { useEffect } from "react";

const ResponsiveTimeline = () => {
  useEffect(() => {
    const timeLineEnrtyElements = document.querySelectorAll(
      ".timeline-entry-hidden"
    );

    console.log(timeLineEnrtyElements);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-entry-show");
          } else {
            entry.target.classList.remove("timeline-entry-show");
          }
        });
      },
      { threshold: 0.5 }
    );
    timeLineEnrtyElements.forEach((element) => {
      console.log("observing element ", element);
      observer.observe(element);
    });

    return () => {
      console.log("unobserving items");
      timeLineEnrtyElements.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div>
      <div className="responsive-timeline-container">
        <h3 className="heading">Responsive TimeLine</h3>
        <div className="timeline">
          <ul>
            {timeLineTemplate.map((template, index) => {
              return (
                <li key={index} className="timeline-entry-hidden">
                  <h3 className="title">{template.Title}</h3>
                  <p>{template.Description}</p>
                  <span className="circle"></span>
                  <span className="date">{template.Date}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

interface TimeLineTempalte {
  Title: string;
  Description: string;
  Date: string;
}

/* Got from chatGPT */
const timeLineTemplate: TimeLineTempalte[] = [
  {
    Title: "Started Learning Programming",
    Description:
      "Began learning programming languages such as Python and JavaScript through online courses and personal projects. Developed a strong foundation in algorithms and data structures.",
    Date: "2018-01-15",
  },
  {
    Title: "First Software Development Internship",
    Description:
      "Secured a position as a software development intern at XYZ Tech, where I gained practical experience in web development technologies such as HTML, CSS, and JavaScript. Collaborated with senior developers on projects, improving my skills in version control and agile methodologies.",
    Date: "2019-06-01",
  },
  {
    Title: "Graduated from University",
    Description:
      "Completed Bachelor's degree in Computer Science with a focus on software engineering. Developed a final year project on machine learning algorithms for pattern recognition, receiving accolades for innovative research and project implementation.",
    Date: "2020-05-30",
  },
  {
    Title: "Joined ABC Software Inc.",
    Description:
      "Joined ABC Software Inc. as a Junior Software Engineer, specializing in backend development using technologies like Node.js and MongoDB. Participated in full software development lifecycle including requirements gathering, design, implementation, testing, and deployment.",
    Date: "2020-07-15",
  },
  {
    Title: "Completed AWS Certification",
    Description:
      "Achieved AWS Certified Solutions Architect - Associate certification, demonstrating proficiency in designing and deploying scalable, highly available, and fault-tolerant systems on AWS cloud.",
    Date: "2021-02-28",
  },
  {
    Title: "Promoted to Software Engineer",
    Description:
      "Recognized for contributions in optimizing backend services and maintaining high coding standards, leading to promotion to Software Engineer role at ABC Software Inc. Involved in mentoring junior developers and contributing to architecture decisions.",
    Date: "2022-03-10",
  },
  {
    Title: "Started Open Source Project",
    Description:
      "Initiated an open-source project aimed at simplifying data visualization using React and D3.js. Project gained traction in the developer community, attracting contributors and receiving positive feedback for its usability and documentation.",
    Date: "2023-01-20",
  },
  {
    Title: "Attended Developer Conference",
    Description:
      "Participated in DEFCON 2023, a prominent developer conference focusing on emerging technologies such as blockchain, AI, and cybersecurity. Attended workshops and seminars, gaining insights into cutting-edge tools and methodologies.",
    Date: "2023-05-05",
  },
  {
    Title: "Started Learning Programming",
    Description:
      "Began learning programming languages such as Python and JavaScript through online courses and personal projects. Developed a strong foundation in algorithms and data structures.",
    Date: "2018-01-15",
  },
  {
    Title: "First Software Development Internship",
    Description:
      "Secured a position as a software development intern at XYZ Tech, where I gained practical experience in web development technologies such as HTML, CSS, and JavaScript. Collaborated with senior developers on projects, improving my skills in version control and agile methodologies.",
    Date: "2019-06-01",
  },
  {
    Title: "Graduated from University",
    Description:
      "Completed Bachelor's degree in Computer Science with a focus on software engineering. Developed a final year project on machine learning algorithms for pattern recognition, receiving accolades for innovative research and project implementation.",
    Date: "2020-05-30",
  },
  {
    Title: "Joined ABC Software Inc.",
    Description:
      "Joined ABC Software Inc. as a Junior Software Engineer, specializing in backend development using technologies like Node.js and MongoDB. Participated in full software development lifecycle including requirements gathering, design, implementation, testing, and deployment.",
    Date: "2020-07-15",
  },
  {
    Title: "Completed AWS Certification",
    Description:
      "Achieved AWS Certified Solutions Architect - Associate certification, demonstrating proficiency in designing and deploying scalable, highly available, and fault-tolerant systems on AWS cloud.",
    Date: "2021-02-28",
  },
  {
    Title: "Promoted to Software Engineer",
    Description:
      "Recognized for contributions in optimizing backend services and maintaining high coding standards, leading to promotion to Software Engineer role at ABC Software Inc. Involved in mentoring junior developers and contributing to architecture decisions.",
    Date: "2022-03-10",
  },
  {
    Title: "Started Open Source Project",
    Description:
      "Initiated an open-source project aimed at simplifying data visualization using React and D3.js. Project gained traction in the developer community, attracting contributors and receiving positive feedback for its usability and documentation.",
    Date: "2023-01-20",
  },
  {
    Title: "Attended Developer Conference",
    Description:
      "Participated in DEFCON 2023, a prominent developer conference focusing on emerging technologies such as blockchain, AI, and cybersecurity. Attended workshops and seminars, gaining insights into cutting-edge tools and methodologies.",
    Date: "2023-05-05",
  },
  {
    Title: "Became Team Lead",
    Description:
      "Promoted to Team Lead for a new development project at ABC Software Inc., overseeing a team of developers in designing and implementing a scalable microservices architecture using Kubernetes. Responsible for project planning, resource allocation, and ensuring adherence to deadlines.",
    Date: "2024-03-01",
  },
  {
    Title: "Published First Mobile App",
    Description:
      "Launched my first mobile application 'TaskMaster' on Google Play Store, designed to streamline task management for users. Developed using Flutter framework, integrating Firebase for backend services and ensuring seamless user experience.",
    Date: "2024-06-15",
  },
];
export default ResponsiveTimeline;
