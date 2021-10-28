import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function MeetingRoom() {

    const [name, setName] = useState()

    return (
        <View style={styles.container}>
            <View style={styles.startMeetingsContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.info}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1c1c1c',
        flex: 1,

    },
    startMeetingsContainer: {

    },
    info: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'orange',
        padding: 12,
    },
})
