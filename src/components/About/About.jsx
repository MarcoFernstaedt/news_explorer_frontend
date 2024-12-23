import React from "react";
import authorImg from "../../assets/author.jpeg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <img src={authorImg} alt="author image" className="about__author-image" />
      <div className="about__content">
        <h4 className="about__header">About the author</h4>
        <p className="about__paragraph">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
};

export default About;
