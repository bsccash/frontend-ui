import { useCallback, useEffect, useState } from 'react';
import useBscCash from './useBscCash';
import { TokenStat } from '../bsc-cash/types';
import config from '../config';

const useBondStats = () => {
  const [stat, setStat] = useState<TokenStat>();
  const bscCash = useBscCash();

  const fetchBondPrice = useCallback(async () => {
    setStat(await bscCash.getBondStat());
  }, [bscCash]);

  useEffect(() => {
    fetchBondPrice().catch((err) => console.error(`Failed to fetch BSB price: ${err.stack}`));
    const refreshInterval = setInterval(fetchBondPrice, config.refreshInterval);
    return () => clearInterval(refreshInterval);
  }, [setStat, bscCash]);

  return stat;
};

export default useBondStats;
