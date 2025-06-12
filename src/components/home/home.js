import React from 'react';
import '../home/home.css';
import artist from '../../assets/artist.png';
import showcase from '../../assets/showcase.png';
import doradesign from '../../assets/doradesign.png';
import wave from '../../assets/wavefun.png';
import siolia from '../../assets/siolia.png';

export default function Home() {
    return (
        <section className="home-banner">
            <div className="heading-wrapper">
                <h1 className="hero-heading">
                    I AM A <span className="inline-img"><img src={artist} alt="artist" /></span> FREELANCE<br />
                    DESIGNER <span className="inline-img"><img src={showcase} alt="showcase" /></span> FROM<br />
                    SAN FRANCISCO
                </h1>
            </div>
            <div className="brand-row">
  <div className="brand-logos">
    <img src={doradesign} alt="doradesign" className="brand-logo" />
    <img src={wave} alt="wave" className="brand-logo" />
    <img src={siolia} alt="siolia" className="brand-logo" />
  </div>

  <div className="intro-text-wrapper">
    <p className="intro-text">
      Welcome to my portfolio. Here, artistry meets functionality. <br />
      Dive into a curated showcase of distinctive branding and <br />
      web designs, each crafted to captivate and inspire.
    </p>
  </div>
</div>

        </section>
    );
}
