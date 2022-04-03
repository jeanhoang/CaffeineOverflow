import classes from './StartingPageContent.module.css';
import backgroundImage from '../../assets/background.png';

const StartingPageContent = () => {

  return (
    <section className={classes.starting}>
      <div className={classes.content} style={{
        background: `url(${backgroundImage})`,
        height: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>

        <div className={classes.center}>
          <h1>Coming Soon</h1>
          <h4>Our website is currently under construction. Follow us on social media to stay updated!</h4>
        </div>
      </div>
    </section >
  );
};

export default StartingPageContent;
