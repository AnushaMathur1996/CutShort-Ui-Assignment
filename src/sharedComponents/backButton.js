import { Dimensions, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import BACK_ARROW from "../assets/svg/back_arrow.svg"
import { COLORS } from "../sharedStyles/colors";
import React from "react";
import { SearchBar } from "react-native-screens";
import { TextInput } from "react-native-gesture-handler";
import { fontStyle } from "../sharedStyles/typography";

const BackButton = ({ onPress, showSearch }) => {

    const renderTitle = () => {
        return (
            <View>
                <Text style={styles.title}>New Request</Text>
                <Text style={{}}></Text>
            </View>
        )
    }

    const rendersearch = () => {
        return (
            <View>
                <View style={styles.searchContainer}>
                    <TextInput onChangeText={(text) => console.log(text)} style={styles.searchText} />
                </View>
            </View>
        )
    }

    return (
        <View style={[styles.container, { justifyContent: !showSearch ? 'space-between' : null }]}>
            <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", position: !showSearch ? 'absolute' : null }}>
                <BACK_ARROW />
                <Text style={styles.back}>Back</Text>
            </TouchableOpacity>
            {showSearch ? rendersearch() : renderTitle()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: scale(16),
        position: 'relative',
        width: Dimensions.get('screen').width,
        marginTop: verticalScale(16)
    },
    back: {
        color: COLORS.WHITE700,
        fontFamily: fontStyle.ROBOTO_REGULAR,
        fontSize: scale(12),
        lineHeight: verticalScale(24),
        marginHorizontal: scale(4),
    },
    title: {
        fontSize: scale(18),
        lineHeight: verticalScale(26),
        fontFamily: fontStyle.ROBOTO_MEDIUM,
        color: COLORS.WHITE700,
        textAlign: 'center',
        width: Dimensions.get('screen').width,
        marginTop: verticalScale(16)
    },
    searchText: {
        paddingHorizontal: scale(8),
        fontSize: scale(14),
        lineHeight: verticalScale(24),
        color: COLORS.WHITE,
        fontFamily: fontStyle.ROBOTO_REGULAR
    },
    searchContainer: {
        width: scale(250),
        height: verticalScale(48),
        borderColor: COLORS.GREEN,
        borderRadius: 8,
        borderWidth: 1,
        marginHorizontal: scale(16),
        justifyContent: "center",
    }
})

export { BackButton }