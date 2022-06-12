import { ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters';

import ARROW_DOWN from '../../assets/svg/arrow_down.svg'
import { COLORS } from '../../sharedStyles/colors';
import CURRENCY_GREEN from '../../assets/svg/currency_green.svg'
import CURRENCY_RED from '../../assets/svg/currency_red.svg'
import CURRENCY_WHITE from '../../assets/svg/currency_white.svg'
import CURRENCY_YELLOW from '../../assets/svg/currency_yellow.svg'
import FAILED_ICON from '../../assets/svg/failed_icon.svg'
import HAMBURGER from '../../assets/svg/hamburger.svg'
import PICTURE1 from '../../assets/svg/picture1.svg'
import PICTURE2 from '../../assets/svg/picture2.svg'
import PICTURE3 from '../../assets/svg/picture3.svg'
import PICTURE4 from '../../assets/svg/picture4.svg'
import RBSheet from "react-native-raw-bottom-sheet";
import RECEIVE_ICON from '../../assets/svg/receive_icon.svg'
import React from "react";
import SENT_ICON from '../../assets/svg/sent_icon.svg'
import { bottomSheetStyles } from '../../sharedStyles/typography';
import { styles } from './styles';
import { useEffect } from 'react';
import { useRef } from 'react';

const HomeScreen = ({ navigation }) => {
    const refRbSheet = useRef()
    const txnList = [{
        name: "Adeboye Usman",
        status: "Received",
        amount: "200,000",
        image: PICTURE1
    },
    {
        name: "Mercy Popoola",
        status: "Failed",
        amount: "110,000",
        image: PICTURE2
    },
    {
        name: "Onome Adetayo",
        status: "Sent",
        amount: "10,000",
        image: PICTURE3
    },
    {
        name: "Kingsley Abiodun",
        status: "Received",
        amount: "200,000",
        image: PICTURE4
    }]

    useEffect(() => {
        refRbSheet.current.open()
    })

    const getColor = (status) => {
        if (status === "Received") {
            return COLORS.GREEN
        }
        if (status === "Sent") {
            return COLORS.YELLOW
        }
        if (status === "Failed") {
            return COLORS.RED
        }
    }

    const getAmountIcon = (status) => {
        if (status === "Received") {
            return <CURRENCY_GREEN />
        }
        if (status === "Sent") {
            return <CURRENCY_YELLOW />
        }
        if (status === "Failed") {
            return <CURRENCY_RED />
        }
    }

    const getStatusIcon = (status) => {
        if (status === "Received") {
            return <RECEIVE_ICON />
        }
        if (status === "Sent") {
            return <SENT_ICON />
        }
        if (status === "Failed") {
            return <FAILED_ICON />
        }
    }

    const renderAddMoney = () => {
        return (
            <View style={styles.addMoneyContainer}>
                <Text style={styles.addMoney}>
                    Add Money
                </Text>
            </View>
        )
    }

    const renderBalance = () => {
        return (
            <View>
                <Text style={styles.balHeading}>Your current balance is</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: scale(16), marginTop: verticalScale(16) }}>
                    <CURRENCY_WHITE />
                    <Text style={styles.balance}>200,000</Text>
                </View>
            </View>
        )
    }

    const renderCTA = () => {
        return (
            <View style={styles.ctaContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("SearchFriend")} style={styles.cta}>
                    <Text style={styles.ctaText}>Request money</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SearchFriend")} style={styles.cta}>
                    <Text style={styles.ctaText}>Send money</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const getAmount = (status, amount) => {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                {getAmountIcon(status)}
                <Text style={[styles.amount, { color: getColor(status) }]}>{amount}</Text>
            </View>
        )
    }

    const renderStatus = (status) => {
        return (
            <View style={[styles.statusContainer, { backgroundColor: getColor(status) }]}>
                <View style={styles.statusIconContainer}>
                    {getStatusIcon(status)}
                </View>
                <Text style={styles.statusText}>{status}</Text>
            </View>
        )
    }

    const renderItemList = (item) => {
        const { image: Picture, name, status, amount } = item
        return (
            <TouchableHighlight>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: verticalScale(16) }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Picture />
                        <View>
                            <Text style={styles.username}>{name}</Text>
                            {renderStatus(status)}
                        </View>
                    </View>
                    {getAmount(status, amount)}
                </View>
            </TouchableHighlight>
        )
    }

    const renderTransactions = () => {
        return (
            txnList.map((item) => {
                return renderItemList(item)
            })
        )
    }

    const renderList = () => {
        return (
            <ScrollView>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={styles.allTxn}>All Transactions</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center', marginTop: verticalScale(16) }}>
                        <Text style={[styles.sortText, { color: COLORS.LAVENDER, marginHorizontal: scale(8) }]}>Sort by:</Text>
                        <Text style={[styles.sortText, { color: COLORS.WHITE }]}>Recent</Text>
                        <ARROW_DOWN style={{ marginLeft: scale(8), }} />
                    </View>
                </View>

                {renderTransactions()}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => refRbSheet.current.open()} style={[styles.nameContainer]}>
                        <HAMBURGER />
                        <Text style={styles.name}>Hello Sandra,</Text>
                    </TouchableOpacity>
                    {renderAddMoney()}
                </View>
                {renderBalance()}
                {renderCTA()}
            </ScrollView>

            <RBSheet
                ref={refRbSheet}
                height={400}
                closeOnDragDown={false}
                closeOnPressMask={true}
                closeOnPressBack={false}
                customStyles={bottomSheetStyles}
            >
                {renderList()}
            </RBSheet>
        </View>
    )
}

export { HomeScreen }