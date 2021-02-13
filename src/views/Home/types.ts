import { TokenStat } from '../../bsc-cash/types';

export interface OverviewData {
  cash?: TokenStat;
  bond?: TokenStat;
  share?: TokenStat;
}
