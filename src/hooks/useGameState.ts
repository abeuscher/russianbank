import { GameState } from '@/types';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';

const useGameState = (): GameState => {
  return useSelector((state: RootState) => state.game);
};

export default useGameState;