import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ProfileScreen from './TabBarController/ProfileScreen'
import LoginScreen from './LoginScreen'
import ScheduleScreen from './TabBarController/ScheduleScreen'
import LogOutScreen from './LogOutScreen'

export default class MainScreen extends Component {
    render() {
        return (
            <View>
                <ScheduleScreen />
            </View>
        )
    }
}