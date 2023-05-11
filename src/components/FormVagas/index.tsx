import { FormEvent, useState } from 'react';
import styles from './FormVagas.module.css';

interface Props {
  aoPesquisar: (termo: string) => void;
}

const FormVagas: React.FC<Props> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLowerCase());
  };

  return (
    <form className={styles.form} onSubmit={aoEnviarForm}>
      <input
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className={styles.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
  );
};

export default FormVagas;
