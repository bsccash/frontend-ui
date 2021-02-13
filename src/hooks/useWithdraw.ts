import { useCallback } from 'react';
import useBscCash from './useBscCash';
import { Bank } from '../bsc-cash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';

const useWithdraw = (bank: Bank) => {
  const bscCash = useBscCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleWithdraw = useCallback(
    (amount: string) => {
      const amountBn = parseUnits(amount, bank.depositToken.decimal);
      handleTransactionReceipt(
        bscCash.unstake(bank.contract, amountBn),
        `Withdraw ${amount} ${bank.depositTokenName} from ${bank.contract}`,
      );
    },
    [bank, bscCash],
  );
  return { onWithdraw: handleWithdraw };
};

export default useWithdraw;
