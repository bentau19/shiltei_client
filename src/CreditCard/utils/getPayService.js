const visaRegExp = new RegExp('^4');
const mastercardRegExp = new RegExp('^5[1-5]');
const mirRegExp = new RegExp('^2');

export const getPayService = cardNumber => {
    if (cardNumber.match(visaRegExp) != null) return 'visa';
    if (cardNumber.match(mastercardRegExp) != null) return 'mastercard';
    if (cardNumber.match(mirRegExp) != null) return 'mir';
    return 'mastercard'; // default type
};
