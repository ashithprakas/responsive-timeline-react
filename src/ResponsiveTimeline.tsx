const ResponsiveTimeline = () => {
  return (
    <div>
      <div className="responsive-timeline-container">
        <h3 className="heading">Responsive TimeLine</h3>
        <div className="timeline">
          <ul>
            {timeLineTemplate.map((template) => {
              return (
                <li>
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
      "Began learning programming languages such as Python and JavaScript.",
    Date: "2018-01-15",
  },
  {
    Title: "First Software Development Internship",
    Description:
      "Worked as an intern at XYZ Tech, gaining experience in web development.",
    Date: "2019-06-01",
  },
  {
    Title: "Graduated from University",
    Description: "Completed Bachelor's degree in Computer Science.",
    Date: "2020-05-30",
  },
  {
    Title: "Joined ABC Software Inc.",
    Description:
      "Started working as a Junior Software Engineer, specializing in backend development.",
    Date: "2020-07-15",
  },
  {
    Title: "Completed AWS Certification",
    Description: "Achieved AWS Certified Solutions Architect - Associate.",
    Date: "2021-02-28",
  },
  {
    Title: "Promoted to Software Engineer",
    Description:
      "Recognized for contributions and promoted to Software Engineer role.",
    Date: "2022-03-10",
  },
  {
    Title: "Started Open Source Project",
    Description:
      "Initiated an open-source project for community contributions.",
    Date: "2023-01-20",
  },
  {
    Title: "Attended Developer Conference",
    Description:
      "Participated in DEFCON 2023, learning about emerging technologies.",
    Date: "2023-05-05",
  },
  {
    Title: "Became Team Lead",
    Description:
      "Assumed leadership role as Team Lead for a new development project.",
    Date: "2024-03-01",
  },
  {
    Title: "Published First Mobile App",
    Description: "Launched first mobile application on Google Play Store.",
    Date: "2024-06-15",
  },
];
export default ResponsiveTimeline;
