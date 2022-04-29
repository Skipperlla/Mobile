import 'intl';
import 'intl/locale-data/jsonp/en'; // or any other locale you need

const numberFormat = (number: number) => {
    function intlFormat(num) {
        return new Intl.NumberFormat().format(Math.round(num * 10) / 10);
    }
    function makeFriendly(num) {
        if (num >= 1000000)
            return intlFormat(num / 1000000) + 'M';
        if (num >= 1000)
            return intlFormat(num / 1000) + 'B';
        return intlFormat(num);
    }
    return makeFriendly(number)
};
// const numberFormat = (number: number) => {
//     return new Intl.NumberFormat("en-tr", {
//         notation: "standard",
//         compactDisplay: "long",
//     })
//         .format(number)
//         .replace(/,/g, ".");
// };
export default numberFormat;