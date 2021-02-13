import React, { useCallback, useEffect, useState } from 'react';
import Context from './context';
import useBscCash from '../../hooks/useBscCash';
import { Bank } from '../../bsc-cash';
import config, { bankDefinitions } from '../../config';

const Banks: React.FC = ({ children }) => {
  const [banks, setBanks] = useState<Bank[]>([]);
  const bscCash = useBscCash();

  const fetchPools = useCallback(async () => {
    const banks: Bank[] = [];

    for (const bankInfo of Object.values(bankDefinitions)) {
      if (bankInfo.finished) {
        if (!bscCash.isUnlocked) continue;

        // only show pools staked by user
        const balance = await bscCash.stakedBalanceOnBank(bankInfo.contract, bscCash.myAccount);
        if (balance.lte(0)) {
          continue;
        }
      }
      banks.push({
        ...bankInfo,
        address: config.deployments[bankInfo.contract].address,
        depositToken: bscCash.externalTokens[bankInfo.depositTokenName],
        earnToken: bankInfo.earnTokenName == 'BCS' ? bscCash.BCS : bscCash.BSS,
      });
    }
    banks.sort((a, b) => (a.sort > b.sort ? 1 : -1));
    setBanks(banks);
  }, [bscCash, bscCash?.isUnlocked, setBanks]);

  useEffect(() => {
    if (bscCash) {
      fetchPools()
        .catch(err => console.error(`Failed to fetch pools: ${err.stack}`));
    }
  }, [bscCash, bscCash?.isUnlocked, fetchPools]);

  return <Context.Provider value={{ banks }}>{children}</Context.Provider>;
};

export default Banks;
