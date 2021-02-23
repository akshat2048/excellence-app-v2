import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'

export default class DetailsScreen extends Component {
    render() {
        return (
            <View>
                <View style={styles.outerView}>
                    <View style={styles.dateView}>
                        <Text style={styles.date}>Monday, Jan 12</Text>
                        <TouchableOpacity style={styles.xbutton}></TouchableOpacity>
                    </View>
                    <View style={styles.teacherNameView}>
                        <Text style={styles.teacherName}>Mr. Teacher Teacher</Text>
                    </View>
                    <View style={styles.reasonTextView}>
                        <Text style={styles.reasonText}>REASON</Text>
                    </View>
                    <View style={styles.buttonsView}>
                        <TouchableOpacity style={styles.urgentButton}>
                            <Text style={styles.urgentAndRegularButtonText}>Urgent</Text>
                        </TouchableOpacity>
                        <View style={styles.regularButtonView}>
                            <TouchableOpacity style={styles.regularButton}>
                                <Text style={styles.urgentAndRegularButtonText}>Regular</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.reasonView}>
                        <TextInput style={styles.textInput}></TextInput>
                    </View>
                    <View style={styles.scheduleView}>
                        <TouchableOpacity style={styles.scheduleButton}>
                            <Text style={styles.scheduleText}> Schedule </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    /*
    Text at the top
    */
    outerView: {
        backgroundColor: '#17151C',
        height: (0.85 * Dimensions.get('window').height),
        marginLeft: 24,
        marginRight: 24,
        marginTop: (0.125 * Dimensions.get('window').height),
        marginBottom: (0.125 * Dimensions.get('window').height),
        borderRadius: 10,
        flexDirection: 'column'
    },
    dateView: {
        flexDirection: 'row',
        height: ((32/456) * Dimensions.get('window').height),
        justifyContent: 'space-between'
    },
    date: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#EEECF1',
        fontSize: ((20/456) * Dimensions.get('window').height),
        marginTop: 24,
        marginLeft: 24
    },
    xbutton: {
        height: ((32/456) * Dimensions.get('window').height),
        width: ((32/456) * Dimensions.get('window').height),
        color: '#787885',
        backgroundColor: '#787885',
        marginRight: 16,
        marginTop: 25,
        // marginLeft: ((Dimensions.get('window').width - 24 - 24) * ())
    },
    teacherName: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#EEECF1',
        fontSize: ((23/456) * Dimensions.get('window').height),
        marginTop: 24,
        marginLeft: 24
    },
    teacherNameView: {
        flexDirection: 'row',
        height: ((32/456) * Dimensions.get('window').height),
        justifyContent: 'space-between'
    },
    reasonText: {
        fontFamily: 'IBM Plex Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#EEECF1',
        fontSize: ((10/456) * Dimensions.get('window').height),
        marginTop: 24,
        marginLeft: 24
    },
    reasonTextView: {
        flexDirection: 'row',
        height: ((16/456) * Dimensions.get('window').height),
        justifyContent: 'space-between'
    },

    /*
    Buttons
    */
   buttonsView: {
        flexDirection: 'column',
        height: ((88/456) * Dimensions.get('window').height),
        marginLeft: 23,
        marginTop: 12,
        marginRight: 23,
        paddingTop: 12,
   },
   urgentButton: {
        height: ((40/456) * Dimensions.get('window').height),
        backgroundColor: '#C8372D',
        borderRadius: (((40/456) * Dimensions.get('window').height) * 0.5),
        justifyContent: 'center'
   },
   regularButton: {
        height: ((40/456) * Dimensions.get('window').height),
        backgroundColor: '#37833B',
        borderRadius: (((40/456) * Dimensions.get('window').height) * 0.5),
        justifyContent: 'center',
   },
   urgentAndRegularButtonText: {
       marginLeft: 0,
       marginRight: 0,
       textAlign: 'center',
       fontSize: 24,
       fontFamily: 'IBM Plex Sans',
       fontWeight: 'bold',
       color: '#FFFFFF'
   },
   regularButtonView: {
       paddingTop: 12
   },

   /*
   Reason Section
   */

   reasonView: {
        flexDirection: 'column',
        height: ((137/456) * Dimensions.get('window').height),
        marginLeft: 23,
        marginTop: 12,
        marginRight: 23,
        paddingTop: 12
   },
   textInput: {
        height: ((137/456) * Dimensions.get('window').height),
        backgroundColor: '#2A2731',
        borderRadius: ((10/137)*((137/456) * Dimensions.get('window').height)),
        fontSize: 24,
        fontFamily: 'IBM Plex Sans',
        color: '#EEECF1',
        justifyContent: 'flex-start',
        zIndex: 1,
        borderWidth: 1,
        borderColor: '#76A9FF'
   },

   /*
   Schedule Button
   */

   scheduleView: {
        height: ((56/456) * Dimensions.get('window').height),
        marginLeft: 23,
        marginRight: 23,
        marginTop: 12
   },
   scheduleButton: {
        backgroundColor: '#76A9FF',
        height: ((55/456) * Dimensions.get('window').height),
        borderRadius: (((20/456) * Dimensions.get('window').height) * 0.5),
        justifyContent: 'center'
   },
   scheduleText: {
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'center',
        fontSize: ((24/456) * Dimensions.get('window').height),
        fontFamily: 'IBM Plex Sans',
        fontWeight: 'bold',
        color: '#000000'
   }
})