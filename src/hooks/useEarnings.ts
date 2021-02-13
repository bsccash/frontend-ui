import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useBscCash from './useBscCash';
import { ContractName } from '../bsc-cash';
import config from '../config';

const useEarnings = (poolName: ContractName) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bscCash = useBscCash();

  const fetchBalance = useCallback(async () => {
    const balance = await bscCash.earnedFromBank(poolName, bscCash.myAccount);
    setBalance(balance);
  }, [bscCash?.isUnlocked, poolName]);

  useEffect(() => {
    if (bscCash?.isUnlocked) {
      fetchBalance().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [bscCash?.isUnlocked, poolName, bscCash]);

  return balance;
};

export default useEarnings;
