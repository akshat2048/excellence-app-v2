import React, { Component } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

export default class ProfileScreen extends Component {
    fakeState = {
        periods : [{
            name: "Mr. Teacher Teacher",
            date: "02/15/2021"
        }, {
            name: "Mr. Teacher Teacher",
            date: "02/15/2021"
        }, {
            name: "Mr. Teacher Teacher",
            date: "02/15/2021"
        }]
    }

    render() {
        return (
            <View style={styles.outerView}>
                <View style={styles.profileView}>
                    <Image style={styles.profile}></Image>
                </View>
                <View style={styles.nameAndGradeView}>
                    <Text style={styles.nameText}>Jane</Text>
                    <Text style={styles.gradeText}>Grade: 10</Text>
                </View>
                <View style={styles.settingsButtonView}>
                    <TouchableOpacity style={styles.settingsButton}>
                        <Text style={styles.settingsText}> Settings </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.previouslyScheduledView}>
                        <Text style={styles.previouslyText}>Previously Scheduled Periods</Text>
                        {this.fakeState.periods.map((item, index) => (
                            <View style={styles.previouslyScheduledBlock}>
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.teacherName}>{item.name}</Text>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <ScrollView>
                    <View style={styles.futureScheduledView}>
                        <Text style={styles.previouslyText}>Future Scheduled Sessions</Text>
                        {this.fakeState.periods.map((item, index) => (
                            <View style={styles.futureScheduledBlock}>
                                <Text style={styles.date}>{item.date}</Text>
                                <Text style={styles.teacherName}>{item.name}</Text>
                                <View style={styles.buttonsView}>
                                    <TouchableOpacity style={styles.viewButton}>
                                        <Text style={styles.viewButtonText}> View </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.cancelButton}>
                                        <Text style={styles.viewButtonText}> Cancel </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    outerView: {
        flexDirection: 'column'
    },

    /**
     * Profile View
     */
    profileView: {
        justifyContent: 'center',
        height: ((Dimensions.get('window').height) * (128/812)),
        backgroundColor: '#FFFFFF',
        marginTop: ((Dimensions.get('window').height) * (76/812)),
    },
    profile: {
        height: ((Dimensions.get('window').height) * (128/812)),
        width: ((Dimensions.get('window').height) * (128/812)),
        borderRadius: (0.5 * ((Dimensions.get('window').height) * (128/812))),
        backgroundColor: '#000000',
        marginRight: (0.5) * ( (Dimensions.get('window').width) - (((Dimensions.get('window').height) * (128/812)))),
        marginLeft: (0.5) * ( (Dimensions.get('window').width) - (((Dimensions.get('window').height) * (128/812))))
    },

    /**
     * Name and Grade
     */
    nameAndGradeView: {
        justifyContent: 'center',
        height: ((Dimensions.get('window').height) * (71/812)),
        backgroundColor: '#FFFFFF',
        marginTop: ((Dimensions.get('window').height) * (32/812))
    },
    nameText: {
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'center',
        fontSize: 36,
        fontFamily: 'IBM Plex Sans',
        fontWeight: 'bold',
        color: '#000000'
    },
    gradeText: {
        marginLeft: 0,
        marginRight: 0,
        marginTop: ((Dimensions.get('window').height) * (16/812)),
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'IBM Plex Sans',
        fontWeight: 'bold',
        color: '#000000'
    },

    /**
     * Settings Button
     */

    settingsButtonView: {
        height: ((Dimensions.get('window').height) * (52/812)),
        marginTop: ((Dimensions.get('window').height) * (32/812)),
        marginLeft: ((Dimensions.get('window').height) * (16/812)),
        marginRight: ((Dimensions.get('window').height) * (16/812)),
        width: ((Dimensions.get('window').width) - ((Dimensions.get('window').height) * (32/812)))
    },
    settingsButton: {
        height: ((Dimensions.get('window').height) * (52/812)),
        backgroundColor: '#000000',
        borderRadius: ((0.5) * ((Dimensions.get('window').width) - ((Dimensions.get('window').height) * (32/812)))),
        justifyContent: 'center'
    },
    settingsText: {
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'center',
        fontSize: ((Dimensions.get('window').height) * (15/812)),
        fontFamily: 'IBM Plex Sans',
        fontWeight: 'bold',
        color: '#FFFFFF'
    },

    /**
     * Previously scheduled sessions
     */
    previouslyScheduledView: {
        justifyContent: 'center',
       // height: ((Dimensions.get('window').height) * (71/812)),
        backgroundColor: '#FFFFFF',
        marginTop: ((Dimensions.get('window').height) * (9/812)),
        marginLeft: ((Dimensions.get('window').height) * (16/812)),
        marginRight: ((Dimensions.get('window').height) * (16/812)),
        width: ((Dimensions.get('window').width) - ((Dimensions.get('window').height) * (32/812)))
    },

    previouslyScheduledBlock: {
        height: ((Dimensions.get('window').height) * (52/812)),
        backgroundColor: '#000000',
        borderRadius: ((Dimensions.get('window').height) * (5/812)),
        justifyContent: 'center',
        marginTop: ((Dimensions.get('window').height) * (6/812))
    },

    teacherName: {
        color: '#FFFFFF',
        fontSize: ((Dimensions.get('window').height) * (21/812)),
        paddingLeft: ((Dimensions.get('window').height) * (12/812)),
        fontWeight: 'bold'
    },

    date: {
        color: '#FFFFFF',
        fontSize: ((Dimensions.get('window').height) * (13/812)) ,
        paddingLeft: ((Dimensions.get('window').height) * (12/812))  
    },

    previouslyText: {
        fontWeight: 'bold'
    },

     /**
     * Future sessions
     */
    futureScheduledView: {
        justifyContent: 'center',
        // height: ((Dimensions.get('window').height) * (71/812)),
         backgroundColor: '#FFFFFF',
         marginTop: ((Dimensions.get('window').height) * (9/812)),
         marginLeft: ((Dimensions.get('window').height) * (16/812)),
         marginRight: ((Dimensions.get('window').height) * (16/812)),
         width: ((Dimensions.get('window').width) - ((Dimensions.get('window').height) * (32/812)))
    },

    viewButton: {
        height: ((21/812) * Dimensions.get('window').height),
        backgroundColor: '#76A9FF',
        borderRadius: (((21/812) * Dimensions.get('window').height) * 0.5),
        justifyContent: 'center',
        marginLeft: ((12/812) * Dimensions.get('window').height),
        marginRight: ((6/812) * Dimensions.get('window').height),
        width: 0.5 * ((Dimensions.get('window').width) - ((Dimensions.get('window').height) * (64/812)))
    },

    cancelButton: {
        height: ((21/812) * Dimensions.get('window').height),
        backgroundColor: '#C8372D',
        borderRadius: (((21/812) * Dimensions.get('window').height) * 0.5),
        justifyContent: 'center',
        marginLeft: ((6/812) * Dimensions.get('window').height),
        marginRight: ((12/812) * Dimensions.get('window').height),
        width: 0.5 * ((Dimensions.get('window').width) - ((Dimensions.get('window').height) * (64/812)))
    },

    viewButtonText: {
        marginLeft: ((12/812) * Dimensions.get('window').height),
       marginRight: ((12/812) * Dimensions.get('window').height),
       textAlign: 'center',
       fontSize: ((12/812) * Dimensions.get('window').height),
       fontFamily: 'IBM Plex Sans',
       fontWeight: 'bold',
       color: '#FFFFFF'
    },

    buttonsView: {
        flexDirection: 'row',
        height: ((21/812) * Dimensions.get('window').height),
        //backgroundColor: '#FFFFFF',
        marginTop: 12,
        //justifyContent: 'space-evenly'
    },

    futureScheduledBlock: {
        height: ((Dimensions.get('window').height) * (93/812)),
        backgroundColor: '#000000',
        borderRadius: ((Dimensions.get('window').height) * (5/812)),
        justifyContent: 'center',
        marginTop: ((Dimensions.get('window').height) * (6/812))
    }
})