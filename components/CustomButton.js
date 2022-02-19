import React from "react";
import { StyleSheet, TouchableOpacity , Text, View} from "react-native";

const CustomeButton = (props) =>{
    return(
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
export default CustomeButton;

const styles = StyleSheet.create({
    container:{
        padding: 15
    },
    button:{
        width: 300,
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize: 40,
        color: '#fff'
    }
})
