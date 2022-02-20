import React from 'react';
import {StyleSheet,Text,View} from "react-native";
import moment from 'moment';

const Timer = (props) =>{
    const duration = moment.duration(props.interval);
    //const centiseconds = Math.floor(duration.milliseconds()/10);
    return(
        <>
            <View style={styles.container}>
                <Text style={styles.clock}>
                    {duration.days()}
                    :{duration.hours()}
                    :{duration.minutes()}
                    :{duration.seconds()}</Text>
            </View>
        </>
    );
}

export default Timer;

const styles = StyleSheet.create({
    container:{
        padding: 15
    },
    clock:{
        fontSize: 20,
        color: 'black',
        fontWeight: '200',
    }
})