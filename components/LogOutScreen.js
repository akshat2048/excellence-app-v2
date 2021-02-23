import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'

export default class LogOutScreen extends Component {
    render() {
        return(
            <View>
                <Image style={styles.image}></Image>
                <View style={styles.loginButtonView}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginText}> Login </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        height: ((707/812) * (Dimensions.get('window').height)),
        backgroundColor: '#000000'
    },
    /**
     * Login Button
     */
    loginButtonView: {
        height: ((Dimensions.get('window').height) * (52/812)),
        marginTop: ((Dimensions.get('window').height) * (32/812)),
        marginLeft: ((Dimensions.get('window').height) * (16/812)),
        marginRight: ((Dimensions.get('window').height) * (16/812)),
        width: ((Dimensions.get('window').width) - ((Dimensions.get('window').height) * (32/812)))
    },
    loginButton: {
        height: ((Dimensions.get('window').height) * (52/812)),
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'black'
    },
    loginText: {
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'center',
        fontSize: ((Dimensions.get('window').height) * (15/812)),
        fontFamily: 'IBM Plex Sans',
        fontWeight: 'bold',
        color: '#000000'
    }
})