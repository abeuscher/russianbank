import GameBoard from '@/components/gameBoard';
import ReduxProvider from '@/utils/ReduxProvider';
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <h1>Russian Bank Game</h1>
      <GameBoard />
        <button>Start Game</button>
    </main>
  );
};

export default function Home() {
  return (
    <ReduxProvider>
      <HomePage />
    </ReduxProvider>
  );
}