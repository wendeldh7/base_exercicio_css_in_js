import React from 'react';
import styles from './Cabecalho.module.css';

interface CabecalhoProps {
  titulo: string;
}

const Cabecalho: React.FC<CabecalhoProps> = ({ titulo }) => {
  return (
    <header className={styles.cabecalho}>
      <h1>{titulo}</h1>
    </header>
  );
};

export default Cabecalho;
