import { useCallback } from 'react';
import useBscCash from './useBscCash';
import { Bank } from '../bsc-cash';
import { useTransactionAdder } from '../state/transactions/hooks';
import { BigNumber } from 'ethers';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useWithdrawFromBoardroom = () => {
  const bscCash = useBscCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleWithdraw = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        bscCash.withdrawShareFromBoardroom(amount),
        `Withdraw ${amount} BSS from the boardroom`,
      );
    },
    [bscCash],
  );
  return { onWithdraw: handleWithdraw };
};

export default useWithdrawFromBoardroom;
