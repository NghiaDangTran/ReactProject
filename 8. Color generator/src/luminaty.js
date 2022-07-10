const getLuminanace = (values) => {
    const rgb = values.map((v) => {
        const val = v / 255;
        return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
};

const getContrastRatio = (colorA, colorB) => {
    const lumA = getLuminanace(colorA);
    const lumB = getLuminanace(colorB);

    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
};

export default  getContrastRatio