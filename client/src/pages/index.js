import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

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
            Thank you for visiting my website.
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
          {/* <li className="icon solid fa-code"> */}
          <h2>Technologies</h2>
          {/* </li> */}
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
      style={{ backgroundColor: '#21B2A6' }}
    >
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Magna primis lobortis
            <br />
            sed ullamcorper
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Tortor dolore feugiat
            <br />
            elementum magna
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Projects</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Arcu accumsan</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Ac Augue Eget</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
