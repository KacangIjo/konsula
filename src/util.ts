const IDIntl = new Intl.NumberFormat('id-ID');

export const formatNumber = (number: number) => {
    return IDIntl.format(number);
};
