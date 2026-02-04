"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toWords = toWords;
var Numbers;
(function (Numbers) {
    Numbers[Numbers["TEN"] = 10] = "TEN";
    Numbers[Numbers["ONE_HUNDRED"] = 100] = "ONE_HUNDRED";
    Numbers[Numbers["ONE_THOUSAND"] = 1000] = "ONE_THOUSAND";
    Numbers[Numbers["ONE_MILLION"] = 1000000] = "ONE_MILLION";
    Numbers[Numbers["ONE_BILLION"] = 1000000000] = "ONE_BILLION";
    Numbers[Numbers["ONE_TRILLION"] = 1000000000000] = "ONE_TRILLION";
    Numbers[Numbers["ONE_QUADRILLION"] = 1000000000000000] = "ONE_QUADRILLION";
    Numbers[Numbers["MAX"] = 9007199254740992] = "MAX";
})(Numbers || (Numbers = {}));
const LESS_THAN_TWENTY = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];
const TENTHS_LESS_THAN_HUNDRED = [
    'zero',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
];
/**
 * Converts an integer into words.
 * If number is decimal, the decimals will be removed.
 * @example toWords(12) => 'twelve'
 * @param {number|string} number
 * @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
 * @returns {string}
 */
function toWords(number, asOrdinal) {
    let words;
    let num = typeof number === 'string' ? parseInt(number, 10) : number;
    if (!isFinite(num)) {
        throw new TypeError('Not a finite number: ' + number + ' (' + typeof number + ')');
    }
    if (!isSafeNumber(num)) {
        throw new RangeError('Input is not a safe number, it’s either too large or too small.');
    }
    words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
}
function generateWords(number, words) {
    let remainder = 0, word = '';
    // We’re done
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }
    if (number < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[number];
    }
    else if (number < Numbers.ONE_HUNDRED) {
        remainder = number % Numbers.TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / Numbers.TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }
    }
    else if (number < Numbers.ONE_THOUSAND) {
        remainder = number % Numbers.ONE_HUNDRED;
        word = generateWords(Math.floor(number / Numbers.ONE_HUNDRED)) + ' hundred';
    }
    else if (number < Numbers.ONE_MILLION) {
        remainder = number % Numbers.ONE_THOUSAND;
        word =
            generateWords(Math.floor(number / Numbers.ONE_THOUSAND)) + ' thousand,';
    }
    else if (number < Numbers.ONE_BILLION) {
        remainder = number % Numbers.ONE_MILLION;
        word =
            generateWords(Math.floor(number / Numbers.ONE_MILLION)) + ' million,';
    }
    else if (number < Numbers.ONE_TRILLION) {
        remainder = number % Numbers.ONE_BILLION;
        word =
            generateWords(Math.floor(number / Numbers.ONE_BILLION)) + ' billion,';
    }
    else if (number < Numbers.ONE_QUADRILLION) {
        remainder = number % Numbers.ONE_TRILLION;
        word =
            generateWords(Math.floor(number / Numbers.ONE_TRILLION)) + ' trillion,';
    }
    else if (number <= Numbers.MAX) {
        remainder = number % Numbers.ONE_QUADRILLION;
        word =
            generateWords(Math.floor(number / Numbers.ONE_QUADRILLION)) +
                ' quadrillion,';
    }
    words.push(word);
    return generateWords(remainder, words);
}
//# sourceMappingURL=app.js.map