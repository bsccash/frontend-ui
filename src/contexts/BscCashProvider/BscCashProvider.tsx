import React, { createContext, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import BscCash from '../../bsc-cash';
import config from '../../config';

export interface BscCashContext {
  bscCash?: BscCash;
}

export const Context = createContext<BscCashContext>({ bscCash: null });

export const BscCashProvider: React.FC = ({ children }) => {
  const { ethereum, account } = useWallet();
  const [bscCash, setBscCash] = useState<BscCash>();

  useEffect(() => {
    if (!bscCash) {
      const bsc = new BscCash(config);
      if (account) {
        // wallet was unlocked at initialization
        bsc.unlockWallet(ethereum, account);
      }
      setBscCash(bsc);
    } else if (account) {
      bscCash.unlockWallet(ethereum, account);
    }
  }, [account]);

  return <Context.Provider value={{ bscCash }}>{children}</Context.Provider>;
};
