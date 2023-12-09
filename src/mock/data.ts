const tableRow = {
    coinName: 'Bitcoin / BTC',
    price: '₹ 24,842,27.65',
    change: '5.76%',
    volume: '₹ 3,01,25,65,275.52',
    high: '₹ 28,482,37.18',
    marketCap: '₹ 8,56,54,456.95',
    action: 'Trade'
}

export const data = new Array(500).fill(tableRow).map((item, index) => {
    const randomValue = () => {
        return `₹ ${(Math.floor(Math.random() * 10000000) + 1).toLocaleString()}`
    }
    return {
        ...item,
        id: index + 1,
        price: randomValue(),
        volume: randomValue(),
        high: randomValue(),
        marketCap: randomValue(),
        change: `${(Math.floor(Math.random() * 100) + 1).toFixed(2)}%`
    }
});