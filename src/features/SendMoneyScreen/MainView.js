import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

import { BackButton } from "../../sharedComponents/backButton";
import { COLORS } from "../../sharedStyles/colors";
import CURRENCY_WHITE from '../../assets/svg/currency_white.svg'
import { ImageAssets } from "../../sharedStyles/assets";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

const SendMoneyScreen = ({ route, navigation }) => {
    const { name, image } = route.params

    const renderProfilePicture = () => {
        return (
            <ImageBackground style={styles.imageBg} source={ImageAssets.PROFILE_PICTURE_BACKGROUND}>
                <Image source={image} style={styles.img} />
            </ImageBackground>
        )
    }

    const renderAmount = () => {
        return (
            <View style={styles.amountContainer}>
                <CURRENCY_WHITE />
                <Text style={styles.balance}>200,000</Text>
            </View>
        )
    }

    const renderCta = () => {
        return (
            <View style={{ alignItems: "center" }}>
                <View style={[styles.cta, { backgroundColor: COLORS.PINK }]}>
                    <Text style={[styles.ctaText, { color: COLORS.WHITE }]}>Send money</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.cta, { marginBottom: verticalScale(24) }]}>
                    <Text style={styles.ctaText}>Don't Send</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <BackButton onPress={() => navigation.goBack()} showSearch={false} />
            <ScrollView>
                <View style={{ marginTop: verticalScale(50) }}>
                    {renderProfilePicture()}
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.reqText}>is requesting for:</Text>
                    {renderAmount()}
                    {renderCta()}
                </View>
            </ScrollView>
        </View>
    )
}

export { SendMoneyScreen }