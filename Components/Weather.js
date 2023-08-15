import React, { useEffect,useState } from 'react'
import { ImageBackground, Text, StyleSheet, View } from 'react-native';
import Forecast from './Forecast.js';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=f4be18cb0f7001861ee726823440e651`)
        .then((response) => response.json())
        .then((json) => {
            setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp
        });
        })
        .catch((error) => {
            console.warn(error);
        });
        }
        }, [props.zipCode])
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