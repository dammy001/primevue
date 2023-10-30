// @todo
export default (color, amount) => {
    const rgb = color.match(/\w{2}/g).map((component) => parseInt(component, 16));
    const [r, g, b] = rgb.map((channel) => Math.min(255, channel + (255 - channel) * (amount / 100)));

    return `#${(r | (1 << 8)).toString(16).slice(1)}${(g | (1 << 8)).toString(16).slice(1)}${(b | (1 << 8)).toString(16).slice(1)}`;
};
