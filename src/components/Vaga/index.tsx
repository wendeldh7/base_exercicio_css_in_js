import React from 'react';
import styles from './Vaga.module.css';

interface VagaProps {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
}

const Vaga: React.FC<VagaProps> = ({
  titulo,
  localizacao,
  nivel,
  modalidade,
  salarioMin,
  salarioMax,
  requisitos,
}) => {
  return (
    <li className={styles.vaga}>
      <h3 className={styles.vagaTitulo}>{titulo}</h3>
      <ul>
        <li>Localizacao: {localizacao}</li>
        <li>Senioridade: {nivel}</li>
        <li>Tipo de contratacao: {modalidade}</li>
        <li>Salário: {salarioMin} - {salarioMax}</li>
        <li>Requisitos: {requisitos.join(', ')}</li>
      </ul>
      <a className={styles.vagaLink} href="#">
        Ver detalhes e candidatar-se
      </a>
    </li>
  );
};

export default Vaga;
