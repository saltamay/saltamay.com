import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import logo from '../assets/images/j-and-d-logo.png';

import html5Logo from '../assets/vectors/html5.svg';
import css3Logo from '../assets/vectors/css3.svg';
import reactLogo from '../assets/vectors/react.svg';
import nodeLogo from '../assets/vectors/nodejs.svg';
import mongodbLogo from '../assets/vectors/mongodb.svg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <div
          className="spotlight"
          style={{ flexDirection: 'row', justifyContent: 'center' }}
        >
          <di className="image">
            <a
              href="https://jobs-and-dragons.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="" />
            </a>
          </di>
        </div>
        <p>
          University of Toronto Full-Stack Web Developer Bootcamp Capstone
          Project
        </p>
        <ul
          className="actions stacked"
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <li>
            <a
              href="https://jobs-and-dragons.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="button fit"
            >
              Demo
            </a>
          </li>
        </ul>
      </header>
      <section
        className="spotlight"
        style={{ paddingTop: '50px', paddingBottom: '150px' }}
      >
        <div className="image">
          <a
            href="https://jobs-and-dragons.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic1} alt="" />
          </a>
        </div>
        <div className="content">
          <a
            href="https://jobs-and-dragons.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Jobs &amp; Dragons</h2>
          </a>
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
            Our Motivation in creating the Jobs&Dragons App was to create a
            platform that was more engaging and fun for job searchers, new and
            experienced alike.
          </p>
          <div>Guest Account:</div>
          <div>Username: jobsanddragons@gmail.com</div>
          <div>Password: J&Dteam2020</div>
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
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
