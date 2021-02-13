import { useCallback } from 'react';
import useBscCash from './useBscCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { Bank } from '../bsc-cash';

const useHarvest = (bank: Bank) => {
  const bscCash = useBscCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleReward = useCallback(() => {
    handleTransactionReceipt(
      bscCash.harvest(bank.contract),
      `Claim ${bank.earnTokenName} from ${bank.contract}`,
    );
  }, [bank, bscCash]);

  return { onReward: handleReward };
};

export default useHarvest;
