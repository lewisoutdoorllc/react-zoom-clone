import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function StartMeeting({ name, roomId, setRoomId, setName }) {
    return (
        <View>
            <View style={styles.startMeetingsContainer}>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput}
                        value={name}
                        placeholder='Enter Name'
                        placeholderTextColor='#9b9b9b'
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.info}>
                    <TextInput
                        style={styles.textInput} size={20}
                        value={roomId}
                        placeholder='Enter A Room ID'
                        placeholderTextColor='#9b9b9b'
                        onChangeText={text => setRoomId(text)}
                    />
                </View>
                {/* Button */}
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.startMeetingBtn}
                        onPress={() => { }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: '1px' }}>
                            Start Meeting
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        backgroundColor: '#545454',
        width: '100%',
        height: 50,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#686868',
        padding: 12,
        // justifyContent: 'center',
    },
    textInput: {
        // backgroundColor: 'green',
        color: 'white',
        // fontSize: '20',
    },
    startMeetingBtn: {
        width: '80%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        height: 50,
        borderRadius: 15,
    },
})

