import React from 'react';

import bacLogo from '../../assets/img/bsc-cash-logo.svg';
import basLogo from '../../assets/img/bsc-share-logo.svg';
import babLogo from '../../assets/img/bsc-bond-logo.svg';
import yCRVLogo from '../../assets/img/ycrv.png';
import DAILogo from '../../assets/img/DAI.png';
import sUSDLogo from '../../assets/img/sUSD.png';
import USDCLogo from '../../assets/img/USDC.png';
import USDTLogo from '../../assets/img/USDT.png';

const logosBySymbol: {[title: string]: string} = {
  'BCS': bacLogo,
  'BSB': babLogo,
  'BSS': basLogo,
  'yCRV': yCRVLogo,
  'DAI': DAILogo,
  'SUSD': sUSDLogo,
  'USDC': USDCLogo,
  'USDT': USDTLogo,
  'BAC_DAI-UNI-LPv2': bacLogo,
  'BAS_DAI-UNI-LPv2': basLogo,
};

type BscLogoProps = {
  symbol: string;
  size?: number;
}

const TokenSymbol: React.FC<BscLogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid BscLogo symbol: ${symbol}`);
  }
  return (
    <img
      src={logosBySymbol[symbol]}
      alt={`${symbol} Logo`}
      width={size}
      height={size}
    />
  )
};

export default TokenSymbol;
