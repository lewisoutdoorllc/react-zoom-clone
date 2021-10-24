import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

function ContactMenu() {
    return (
        <View style={styles.container}>
            <Fontisto name="search" size={20} color="#858585" />
            <Text style={styles.textSearchBar}>Search</Text>
        </View>
    )
}

export default ContactMenu

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3d3d3d",
        flexDirection: "row",
        paddingHorizontal: 10,
        height: 40,
        alignItems: "center",
        borderRadius: 10,
    },
    textSearchBar: {
        color: "#858585",
        paddingLeft: 10,
        fontSize: 20,
    },
})
