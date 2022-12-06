import React from 'react';
import classes from './AboutPage.module.css';

import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from'react-icons/ai';

import aboutImg from '../assets/about-image.jpg';

const AboutPage = () => {
  return (
    <div>
     
      <section className={classes['about']}>
        <div className={classes['about-wrap']}>
          <div className={classes['about-image']}>
            <img src={aboutImg} alt="sample" />
          </div>
          <div className={classes['about-text']}>
            <h1>My Story</h1>
            <br></br>
            <p>After taking my maternity leave, I was looking for customized items
              for my son: Kairo. However, no matter how hard I searched,
              there are no personalized items with my son's name.
              It is through this incident that Sevla Design Studio was brough to life.
            </p>
            <p>Sevla Design Studio offers various personalized items according to your preferences.</p>
            <br></br><br></br><br></br>
            <div className={classes['social-media']}>
              <h2>Follow Us</h2>
              <br></br>
              <a href='https://www.facebook.com/Sevla.Studio/'>
                <AiFillFacebook size={50}/>
              </a>
                &nbsp;&nbsp;&nbsp;
              <a href='https://www.instagram.com/sevla.studios/'>
                <AiFillInstagram size={50}/>
              </a>
            </div>
          </div>

          

        </div>

      </section>
    </div>
  )
}

export default AboutPage;