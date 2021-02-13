import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import HomeCard from './components/HomeCard';
import { OverviewData } from './types';
import useBscCash from '../../hooks/useBscCash';
import config from '../../config';
import Notice from '../../components/Notice';

const Home: React.FC = () => {
  const bscCash = useBscCash();

  const [{ cash, bond, share }, setStats] = useState<OverviewData>({});
  const fetchStats = useCallback(async () => {
    const [cash, bond, share] = await Promise.all([
      bscCash.getCashStatFromUniswap(),
      bscCash.getBondStat(),
      bscCash.getShareStat(),
    ]);
    if (Date.now() < config.bondLaunchesAt.getTime()) {
      bond.priceInDAI = '-';
    }
    setStats({ cash, bond, share });
  }, [bscCash, setStats]);

  useEffect(() => {
    if (bscCash) {
      fetchStats().catch((err) => console.error(err.stack));
    }
  }, [bscCash]);

  const cashAddr = useMemo(() => bscCash?.BCS.address, [bscCash]);
  const shareAddr = useMemo(() => bscCash?.BSS.address, [bscCash]);
  const bondAddr = useMemo(() => bscCash?.BSB.address, [bscCash]);

  return (
    <Page>
      <PageHeader
        icon="💸"
        subtitle="Buy, sell, and provide liquidity for Bsc Cash and cShares on CheeseSwap"
        title="Welcome to Bsc Cash!"
      />
      <Spacer size="md" />
      <CardWrapper>
        <HomeCard
          title="Bsc Cash"
          symbol="BCS"
          color="#252225"
          supplyLabel="Circulating Supply"
          address={cashAddr}
          stat={cash}
        />
        <Spacer size="lg" />
        <HomeCard
          title="Bsc Share"
          symbol="BSS"
          color="#252225"
          address={shareAddr}
          stat={share}
        />
        <Spacer size="lg" />
        <HomeCard
          title="Bsc Bond"
          symbol="BSB"
          color="#252225"
          address={bondAddr}
          stat={bond}
        />
      </CardWrapper>
    </Page>
  );
};

const StyledOverview = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledNoticeContainer = styled.div`
  max-width: 768px;
  width: 90vw;
`;

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`;

const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;

export default Home;
