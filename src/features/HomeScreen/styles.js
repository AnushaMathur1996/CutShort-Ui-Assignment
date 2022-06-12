import { scale, verticalScale } from 'react-native-size-matters'

import { COLORS } from '../../sharedStyles/colors'
import { StyleSheet } from 'react-native'
import { fontStyle } from '../../sharedStyles/typography'

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BACKGROUND_COLOR,
        flex: 1
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: scale(16),
        marginTop: verticalScale(24)
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        fontSize: scale(20),
        lineHeight: verticalScale(24),
        fontFamily: fontStyle.ROBOTO_BOLD,
        letterSpacing: 0.3,
        color: COLORS.WHITE,
        marginHorizontal: scale(16),
    },
    addMoneyContainer: {
        width: scale(92),
        height: verticalScale(32),
        backgroundColor: COLORS.BLUE500,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    addMoney: {
        fontSize: scale(14),
        lineHeight: verticalScale(18),
        fontFamily: fontStyle.ROBOTO_REGULAR,
        letterSpacing: 0.3,
        color: COLORS.BLUE_200,
    },
    balHeading: {
        fontSize: scale(12),
        lineHeight: verticalScale(16),
        fontFamily: fontStyle.ROBOTO_REGULAR,
        letterSpacing: 0.3,
        color: COLORS.OFF_WHITE,
        marginTop: verticalScale(48),
        marginHorizontal: scale(16)
    },
    balance: {
        fontSize: scale(40),
        lineHeight: verticalScale(48),
        fontFamily: fontStyle.ROBOTO_BOLD,
        letterSpacing: 0.3,
        color: COLORS.OFF_WHITE,
        marginHorizontal: scale(8)
    },
    ctaContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: scale(16),
        marginTop: verticalScale(32)
    },
    cta: {
        width: scale(150),
        height: verticalScale(60),
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.LAVENDER,
        justifyContent: "center",
        alignItems: "center",
    },
    ctaText: {
        fontFamily: fontStyle.ROBOTO_REGULAR,
        color: COLORS.LAVENDER,
        fontSize: scale(16),
        lineHeight: verticalScale(20),
        textAlign: "center"
    },
    allTxn: {
        fontFamily: fontStyle.ROBOTO_MEDIUM,
        color: COLORS.WHITE,
        fontSize: scale(16),
        lineHeight: verticalScale(20),
        marginTop: verticalScale(16)
    },
    sortText: {
        fontFamily: fontStyle.ROBOTO_REGULAR,
        color: COLORS.WHITE,
        fontSize: scale(14),
        lineHeight: verticalScale(18),
    },
    username: {
        fontFamily: fontStyle.ROBOTO_BOLD,
        color: COLORS.LAVENDER300,
        fontSize: scale(16),
        lineHeight: verticalScale(20),
        marginHorizontal: scale(16),
        textAlign: 'left'
    },
    amount: {
        fontFamily: fontStyle.ROBOTO_BOLD,
        fontSize: scale(16),
        lineHeight: verticalScale(20),
        marginHorizontal: scale(4)
    },
    statusIconContainer: {
        width: scale(16),
        height: verticalScale(16),
        borderRadius: 16,
        backgroundColor: COLORS.WHITE,
        justifyContent: "center",
        alignItems: "center"
    },
    statusText: {
        color: COLORS.WHITE,
        fontFamily: fontStyle.ROBOTO_REGULAR,
        fontSize: scale(12),
        lineHeight: verticalScale(16),
        marginHorizontal: scale(4)
    },
    statusContainer: {
        maxWidth: scale(90),
        flexShrink: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: verticalScale(28),
        borderRadius: 20,
        marginHorizontal: scale(16)
    }
})

export { styles }