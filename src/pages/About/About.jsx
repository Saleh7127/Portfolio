/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/webdev.png",
    title: "Web development",
    description:
      "Building dynamic websites and applications using modern technologies like React and Django.",
  },
  {
    icon: "/images/problemsolving.png",
    title: "Problem Solving",
    description:
      "Solving data structure and algorithmic challenges across platforms like LeetCode and Codeforces.",
  },
  {
    icon: "/images/research.jpeg",
    title: "Academic Research",
    description:
      "Conducting rigorous analysis of Data-Intensive Software Systems to making a bridge between the software industry and data science.",
  },
  {
    icon: "/images/higheredu.png",
    title: "Higher Study",
    description:
      "Getting ready for my Joint Master's Degree Programme on the Engineering of Data-intensive Intelligent Software Systems.",
  },
  {
    icon: "/images/mentoring.jpeg",
    title: "Mentoring",
    description:
      "Providing guidance and support to juniors navigating their career paths and personal development.",
  },
  {
    icon: "/images/training.svg",
    title: "Training",
    description:
      "Delivering engaging lessons and practical exercises to impart knowledge and skills for Competitve Programming.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I, Abu Saleh, have completed my Bachelor's degree in Computer Science
          and Engineering from Daffodil International University. I have been
          working as a software engineer since May 2023, and my industry
          experience includes full-stack software development using ReactJS,
          Django Rest Framework, and SQLAlchemy. My interests lie in competitive
          programming and problem-solving. I enjoy participating in programming
          contests and always strive to learn new things. To date, I have taken
          part in over 300 online and onsite programming contests, including
          ICPC, Google Code Jam, and Meta Hacker Cup.
        </p>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">Current Activites</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - testimonials
    --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Academic Achievements</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - clients
    --> */}

      <section className="clients">
        <h3 className="h3 clients-title">Virtual Profiles</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://github.com/Saleh7127" target="_blank" rel="noopener noreferrer">
              <img src="/images/github.png" alt="GitHub" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://leetcode.com/fellow_junior/" target="_blank" rel="noopener noreferrer">
              <img src="/images/leetcode.jpeg" alt="LeetCode" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://codeforces.com/profile/Fellow_junior" target="_blank" rel="noopener noreferrer">
              <img src="/images/codeforces.jpg" alt="CodeForces" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://www.stopstalk.com/user/profile/Fellow_junior" target="_blank" rel="noopener noreferrer">
              <img src="/images/stopstalk.png" alt="StopStalk" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://www.codechef.com/users/junior_7127" target="_blank" rel="noopener noreferrer">
              <img src="/images/codechef.jpg" alt="CodeChef" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://lightoj.com/user/fellow_junior" target="_blank" rel="noopener noreferrer">
              <img src="/images/lightoj.png" alt="Light OJ" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://uhunt.onlinejudge.org/id/1101980" target="_blank" rel="noopener noreferrer">
              <img src="/images/uva.png" alt="UVA" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://atcoder.jp/users/fellow_junior" target="_blank" rel="noopener noreferrer">
              <img src="/images/atcoder.png" alt="AtCoder" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://vjudge.net/user/SALEH7127" target="_blank" rel="noopener noreferrer">
              <img src="/images/vjudge.jpeg" alt="Vjudge" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://toph.co/u/Fellow_junior" target="_blank" rel="noopener noreferrer">
              <img src="/images/toph.png" alt="Toph" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://www.spoj.com/users/fellow_junior/" target="_blank" rel="noopener noreferrer"> 
              <img src="/images/spoj.png" alt="Spoj" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://judge.beecrowd.com/en/profile/356468" target="_blank" rel="noopener noreferrer">
              <img src="/images/beecrowd.png" alt="BeeCrowd" />
            </a>
          </li>

          <li className="clients-item">
            <a href="https://cses.fi/user/11082" target="_blank" rel="noopener noreferrer">
              <img src="/images/cses.png" alt="CSES" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
