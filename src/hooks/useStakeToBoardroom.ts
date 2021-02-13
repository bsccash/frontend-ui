import { useCallback } from 'react';
import useBscCash from './useBscCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useStakeToBoardroom = () => {
  const bscCash = useBscCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        bscCash.stakeShareToBoardroom(amount),
        `Stake ${amount} BSS to the boardroom`,
      );
    },
    [bscCash],
  );
  return { onStake: handleStake };
};

export default useStakeToBoardroom;
