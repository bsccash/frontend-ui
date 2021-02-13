import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useBscCash from './useBscCash';
import config from '../config';

const useEarningsOnBoardroom = () => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bscCash = useBscCash();

  const fetchBalance = useCallback(async () => {
    setBalance(await bscCash.getEarningsOnBoardroom());
  }, [bscCash?.isUnlocked]);

  useEffect(() => {
    if (bscCash?.isUnlocked) {
      fetchBalance().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [bscCash?.isUnlocked, setBalance]);

  return balance;
};

export default useEarningsOnBoardroom;
