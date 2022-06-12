import { scale, verticalScale } from 'react-native-size-matters'

import { COLORS } from '../../sharedStyles/colors'
import { StyleSheet } from 'react-native'
import { fontStyle } from '../../sharedStyles/typography'

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BACKGROUND_COLOR,
        flex: 1
    },
    imageBg: {
        width: scale(200),
        height: verticalScale(200),
        alignSelf: "center",
        position: 'relative',
        alignItems: "center",
        justifyContent: "center"
    },
    img: {
        width: scale(100),
        height: verticalScale(100),
    },
    userName: {
        fontSize: scale(24),
        lineHeight: verticalScale(32),
        fontFamily: fontStyle.ROBOTO_MEDIUM,
        color: COLORS.WHITE500,
        textAlign: 'center',
        marginTop: verticalScale(18)
    },
    reqText: {
        fontSize: scale(14),
        lineHeight: verticalScale(21),
        fontFamily: fontStyle.ROBOTO_REGULAR,
        color: COLORS.WHITE500,
        textAlign: 'center',
        marginTop: verticalScale(16)
    },
    balance: {
        fontSize: scale(40),
        lineHeight: verticalScale(48),
        fontFamily: fontStyle.ROBOTO_BOLD,
        letterSpacing: 0.3,
        color: COLORS.OFF_WHITE,
        marginHorizontal: scale(8)
    },
    amountContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: scale(16),
        marginVertical: verticalScale(24),
        alignSelf: "center"
    },
    cta: {
        width: scale(170),
        height: verticalScale(60),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.LAVENDER,
        justifyContent: "center",
        alignItems: "center",
        marginTop: verticalScale(16)
    },
    ctaText: {
        fontFamily: fontStyle.ROBOTO_MEDIUM,
        color: COLORS.LAVENDER,
        fontSize: scale(16),
        lineHeight: verticalScale(28),
        textAlign: "center"
    },
})

export { styles }