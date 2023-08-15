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
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
        </View>
        );
       }
       const styles = StyleSheet.create({
        backdrop: {
            
            flex: 1,
            width: 500,
            height: "100%",
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: "center",
        },
       });