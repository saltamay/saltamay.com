import React from 'react';

import Layout from '../components/Layout';

import pic3 from '../assets/images/pic03.jpg';

import html5Logo from '../assets/vectors/html5.svg';
import css3Logo from '../assets/vectors/css3.svg';
import reactLogo from '../assets/vectors/react.svg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <a
          href="https://v14-geckos-team-02.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Quiz App</h2>
        </a>
        <p>Practice your Algorithms & Data Structures Knowledge</p>
        <ul
          className="actions stacked"
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <li>
            <a
              href="https://v14-geckos-team-02.herokuapp.com/"
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
        style={{
          paddingBottom: '100px',
          alignItems: 'start',
        }}
      >
        <div className="image" style={{ paddingTop: 90 }}>
          <a
            href="https://v14-geckos-team-02.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic3} alt="" />
          </a>
        </div>
        <div className="content">
          <a
            href="https://v14-geckos-team-02.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Quiz App</h2>
          </a>
          <p>
            This app helps you prepare for coding interviews on the web,
            anywhere, anytime. Review and practice topics that are commonly
            covered in technical interviews such as Data Structures and
            Algorithms, and Time Complexities.
          </p>
          <br />
          <p>
            One of the reasons self-taught developers and Coding Bootcamp
            graduates struggle to find a job is the lack of computer science
            concepts such as data Structures, Algorithms and Time Complexity
            that are commonly covered in technical interviews.
          </p>
          <br />
          <p>
            While bootcamps can create awareness within their curriculum, the
            time allocated for these problematic subjects is simply not enough.
            In the case of self-taught developers, the internet has wide variaty
            of resources that makes it difficult for an inexperienced person to
            comb through ro discover what resource is the best that is within
            their skill level and maybe some more but not too far detached from
            thier current understanding. That's actually why bootcamp industry
            thrives by providing just enough but structured knowledge and
            practice.
          </p>
          <br />
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
            </ul>
          </p>
          <br />
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
