import React, { useState } from 'react'
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Forecast from './Forecast.js';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
    main: '-',
    description: '-',
    temp: 0
    })
    return ( 
        <View>
        <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
                <View style={styles.black_bar}>
                <Text style={styles.zip}>Zip Code is {props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            
            
            </View>
            </ImageBackground>
        </View>
    )}
    
       const styles = StyleSheet.create({
        backdrop: {
            
            flex: 1,
            width: 500,
            height: "100%",
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: "center",
        },
        black_bar: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            width: '100%',
            height: '50%',
            alignItems: 'center',
            justifyContent: 'center'
        },
        zip: {
            color: '#ffffff'
        }
       })