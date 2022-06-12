import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { COLORS } from "../../sharedStyles/colors";
import { ImageAssets } from "../../sharedStyles/assets";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { fontStyle } from "../../sharedStyles/typography"

const Intro = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            <View>
                <Image
                    source={ImageAssets.SPLASH_BG}
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                        position: 'relative'
                    }}
                />
                <View style={styles.bottomBox}>
                    <Text style={styles.heading}>Transfer That Is Safe</Text>
                    <Text style={styles.subheading}>You have nothing to be scared about, we got you covered.</Text>
                    <TouchableOpacity style={styles.cta} onPress={() => navigation.navigate("HomeScreen")}>
                        <Text style={styles.ctaText}>Start Banking</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    bottomBox: {
        height: verticalScale(224),
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('screen').width - 52,
        backgroundColor: COLORS.NAVY_BLUE,
        borderTopRightRadius: 70,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'black'
    },
    heading: {
        fontFamily: fontStyle.ROBOTO_BOLD,
        color: COLORS.WHITE,
        fontSize: scale(18),
        lineHeight: verticalScale(28),
        textAlign: "center"
    },
    subheading: {
        fontFamily: fontStyle.ROBOTO_REGULAR,
        color: COLORS.WHITE,
        fontSize: scale(16),
        lineHeight: verticalScale(24),
        textAlign: "center",
        marginHorizontal: scale(32),
        marginTop: verticalScale(8)
    },
    cta: {
        width: scale(140),
        height: verticalScale(50),
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS.WHITE,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: verticalScale(16)
    },
    ctaText: {
        fontFamily: fontStyle.ROBOTO_MEDIUM,
        color: COLORS.NAVY_BLUE,
        fontSize: scale(16),
        lineHeight: verticalScale(28),
        textAlign: "center"
    },
})

export { Intro };
