import { useCallback, useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import ERC20 from '../bsc-cash/ERC20';
import useBscCash from './useBscCash';
import config from '../config';

const useTokenBalance = (token: ERC20) => {
  const [balance, setBalance] = useState(BigNumber.from(0));
  const bscCash = useBscCash();

  const fetchBalance = useCallback(async () => {
    setBalance(await token.balanceOf(bscCash.myAccount));
  }, [bscCash?.isUnlocked, token]);

  useEffect(() => {
    if (bscCash?.isUnlocked) {
      fetchBalance().catch((err) =>
        console.error(`Failed to fetch token balance: ${err.stack}`),
      );
      let refreshInterval = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshInterval);
    }
  }, [bscCash?.isUnlocked, token]);

  return balance;
};

export default useTokenBalance;
