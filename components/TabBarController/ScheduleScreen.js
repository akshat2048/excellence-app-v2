import React, { Component } from 'react'
import { View, Text } from 'react-native'

import DetailsScreen from './ScheduleScreen/DetailsScreen'
import CalendarSchedulerScreen from './ScheduleScreen/CalendarSchedulerScreen'

export default class ScheduleScreen extends Component {
    render() {
        return (
            <View>
                <CalendarSchedulerScreen />
            </View>
        )
    }
}