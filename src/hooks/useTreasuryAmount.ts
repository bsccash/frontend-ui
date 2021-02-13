import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';
import useBscCash from './useBscCash';

const useTreasuryAmount = () => {
  const [amount, setAmount] = useState(BigNumber.from(0));
  const bscCash = useBscCash();


  useEffect(() => {
    if (bscCash) {
      const { Treasury } = bscCash.contracts;
      bscCash.BCS.balanceOf(Treasury.address).then(setAmount);
    }
  }, [bscCash]);
  return amount;
};

export default useTreasuryAmount;
