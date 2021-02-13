import { useCallback } from 'react';
import useBscCash from './useBscCash';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useRedeemOnBoardroom = (description?: string) => {
  const bscCash = useBscCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleRedeem = useCallback(() => {
    const alertDesc = description || 'Redeem BSS from Boardroom';
    handleTransactionReceipt(bscCash.exitFromBoardroom(), alertDesc);
  }, [bscCash]);
  return { onRedeem: handleRedeem };
};

export default useRedeemOnBoardroom;
