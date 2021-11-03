import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import ContactMenu from '../componets/ContactMenu'
import Header from '../componets/Header'
import MenuButtons from '../componets/MenuButtons'
import SearchBar from '../componets/SearchBar'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%' }}>
                <Header />
                <SearchBar />
                <MenuButtons navigation={navigation} />
                <ContactMenu />
                <>
                    <div>
                        <h1 style={{color:'white'}}>Home</h1>
                    </div>
                </>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15,
        height: "100vh",
    }
})