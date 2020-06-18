import React from 'react';

import Layout from '../components/Layout';

import pic2 from '../assets/images/pic02.jpg';
import logo from '../assets/images/simply-logo.png';

import html5Logo from '../assets/vectors/html5.svg';
import css3Logo from '../assets/vectors/css3.svg';
import javascript from '../assets/vectors/javascript.svg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <div className="image">
          <a
            href="https://saltamay.github.io/simply/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="" style={{ width: 340 }} />
          </a>
        </div>
        <p>We Find, You Love, Simple is that</p>
        <ul
          className="actions stacked"
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <li>
            <a
              href="https://saltamay.github.io/simply/"
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
            href="https://saltamay.github.io/simply/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={pic2} alt="" />
          </a>
        </div>
        <div className="content">
          <a
            href="https://saltamay.github.io/simply/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Simply</h2>
          </a>
          <p>
            At Simply, we strive to remove the hassle from real estate
            transactions and make the process better by making sure that
            qualified leads are matched with listings that meet their
            preferences and needs. Together, we can change the narrative around
            real estate transactions.
          </p>
          <br />
          <p>
            Simply, in most basic sense, is a real estate listing aggregation
            web application but with a twist. Rather than being just a platform
            on which users search for listing, we strive to personalize the
            whole real estate experience for users by first getting to know
            them.
          </p>
          <br />
          <p>
            This is how it works: first, we get to know the user by asking few
            simple questions about what they are looking for. Then we find the
            best listings that match users' criteria by price, best location, or
            ease of transportation. From there, we help you make a decision on
            plaecs to visit and contact you for the real estate agent if you
            choose to make an offer. After all, finding a great place you love
            should be fun not a big hassle to go through.
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
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
