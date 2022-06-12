import { Dimensions, StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

import { COLORS } from '../../sharedStyles/colors'
import { fontStyle } from '../../sharedStyles/typography'

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.BACKGROUND_COLOR,
        flex: 1
    },
    imageUser: {
        width: scale(72),
        height: scale(72),
        alignSelf: "center",
        marginTop: verticalScale(32)
    },
    userName: {
        fontSize: scale(18),
        lineHeight: verticalScale(24),
        fontFamily: fontStyle.ROBOTO_MEDIUM,
        color: COLORS.WHITE,
        textAlign: 'center',
        marginTop: verticalScale(16)
    },
    phoneNo: {
        fontSize: scale(14),
        lineHeight: verticalScale(21),
        fontFamily: fontStyle.ROBOTO_REGULAR,
        color: COLORS.WHITE,
        textAlign: 'center',
        marginTop: verticalScale(16)
    },
    cta: {
        width: scale(170),
        height: verticalScale(60),
        borderRadius: 10,
        backgroundColor: COLORS.PINK,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: verticalScale(32)
    },
    ctaText: {
        fontFamily: fontStyle.ROBOTO_MEDIUM,
        color: COLORS.WHITE,
        fontSize: scale(16),
        lineHeight: verticalScale(28),
        textAlign: "center"
    },
    ellipse1: {
        width: Dimensions.get('screen').width,
        height: verticalScale(375),
        borderRadius: Dimensions.get('screen').width,
        borderWidth: 1,
        borderColor: '#0D164B',
        marginVertical: verticalScale(24),
        justifyContent: "center",
        alignItems: "center",
    },
    ellipse2: {
        width: scale(285),
        height: verticalScale(285),
        borderRadius: scale(285),
        borderWidth: 1,
        borderColor: '#0D164B',
        justifyContent: "center",
        alignItems: "center",
    },
    ellipse3: {
        width: scale(185),
        height: verticalScale(185),
        borderRadius: scale(185),
        borderWidth: 1,
        flexDirection: "row",
        borderColor: '#0D164B',
    },
    usePic: {
        width: scale(36),
        height: verticalScale(36),
        borderRadius: 36,
        borderWidth: 2,
        borderColor: COLORS.WHITE,
        position: 'absolute',
        alignSelf: "center",
    },
    selectedImage: {
        width: scale(72),
        height: verticalScale(72),
        borderRadius: 72,
        borderWidth: 1,
        borderColor: COLORS.GREEN,
    }
})

export { styles }