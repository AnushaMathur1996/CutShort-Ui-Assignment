import { scale, verticalScale } from "react-native-size-matters"

import { COLORS } from "./colors"
import { StyleSheet } from "react-native"

const fontStyle = {
    ROBOTO_MEDIUM: 'Roboto-Medium',
    ROBOTO_REGULAR: 'Roboto-Regular',
    ROBOTO_LIGHT: 'Roboto-Light',
    ROBOTO_BOLD: 'Roboto-Bold',
}

const bottomSheetStyles = StyleSheet.create({
    container: {
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        padding: 16,
        backgroundColor: COLORS.DARK_BLUE
    },
    draggableIcon: {
        backgroundColor: COLORS.LAVENDER,
        width: scale(64),
        height: verticalScale(7)
    },
    wrapper: {
        backgroundColor: 'transparent',
    },
})

export { fontStyle, bottomSheetStyles }