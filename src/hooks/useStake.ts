import { useCallback } from 'react';
import useBscCash from './useBscCash';
import { Bank } from '../bsc-cash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';

const useStake = (bank: Bank) => {
  const bscCash = useBscCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleStake = useCallback(
    (amount: string) => {
      const amountBn = parseUnits(amount, bank.depositToken.decimal);
      handleTransactionReceipt(
        bscCash.stake(bank.contract, amountBn),
        `Stake ${amount} ${bank.depositTokenName} to ${bank.contract}`,
      );
    },
    [bank, bscCash],
  );
  return { onStake: handleStake };
};

export default useStake;
