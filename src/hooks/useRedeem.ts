import { useCallback } from 'react';
import useBscCash from './useBscCash';
import { Bank } from '../bsc-cash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useRedeem = (bank: Bank) => {
  const bscCash = useBscCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleRedeem = useCallback(() => {
    handleTransactionReceipt(bscCash.exit(bank.contract), `Redeem ${bank.contract}`);
  }, [bank, bscCash]);

  return { onRedeem: handleRedeem };
};

export default useRedeem;
