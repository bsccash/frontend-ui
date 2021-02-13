import { useCallback, useEffect, useState } from 'react';
import useBscCash from './useBscCash';
import { TokenStat } from '../bsc-cash/types';
import config from '../config';

const useCashPriceInEstimatedTWAP = () => {
  const [stat, setStat] = useState<TokenStat>();
  const bscCash = useBscCash();

  const fetchCashPrice = useCallback(async () => {
    setStat(await bscCash.getCashStatInEstimatedTWAP());
  }, [bscCash]);

  useEffect(() => {
    fetchCashPrice().catch((err) => console.error(`Failed to fetch BSB price: ${err.stack}`));
    const refreshInterval = setInterval(fetchCashPrice, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setStat, bscCash]);

  return stat;
};

export default useCashPriceInEstimatedTWAP;
