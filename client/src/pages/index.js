import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

import html5Logo from '../assets/vectors/html5.svg';
import css3Logo from '../assets/vectors/css3.svg';
import javascript from '../assets/vectors/javascript.svg';
import reactLogo from '../assets/vectors/react.svg';
import nodeLogo from '../assets/vectors/nodejs.svg';
import mongodbLogo from '../assets/vectors/mongodb.svg';

import resume from '../assets/docs/sal-tamay-resume.pdf';

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        {/* <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul> */}
        <ul className="social">
          <li>
            <a
              className="fab fa-github"
              href={config.socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              className="fab fa-linkedin-in"
              href={config.socialLinks[1].url}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              className="fab fa-twitter"
              href={config.socialLinks[2].url}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              className="fas fa-paper-plane"
              href={config.socialLinks[3].url}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
          <li>
            <a
              className="fas fa-file"
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Hi there!
            <br />
            Thank you for visiting my website
          </h2>
          <p>
            If you are looking to add a Full Stack Software Developer to your
            team
            <br />
            you are in the right place, read on!
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section
      // id="three"
      className="wrapper style3 special"
      style={{ backgroundColor: '#2B343D' }}
    >
      <div className="inner">
        <header className="major">
          <h2>Technologies</h2>
          <p>
            Below some of the technologies I've worked or am familiar with.
            <br />
            {/* fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper. */}
          </p>
        </header>
        <ul className="features">
          <li className="fab fa-html5">
            <h3>HTML5</h3>
            <p>
              HTML is the standard markup language for Web pages. CSS is a
              language that describes the style of an HTML document.
            </p>
          </li>
          <li className="fab fa-css3-alt">
            <h3>CSS3</h3>
            <p>
              HTML is the standard markup language for Web pages. CSS is a
              language that describes the style of an HTML document.
            </p>
          </li>
          <li className="fab fa-js-square">
            <h3>JavaScript/ES6</h3>
            <p>
              JavaScript is the programming language of HTML and the Web.
              JavaScript is used to add interactivity to static web pages.
            </p>
          </li>
          <li className="fab fa-python">
            <h3>Python</h3>
            <p>
              Python’s elegant syntax and dynamic typing, together with its
              interpreted nature, make it an ideal language for scripting and
              rapid application development in many areas on most platforms.
            </p>
          </li>
          <li className="fab fa-java">
            <h3>Java</h3>
            <p>
              Java is a general-purpose programming language that is
              class-based, object-oriented, and designed to have as few
              implementation dependencies as possible
            </p>
          </li>
          <li className="fab fa-react">
            <h3>React.js</h3>
            <p>
              A JavaScript library for building user interfaces. React makes it
              painless to create interactive UIs.
            </p>
          </li>
          <li className="fab fa-node">
            <h3>Node.js</h3>
            <p>
              Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript
              engine. Node.js is designed to build scalable network
              applications.
            </p>
          </li>
          <li className="fas fa-database">
            <h3>MongoDB</h3>
            <p>
              MongoDB is a cross-platform document-oriented database program.
              Classified as a NoSQL database program, MongoDB uses JSON-like
              documents
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section
      id="two"
      className="wrapper alt style2"
      style={{ backgroundColor: '#21B2A6', padding: '6em 0 0 0' }}
    >
      <div className="inner" style={{ textAlign: 'center' }}>
        <header className="major">
          <h2>Featured Projects</h2>
          <p>Below some of the technologies I've worked or am familiar with.</p>
        </header>
      </div>
      <section className="spotlight" style={{ paddingBottom: 40 }}>
        <div className="image">
          <a href="https://jobs-and-dragons.herokuapp.com/" target="_blank">
            <img src={pic1} alt="" />
          </a>
        </div>
        <div className="content">
          <Link to="/jobs-and-dragons">
            <h2>Jobs &amp; Dragons</h2>
          </Link>
          <p>Finding work is hard!</p>
          <p>
            Searching for a job in your field can be frustrating, repetitive,
            laborious and boring. So why not make the process more fun? Our
            Motivation in creating the Jobs&Dragons App was to create a platform
            that was more engaging and fun for job searchers, new and
            experienced alike.
          </p>
          <br />
          <p>
            Technologies:
            <ul>
              <li>
                <img src={html5Logo} alt="HTML5 Logo" />
              </li>
              <li>
                <img src={css3Logo} alt="CSS3 Logo" />
              </li>
              <li>
                <img src={reactLogo} alt="React Logo" />
              </li>
              <li>
                <img
                  src={nodeLogo}
                  alt="Node.js Logo"
                  style={{ paddingTop: 5 }}
                />
              </li>
              <li>
                <img
                  src={mongodbLogo}
                  alt="MongoDB Logo"
                  style={{
                    width: 54,
                  }}
                />
              </li>
            </ul>
          </p>
          <Link
            to="/jobs-and-dragons"
            className="button fit"
            target="_blank"
            style={{ width: 240 }}
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="spotlight" style={{ paddingBottom: 40 }}>
        <div className="image">
          <a href="https://saltamay.github.io/simply/" target="_blank">
            <img src={pic2} alt="" />
          </a>
        </div>
        <div className="content">
          <Link to="/simply">
            <h2>Simply</h2>
          </Link>
          <p>We Find, You Love, Simple is that!</p>
          <p>
            At Simply, we strive to remove the hassle from real estate
            transactions and make the process better by making sure that
            qualified leads are matched with listings that meet their
            preferences and needs.
          </p>
          <br />
          <p>
            Technologies:
            <ul>
              <li>
                <img src={html5Logo} alt="HTML5 Logo" />
              </li>
              <li>
                <img src={css3Logo} alt="CSS3 Logo" />
              </li>
              <li>
                <img
                  src={javascript}
                  alt="JavaScript Logo"
                  style={{ paddingTop: 10 }}
                />
              </li>
            </ul>
          </p>
          <Link
            to="/simply"
            className="button fit"
            target="_blank"
            style={{ width: 240 }}
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="spotlight" style={{ paddingBottom: 40 }}>
        <div className="image">
          <a href="https://v14-geckos-team-02.herokuapp.com/" target="_blank">
            <img src={pic3} alt="" />
          </a>
        </div>
        <div className="content">
          <Link to="/quiz-app">
            <h2>Quiz</h2>
          </Link>
          <p>Practice your Algorithms & Data Structures Knowledge</p>
          <p>
            This app helps you prepare for coding interviews on the web,
            anywhere, anytime. Review and practice topics that are commonly
            covered in technical interviews such as Data Structures and
            Algorithms, and Time Complexities.
          </p>
          <p>
            Technologies:
            <ul>
              <li>
                <img src={html5Logo} alt="HTML5 Logo" />
              </li>
              <li>
                <img src={css3Logo} alt="CSS3 Logo" />
              </li>
              <li>
                <img src={reactLogo} alt="React Logo" />
              </li>
            </ul>
          </p>
          <Link
            to="/quiz-app"
            className="button fit"
            target="_blank"
            style={{ width: 240 }}
          >
            Learn More
          </Link>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Projects</h2>
          <p>
            During my time in Full Stack Web Development bootcamp at the
            University of Toronto
            <br />I have built different projects with vat variety of
            technologies.
            <br />I also succesfully completed Udacity's Front End and Backend
            Nanodegrees.
          </p>
        </header>
        <ul className="features">
          <li className="fab fa-google">
            <h3>Google Book Search</h3>
            <p>
              Full Stack book library application built with React, Node,
              Express, and MongoDB as well as GraphQL api.
            </p>
          </li>
          <li className="fab fa-react">
            <h3>React Portfolio</h3>
            <p>
              We initally designesd our portfilio websites without using any
              frameworks. In this homework, I redesigned my portfolio website
              using Gatsby.
            </p>
          </li>
          <li className="fab fa-react">
            <h3>Employee Directory</h3>
            <p>
              An employee directory with React. This app requires breaking up
              the application's UI into components, manage component state, and
              respond to user events.
            </p>
          </li>
          <li className="fab fa-google">
            <h3>PWA Budget Tracker</h3>
            <p>
              Progress web app (PWA) that lets users add expenses and deposits
              to their budget with or without a connection. When entering
              transactions offline, they should populate the total when brought
              back online.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Workout Tracker</h3>
            <p>
              In this assignment, I worked on connecting front-end application
              to MongoDB database that utilizes Mongoose using Node.js server
              with Express.js.
            </p>
          </li>
          <li className="fab fa-node">
            <h3>Node Express Handlebars</h3>
            <p>
              In this assignment, we are assigned to create a CRUD app with
              MySQL, Node, Express, Handlebars and a custom ORM. The app follows
              the MVC design pattern using Node and MySQL to query and route
              data, and Handlebars to generate HTML.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Get in touch</h2>
          <p>
            Whether you are looking for your next hire
            <br />
            or you would like to discuss a contract oportunity
            <br />
            please feel free to get in touch
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href={resume} className="button fit" target="_blank">
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/saltamay-full-stack-developer/"
              className="button fit"
              target="_blank"
            >
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
