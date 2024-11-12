import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Profile</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Full-Stack Software Engineer, Enosis Solutions"
            date="September 2023 — April 2024"
            description={
              <div>
                <p>
                  • Design and implement highly scalable and secure backend
                  architectures.
                </p>
                <p>
                  • Migrating, Managing, and Updating the database using SQL
                  Alchemy and Alembic.
                </p>
                <p>
                  • Improved and implemented the portal's functionality using
                  Django Rest API and ReactJS.
                </p>
              </div>
            }
          />

          <TimelineItem
            title="Backend Software Engineer, AppsCode Ltd"
            date="May 2023 — August 2023"
            description={
              <div>
                <p>
                  • Added user documentation for easy MariaDB instance
                  deployment in user guides.
                  <br />
                  • Developed a custom k8s operator for MariaDB to automate and
                  simplify DB management.
                  <br />• Learned Kubernetes, Docker, Go-lang, Git and many
                  more.
                </p>
              </div>
            }
          />

          <TimelineItem
            title="Editorial Contributor, She Thinks Code"
            date="March 2022 — November 2022"
            description={
              <div>
                <p>
                  • Wrote solutions and analyzed problems for the junior and
                  senior divisions of the Canadian Computing Competition (CCC).
                  <br />• Found CCC to be an exciting challenge that tested my
                  skills and knowledge of various data structures and
                  algorithmic concepts.
                </p>
              </div>
            }
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Åbo Akademi University"
            date="2024 - Present"
            description="EMJMD on the Engineering of Data-intensive Intelligent Software Systems"
          />
          <TimelineItem
            title="Daffodil International University"
            date="2019 — 2023"
            description="Computer Science & Engineering, CGPA: 3.95"
          />
          <TimelineItem
            title="Bangladesh Agricultural University"
            date="2019 - Left"
          />
          <TimelineItem
            title="Notre Dame College, Dhaka"
            date="2015 - 2017"
            description="Science, HSC GPA: 5.00"
          />
          <TimelineItem
            title="Al Amin Academy School & College, Chandpur"
            date="2011 - 2015"
            description="Science, SSC GPA: 5.00"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <li className="skills-list content-card">
          <SkillItem title="C++" value={90} />
          <SkillItem title="C" value={90} />
          <SkillItem title="JavaScript" value={70} />
          <SkillItem title="Python" value={70} />
          <SkillItem title="Go-Lang" value={50} />
          <SkillItem title="ReactJS" value={70} />
          <SkillItem title="Django Rest Framework" value={80} />
          <SkillItem title="SQLAlchemy" value={75} />
          <SkillItem title="Alembic" value={70} />
          <SkillItem title="MySQL" value={60} />
          <SkillItem title="Sass" value={70} />
          <SkillItem title="HTML" value={80} />
          <SkillItem title="CSS" value={75} />
          <SkillItem title="GO-lang" value={65} />
        </li>
      </div>
    </section>
  );
};

export default Resume;
