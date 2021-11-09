import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import StartMeeting from '../componets/StartMeeting'
import { io } from "socket.io-client"
// import {withSocket} from 'react-socket-io-client'

// This creates the socket connection
let socket;

export default function MeetingRoom() {
    const [name, setName] = useState()
    const [roomId, setRoomId] = useState()

    useEffect(() => {
            console.log('19006 connected')
        const API_URL = 'http://localhost:19006'
        socket = io(`${API_URL}`);
        socket.on('connection', () => {
            console.log('19006 connected')
        })
    }, [])

    return (
        <View style={styles.container}>
            {/* New Meeting Input Fields */}
            <StartMeeting
                name={name}
                setName={setName}
                roomId={roomId}
                setRoomId={setRoomId}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3a3a3a',
        flex: 1,
    },
    startMeetingsContainer: {
        // backgroundColor: '#ea1e32'
    },
});
