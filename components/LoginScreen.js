import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.outerView}>
                <View style={styles.loginTextView}>
                    <Text style={styles.loginText}>Login</Text>
                    <View style={styles.usernameAndPasswordView}>
                        <TextInput style={styles.usernameTextInput} placeholder="Username"></TextInput>
                        <TextInput style={styles.passwordTextInput} placeholder="Password"></TextInput>
                    </View>
                    <View style={styles.loginButtonView}>
                        <TouchableOpacity style={styles.loginButton}>
                            <Text style={styles.loginText}> Login </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /**
     * Login Text
     */
    outerView: {
        flexDirection: 'column'
    },
    loginTextView: {
       // height: ((Dimensions.get('window').height) * (40/812)),
        justifyContent: 'flex-start'
    },
    loginText: {
        marginLeft: ((Dimensions.get('window').height) * (16/812)),
        marginTop: ((Dimensions.get('window').height) * (104/812)),
        textAlign: 'left',
        fontSize: 36,
        fontFamily: 'IBM Plex Sans',
        fontWeight: 'bold',
        color: '#000000'
    },

    /**
     * username and password fields
     */
    usernameAndPasswordView: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: ((Dimensions.get('window').height) * ((52+16+52)/812)),
        marginTop: ((Dimensions.get('window').height) * (32/812)),
        marginLeft: ((Dimensions.get('window').height) * (16/812)),
        marginRight: ((Dimensions.get('window').height) * (16/812)),
        //backgroundColor: '#000000'
    },
    usernameTextInput: {
        height: ((Dimensions.get('window').height) * (52/812)),
        fontSize: ((Dimensions.get('window').height) * (18/812)),
        borderWidth: 2,
        borderColor: '#000000',
        fontFamily: 'Roboto'
    },
    passwordTextInput: {
        marginTop: ((Dimensions.get('window').height) * (16/812)),
        height: ((Dimensions.get('window').height) * (52/812)),
        fontSize: ((Dimensions.get('window').height) * (18/812)),
        borderWidth: 2,
        borderColor: '#000000',
        fontFamily: 'Roboto'
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
        backgroundColor: '#000000',
        borderRadius: 2,
        justifyContent: 'center'
    },
    loginText: {
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'center',
        fontSize: ((Dimensions.get('window').height) * (15/812)),
        fontFamily: 'IBM Plex Sans',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
})