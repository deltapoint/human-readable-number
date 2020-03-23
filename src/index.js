module.exports = function toReadable (n) {
    if (n < 1) return 'zero';
    if (n < 20) return ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'][n - 1];
    if (n < 100) return ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][Math.floor(n / 10) - 2] + (n % 10 ? ' ' + toReadable(n % 10) : '');
    if (n < 1000) return toReadable(Math.floor(n / 100)) + ' hundred' + (n % 100 ? ' ' + toReadable(n % 100) : '');
}
