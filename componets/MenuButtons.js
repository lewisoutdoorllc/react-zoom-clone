import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function MenuButtons() {
    return (
        <View style={styles.container}>
            {/* FIRST BUTTON */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.firstButton}>
                    <FontAwesome name={'video-camera'} size={23} color={'red'} />
                </TouchableOpacity>
                <Text style={styles.menuText}>New Meeting</Text>
            </View>
            {/* SECOND BUTTON */}
        </View>
    )
}

export default MenuButtons

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: 'green',
        borderBottomWidth: 1,
    },
    buttonsContainer: {
        alignItems: 'center',
    },
    firstButton: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuText: {
        color: 'green',
        fontSize: 12,
        paddingTop: 10,
        fontWeight: '700',
    },
})