import React from 'react';
import classes from './BannerContainer.module.css';

const BannerContainer = () => {
  return (
    <div className={classes['banner-container']}>
        <div className={classes['banner-product']}>
            <br></br>
            <p>T'is the season</p>
            <h3>Happy Holiday!</h3>
        </div>

        <div>
            <div className={classes['desc']}>
                <h5>Holiday Sale</h5>
                <p>Up to 50% almost every items</p>
            </div>
        </div>

    </div>
  );
};

export default BannerContainer;