import { useEffect, useState } from 'react';
import useBscCash from './useBscCash';
import config from '../config';
import { TreasuryAllocationTime } from '../bsc-cash/types';

const useTreasuryAllocationTimes = () => {
  const [time, setTime] = useState<TreasuryAllocationTime>({
    prevAllocation: new Date(),
    nextAllocation: new Date(),
  });
  const bscCash = useBscCash();

  useEffect(() => {
    if (bscCash) {
      bscCash.getTreasuryNextAllocationTime().then(setTime);
    }
  }, [bscCash]);
  return time;
};

export default useTreasuryAllocationTimes;
