import {ReactComponent as Bitcoin} from "../icons/crypto_icons/bitcoin.svg";
import {ReactComponent as Dgd} from "../icons/crypto_icons/DGD.svg";
import {ReactComponent as Bts} from "../icons/crypto_icons/BTS.svg";
import {ReactComponent as Ethos} from "../icons/crypto_icons/ethos.svg";
import {ReactComponent as Kmd} from "../icons/crypto_icons/KMD.svg";
import {ReactComponent as Etp} from "../icons/crypto_icons/ETP.svg";
import {Routes} from "../routes/routes";


export const headerMenuItems = [
    {label: 'Market', route: Routes.FEATURED},
    {label: 'Trade', route: Routes.TRADE},
    {label: 'Earn', route: Routes.HOME},
    {label: 'About', route: Routes.HOME},
    {label: 'Career', route: Routes.HOME}
]


export const mainMenuItems = [
    'All',
    'Top Gainers',
    'Top Losers',
    'New Listing',
    'Defi',
    'Metaverse'
]

export type TrendType = {
    from: string,
    to: string,
    positive: boolean,
    change: number,
    value: string
}
export const trend: TrendType = {
    from: 'BTC',
    to: 'INR',
    positive: true,
    change: 5.86,
    value: '28,214,25.341'
}


export const trends: Array<TrendType> = [
    {
        from: 'BTC',
        to: 'INR',
        positive: true,
        change: 5.86,
        value: '28,214,25.341'
    },
    {
        from: 'BTC',
        to: 'INR',
        positive: false,
        change: 5.86,
        value: '28,214,25.341'
    },
    {
        from: 'BTC',
        to: 'INR',
        positive: true,
        change: 5.86,
        value: '28,214,25.341'
    },
    {
        from: 'BTC',
        to: 'INR',
        positive: false,
        change: 5.86,
        value: '28,214,25.341'
    },
    {
        from: 'BTC',
        to: 'INR',
        positive: false,
        change: 5.86,
        value: '28,214,25.341'
    },
    {
        from: 'BTC',
        to: 'INR',
        positive: true,
        change: 5.86,
        value: '28,214,25.341'
    },
    {
        from: 'BTC',
        to: 'INR',
        positive: false,
        change: 5.86,
        value: '28,214,25.341'
    }
]

export const marketTrends = [
    {
        icon: <Bitcoin/>,
        label: 'Bitcoin/BTC',
        positive: true,
        value: '28,214,25.341',
        change: 5.76
    },
    {
        icon: <Bts/>,
        label: 'BTS/BTC',
        positive: false,
        value: '2,541.12',
        change: 5.76
    },
    {
        icon: <Dgd/>,
        label: 'DGD/BTC',
        positive: true,
        value: '284.64',
        change: 5.76
    },
    {
        icon: <Ethos/>,
        label: 'Ethos/BTC',
        positive: false,
        value: '1,146,25.96',
        change: 5.76
    },
    {
        icon: <Kmd/>,
        label: 'KND/BTC',
        positive: false,
        value: '245.21',
        change: 5.76
    },
    {
        icon: <Etp/>,
        label: 'Etp/BTC',
        positive: true,
        value: '420.83',
        change: 5.76
    },
]