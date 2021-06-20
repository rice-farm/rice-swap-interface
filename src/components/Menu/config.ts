import { MenuEntry } from '@ricefarm/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://ricefarm.fi/',
  },
  {
    label: 'Trade TeslaSafe v1',
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
    label: 'Trade Rice v2',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xC4eEFF5aab678C3FF32362D80946A3f5De4a1861',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0xC4eEFF5aab678C3FF32362D80946A3f5De4a1861',
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
  {
    label: 'Vaults',
    icon: 'VaultIcon',
    href: 'https://ricefarm.fi/vaults',
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
    label: 'TechRate Audits',
    icon: 'AuditIcon',
    items: [
      {
        label: 'RiceFarm Audit',
        href: 'https://teslasafe.fi/pdf/TechRateRiceFarmAudit.pdf',
      },
      {
        label: 'TeslaSafe Audit',
        href: 'https://teslasafe.fi/pdf/TeslaSafe_Audit.pdf',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Chart',
        href: 'https://charts.bogged.finance/?token=0xC4eEFF5aab678C3FF32362D80946A3f5De4a1861',
      },
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
