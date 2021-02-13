import { useContext } from 'react';
import { Context } from '../contexts/BscCashProvider';

const useBscCash = () => {
  const { bscCash } = useContext(Context);
  return bscCash;
};

export default useBscCash;
