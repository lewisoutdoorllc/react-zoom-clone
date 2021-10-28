import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import Navigation from '../Navigation';

const items = [
    {
        id: 1,
        name: "video-camera",
        title: "New Meeting",
        customColor: "green",
    },
    {
        id: 2,
        name: "plus-square",
        title: "Join Meeting",
    },
    {
        id: 3,
        name: "calendar",
        title: "Schedule",
    },
    {
        id: 4,
        name: "upload",
        title: "Share Screen",
    },
]

export default function MenuButtons({navigation}) {

const openMeeting = () => {
    navigation.navigate('Room')
}

    return (
        <View style={styles.container}>
            {/* FIRST BUTTON */}
            {items.map((item, index) =>
                <View
                    key={index}
                    style={styles.buttonsContainer}>
                    <TouchableOpacity
                        onPress={() => openMeeting()}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: item.customColor ? item.customColor : "#2b5fd8"
                        }}>
                        <FontAwesome
                            name={item.name}
                            size={23}
                            color={'red'} />
                    </TouchableOpacity>
                    <Text
                        style={styles.menuText}>{item.title}</Text>
                </View>
            )}

            {/* SECOND BUTTON */}
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    buttonsContainer: {
        flex: 1,
        alignItems: 'center',
    },
    // button: {
    //     width: 50,
    //     height: 50,
    //     borderRadius: 15,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    menuText: {
        color: 'green',
        fontSize: 12,
        paddingTop: 10,
        fontWeight: '700',
    },
})