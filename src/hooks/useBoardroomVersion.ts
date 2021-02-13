import { useCallback, useEffect, useState } from 'react';
import useBscCash from './useBscCash';
import useStakedBalanceOnBoardroom from './useStakedBalanceOnBoardroom';

const useBoardroomVersion = () => {
  const [boardroomVersion, setBoardroomVersion] = useState('latest');
  const bscCash = useBscCash();
  const stakedBalance = useStakedBalanceOnBoardroom();

  const updateState = useCallback(async () => {
    setBoardroomVersion(await bscCash.fetchBoardroomVersionOfUser());
  }, [bscCash?.isUnlocked, stakedBalance]);

  useEffect(() => {
    if (bscCash?.isUnlocked) {
      updateState().catch((err) => console.error(err.stack));
    }
  }, [bscCash?.isUnlocked, stakedBalance]);

  return boardroomVersion;
};

export default useBoardroomVersion;
