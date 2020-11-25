export const createPaddedDecorator = (padding) => {
    return () => `<div style="{padding: ${padding}}"><story /></div>`
}
