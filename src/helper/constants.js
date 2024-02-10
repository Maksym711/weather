import icon_200_201_202_day_oll from '../images/200-202d.png'
import icon_200_201_202_night_oll from '../images/200-202n.png'
import icon_230_231_232_233_day_oll from '../images/230-233d.png'
import icon_230_231_232_233_night_oll from '../images/230-233n.png'
import icon_300_301_302_oll from '../images/300-302.png'
import icon_500_501_511_900_oll_520_522_day from '../images/500,501,511,900,520d,522d.png'
import icon_520_521_522_night_oll from '../images/520-522n.png'
import icon_521_day from '../images/521d.png'
import icon_502_oll from '../images/502.png'
import icon_600_610_621_day_oll from '../images/600,610,621(d).png'
import icon_600_610_621_night_oll from '../images/600,610,621(n).png'
import icon_601_602_622_oll from '../images/601,602,622.png'
import icon_611_612_oll from '../images/611,612.png'
import icon_623_oll from '../images/623.png'
import icon_700_711_721_731_741_751_day_oll from '../images/700,711,721,731,741,751(d).png'
import icon_700_711_721_731_741_751_night_oll from '../images/700,711,721,731,741,751(n).png'
import icon_800_day from '../images/800d.png'
import icon_800_night from '../images/800n.png'
import icon_801_802_day from '../images/801,802(d).png'
import icon_801_802_night from '../images/801,802(n).png'
import icon_803_day from '../images/803d.png'
import icon_803_night from '../images/803n.png'
import icon_804_oll from '../images/804.png'

const mapCodesToImage = {
    't01d': icon_200_201_202_day_oll,
    't02d': icon_200_201_202_day_oll,
    't03d': icon_200_201_202_day_oll,
    't01n': icon_200_201_202_night_oll,
    't02n': icon_200_201_202_night_oll,
    't03n': icon_200_201_202_night_oll,
    't04d': icon_230_231_232_233_day_oll,
    't05d': icon_230_231_232_233_day_oll,
    't04n': icon_230_231_232_233_night_oll,
    't05n': icon_230_231_232_233_night_oll,
    'd01d': icon_300_301_302_oll,
    'd02d': icon_300_301_302_oll,
    'd03d': icon_300_301_302_oll,
    'd01n': icon_300_301_302_oll,
    'd02n': icon_300_301_302_oll,
    'd03n': icon_300_301_302_oll,
    'r01d': icon_500_501_511_900_oll_520_522_day,
    'r02d': icon_500_501_511_900_oll_520_522_day,
    'r01n': icon_500_501_511_900_oll_520_522_day,
    'r02n': icon_500_501_511_900_oll_520_522_day,
    'f01d': icon_500_501_511_900_oll_520_522_day,
    'f01n': icon_500_501_511_900_oll_520_522_day,
    'u00d': icon_500_501_511_900_oll_520_522_day,
    'u00n': icon_500_501_511_900_oll_520_522_day,
    'r04d': icon_500_501_511_900_oll_520_522_day,
    'r06d': icon_500_501_511_900_oll_520_522_day,
    'r04n': icon_520_521_522_night_oll,
    'r05n': icon_520_521_522_night_oll,
    'r06n': icon_520_521_522_night_oll,
    'r05d': icon_521_day,
    'r03d': icon_502_oll,
    'r03n': icon_502_oll,
    's01d': icon_600_610_621_day_oll,
    's04d': icon_600_610_621_day_oll,
    's01n': icon_600_610_621_night_oll,
    's04n': icon_600_610_621_night_oll,
    's02d': icon_601_602_622_oll,
    's03d': icon_601_602_622_oll,
    's02n': icon_601_602_622_oll,
    's03n': icon_601_602_622_oll,
    's05d': icon_611_612_oll,
    's05n': icon_611_612_oll,
    's06d': icon_623_oll,
    's06n': icon_623_oll,
    'a01d': icon_700_711_721_731_741_751_day_oll,
    'a02d': icon_700_711_721_731_741_751_day_oll,
    'a03d': icon_700_711_721_731_741_751_day_oll,
    'a04d': icon_700_711_721_731_741_751_day_oll,
    'a05d': icon_700_711_721_731_741_751_day_oll,
    'a06d': icon_700_711_721_731_741_751_day_oll,
    'a01n': icon_700_711_721_731_741_751_night_oll,
    'a02n': icon_700_711_721_731_741_751_night_oll,
    'a03n': icon_700_711_721_731_741_751_night_oll,
    'a04n': icon_700_711_721_731_741_751_night_oll,
    'a05n': icon_700_711_721_731_741_751_night_oll,
    'a06n': icon_700_711_721_731_741_751_night_oll,
    'c01d': icon_800_day,
    'c01n': icon_800_night,
    'c02d': icon_801_802_day,
    'c02n': icon_801_802_night,
    'c03d': icon_803_day,
    'c03n': icon_803_night,
    'c04d': icon_804_oll,
    'c04n': icon_804_oll
}

const BASE_URL = 'https://api.weatherbit.io/v2.0'
const API_KEY = 'c2d3c64087e54d018cae06444bf6a848'

export {mapCodesToImage, BASE_URL, API_KEY}