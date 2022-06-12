import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { BackButton } from "../../sharedComponents/backButton";
import { ImageAssets } from "../../sharedStyles/assets";
import RBSheet from "react-native-raw-bottom-sheet";
import { bottomSheetStyles } from '../../sharedStyles/typography';
import { styles } from './styles'
import { useRef } from 'react';
import { verticalScale } from 'react-native-size-matters';

const SearchFriend = ({ navigation }) => {
    const renderDetails = [{
        name: "Aduni Wale",
        phoneNo: "(+234) 905 1694 275",
        image: ImageAssets.DUMMY1
    },
    {
        name: "Adolph colleague",
        phoneNo: "(+234) 904 9746 275",
        image: ImageAssets.DUMMY2
    },
    {
        name: "Adedoyin Leke",
        phoneNo: "(+234) 909 1454 097",
        image: ImageAssets.DUMMY4
    },
    {
        name: "Adedoyin Leke",
        phoneNo: "(+234) 905 1694 275",
        image: ImageAssets.DUMMY4
    },
    {
        name: "Adelaide Uti (son)",
        phoneNo: "(+234) 905 1694 275",
        image: ImageAssets.PROFILE_PICTURE
    }]

    const refRbSheet = useRef()
    const [selectedItem, setItem] = useState(0)
    const [details, setUserDetails] = useState(null)

    const saveDetails = (object) => {
        setUserDetails(object)
        refRbSheet.current.open()
    }

    const navigateUser = () => {
        navigation.navigate("SendMoney", { name: details.name, image: details.image })
        refRbSheet.current.close()
    }

    const renderBSContent = () => {
        return (
            <View>
                <Image source={details?.image ? details.image : ImageAssets.PROFILE_PICTURE} style={styles.imageUser} />
                <Text style={styles.userName}>{details?.name && details.name}</Text>
                <Text style={styles.phoneNo}>{details?.phoneNo && details.phoneNo}</Text>
                <TouchableOpacity onPress={() => navigateUser()} style={styles.cta}>
                    <Text style={styles.ctaText}>Continue</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderElipse = () => {
        return (
            <View style={styles.ellipse1}>
                <TouchableOpacity style={{ zIndex: 9999 }} onPress={() => saveDetails(renderDetails[0])}>
                    <Image style={[styles.usePic, { top: -16, }]} source={ImageAssets.DUMMY1} />
                </TouchableOpacity>

                <View style={styles.ellipse2}>
                    <View style={styles.ellipse3}>
                        <TouchableOpacity style={{ zIndex: 9999 }} onPress={() => saveDetails(renderDetails[1])}>
                            <Image style={[styles.usePic, { left: 170, top: 48 }]} source={ImageAssets.DUMMY2} />
                        </TouchableOpacity>
                    </View>
                    <Image style={[styles.usePic, { left: 0, zIndex: 9999 }]} source={ImageAssets.DUMMY3} />

                    <TouchableOpacity onPress={() => saveDetails(renderDetails[3])}>
                        <Image style={[styles.usePic, { bottom: 180, right: 100, zIndex: 9999 }]} source={ImageAssets.DUMMY4} />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity style={{ zIndex: 999, bottom: 32 }} onPress={() => saveDetails(renderDetails[4])}>
                    <Image style={[styles.usePic, { zIndex: 9999 }]} source={ImageAssets.PROFILE_PICTURE} />
                </TouchableOpacity>
            </View >
        )
    }

    return (
        <View style={styles.container}>
            <BackButton showSearch={true} onPress={() => navigation.goBack()} />
            <ScrollView>
                {renderElipse()}

            </ScrollView>
            <RBSheet
                ref={refRbSheet}
                height={verticalScale(330)}
                closeOnDragDown={true}
                closeOnPressMask={true}
                closeOnPressBack={true}
                customStyles={bottomSheetStyles}>
                {renderBSContent()}
            </RBSheet>
        </View>
    )
}

export { SearchFriend }