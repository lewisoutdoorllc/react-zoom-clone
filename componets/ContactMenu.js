import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const contactMenuButtons = [
    {
        type: 'starred',
        name: 'Starred',
    },
    {
        type: 'contact',
        name: 'Anthony T.',
        photo: require('../assets/misPng.png'),
    },
    {
        type: 'contact',
        name: 'Cody L.',
        photo: require('../assets/misPng.png'),
    },
    {
        type: 'contact',
        name: 'Brooke B',
        photo: require('../assets/misPng.png')
    },
]

function ContactMenu() {
    return (
        // container
        <View style={styles.container}>
            {contactMenuButtons.map((contact, index) =>
                <View
                    key={index}
                    style={styles.row}>
                    {/* icon section */}
                    {
                        contact.type === 'starred' ? (
                            <View style={styles.starredIcon}>
                                <AntDesign name="star" size={30} color="#b7b7b7" />
                            </View> ) : 
                            (
                                <Image source={contact.photo} style={styles.image} />
                            )
                    }
                    {/*  text area */}
                    <Text style={styles.text}>
                        {contact.name}
                    </Text>
                </View>
            )}
        </View>
    )
}

export default ContactMenu

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    starredIcon: {
        backgroundColor: '#4f4f4f',
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    text: {
        color: '#858585',
        padding: 15,
        fontSize: 18,
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 15,
        backgroundColor: '#4f4f4f',
    }
})
