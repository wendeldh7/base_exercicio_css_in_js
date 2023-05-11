import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <form className={styles.form}>
      <div className="container">
        <h2 className={styles.heroTitle}>
          As melhores vagas para tecnologia, design e artes visuais.
        </h2>
      </div>
    </form>
  );
};

export default Hero;
