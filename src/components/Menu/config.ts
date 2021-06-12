import { MenuEntry } from '@ricefarm/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://ricefarm.fi/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://ricefarm.fi/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://ricefarm.fi/pools',
  },
  /*
{
  label: 'Lottery',
  icon: 'TicketIcon',
  href: 'https://pancakeswap.finance/lottery',
  status: {
    text: 'WIN',
    color: 'warning',
  },
},
{
  label: 'Collectibles',
  icon: 'NftIcon',
  href: 'https://pancakeswap.finance/nft',
},
{
  label: 'Team Battle',
  icon: 'TeamBattleIcon',
  href: 'https://pancakeswap.finance/competition',
},

{
  label: 'Teams & Profile',
  icon: 'GroupsIcon',
  items: [
    {
      label: 'Leaderboard',
      href: 'https://pancakeswap.finance/teams',
    },
    {
      label: 'Task Center',
      href: 'https://pancakeswap.finance/profile/tasks',
    },
    {
      label: 'Your Profile',
      href: 'https://pancakeswap.finance/profile',
    },
  ],
},
{
  label: 'Info',
  icon: 'InfoIcon',
  items: [
    {
      label: 'Overview',
      href: 'https://pancakeswap.info',
    },
    {
      label: 'Tokens',
      href: 'https://pancakeswap.info/tokens',
    },
    {
      label: 'Pairs',
      href: 'https://pancakeswap.info/pairs',
    },
    {
      label: 'Accounts',
      href: 'https://pancakeswap.info/accounts',
    },
  ],
},
 */
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://ricefarm.fi/ifo',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: 'https://ricefarm.fi/referrals',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/rice-farm",
      },
      {
        label: 'Docs',
        href: 'https://docs.ricefarm.fi',
      },
      {
        label: 'TeslaSafe',
        href: 'https://teslasafe.fi',
      },
      {
        label: "TeslaSafe Github",
        href: "https://github.com/tesla-safe",
      }
    ],
  },
]

export default config
