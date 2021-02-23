import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Calendar } from 'react-native-calendars'

export default class CalendarSchedulerScreen extends Component {
    render() {
        return(
            <View>
                <Calendar style={styles.calendar} theme={
                    {
                        calendarBackground: '#000000',
                        dayTextColor: 'white'
                    }
                }/>
            </View>
        )
    }

    onDayPress(day) {

    }
}

const styles = StyleSheet.create({
    
    month: {
        color: '#FFFFFF'
    }
})