import { useCallback } from 'react';
import useBscCash from './useBscCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useHarvestFromBoardroom = () => {
  const bscCash = useBscCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(bscCash.harvestCashFromBoardroom(), 'Claim BCS from Boardroom');
  }, [bscCash]);

  return { onReward: handleReward };
};

export default useHarvestFromBoardroom;
