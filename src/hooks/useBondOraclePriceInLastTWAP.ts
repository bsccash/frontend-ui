import { useCallback, useEffect, useState } from 'react';
import useBscCash from './useBscCash';
import config from '../config';
import { BigNumber } from 'ethers';

const useBondOraclePriceInLastTWAP = () => {
  const [price, setPrice] = useState<BigNumber>(BigNumber.from(0));
  const bscCash = useBscCash();

  const fetchCashPrice = useCallback(async () => {
    setPrice(await bscCash.getBondOraclePriceInLastTWAP());
  }, [bscCash]);

  useEffect(() => {
    fetchCashPrice().catch((err) => console.error(`Failed to fetch BSB price: ${err.stack}`));
    const refreshInterval = setInterval(fetchCashPrice, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setPrice, bscCash]);

  return price;
};

export default useBondOraclePriceInLastTWAP;
