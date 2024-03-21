import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";

const Portfolio = () => {
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load project data from projects.json
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Contest Performance</h2>
      </header>

      {/* Filter buttons */}
      <ul className="filter-list">
        {["All", "ICPC", "IUPC", "Individual", "Judge & Problem Setter"].map(
          (category) => (
            <li className="filter-item" key={category}>
              <button
                className={category === selectedCategory ? "active" : ""}
                onClick={() => handleFilterClick(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          )
        )}
      </ul>

      {/* Portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <div>
                {/* <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure> */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.position}</p>
                {project.rank !== "" && (
                  <p className="project-category">Rank: {project.rank}</p>
                )}
                {/* {project.standing !== "" && (
                  <p className="project-category">
                    Standing: <a href={project.standing}>Link</a>
                  </p>
                )} */}
                {project.team !== "" && (
                  <p className="project-category">Team Name: {project.team}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
