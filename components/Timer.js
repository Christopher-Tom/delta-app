import React from 'react';
import { StyleSheet, Text, View, Image, Button,TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
export default class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        Minutes : 0,
        Seconds: 0   }
        this.decrementMinutes = this.decrementMinutes.bind(this);
        this.decrementSeconds = this.decrementSeconds.bind(this);
        this.incrementMinutes = this.incrementMinutes.bind(this);
        this.incrementSeconds = this.incrementSeconds.bind(this);
    }
   
    decrementMinutes(){
        if(this.state.Minutes>0)
        this.setState({Minutes: this.state.Minutes -1});
        if(this.state.Minutes ==0)
        this.setState({Minutes: 99})
    }
    decrementSeconds(){
         if(this.state.Seconds>0)
        this.setState({Seconds: this.state.Seconds -1});
        if(this.state.Seconds ==0)
        this.setState({Seconds: 59})
    }
    incrementMinutes(){
        if(this.state.Minutes < 99)
        this.setState({Minutes: this.state.Minutes +1});
        if(this.state.Minutes == 99)
        this.setState({Minutes: 0});
    }
    incrementSeconds(){
        if(this.state.Seconds < 59)
        this.setState({Seconds: this.state.Seconds +1});
        if(this.state.Seconds == 59)
        this.setState({Seconds: 0});
    }
    render(){
        return(
            <KeyboardAvoidingView 
            style={styles.container} 
            behavior = "padding">
                <View style={styles.timerElements}>
                    <Button onPress = {this.decrementMinutes} color = "red" title = "-" />
                    <Text style = {styles.text}> {this.state.Minutes} Min</Text>
                    <Button onPress = {this.incrementMinutes} color = "red" title = "+" />
                    <Button onPress = {this.decrementSeconds} color = "red" title = "-" />
                    <Text style = {styles.text}> {this.state.Seconds} Sec</Text>
                    <Button onPress = {this.incrementSeconds} color = "red" title = "+"/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.stopButton}>
                        <Text style = {styles.text}>STOP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startButton}>
                        <Text style = {styles.text}>START</Text>
                    </TouchableOpacity>
                </View>
                 
            
            <KeyboardAvoidingView
             style={styles.rowContainer}
             behavior = "padding">
            
            <View style={styles.timeAndButtonContainer}> 
            <View style={styles.spaceTimeEvenly}>

             <View style = {styles.timeUnit}>
             </View>

             <View style = {styles.timeUnit}>
             <Button onPress = {this.decrementMinutes} color = "red" title = "-" />
             <Text style = {styles.numberText}> {this.state.Minutes} Min</Text>
             <Button onPress = {this.incrementMinutes} color = "red" title = "+" />
             </View>

             <View style = {styles.timeUnit}>
             <Button onPress = {this.decrementSeconds} color = "red" title = "-" />
             <Text style = {styles.numberText}> {this.state.Seconds} Sec</Text>
             <Button onPress = {this.incrementSeconds} color = "red" title = "+" fontWeight = "bold" />
             </View>

             </View>

            <View style={styles.spaceEvenlyContainer}>

                <TouchableOpacity style={styles.roundButton1}>
                <Text>STOP</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.roundButton2}>
                <Text>START</Text>
                </TouchableOpacity>
            </View>

            </View>

            </KeyboardAvoidingView>
            </KeyboardAvoidingView>
        ) 
    }
}

const styles = StyleSheet.create({
    stopButton: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'red',
  },
    startButton: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'green',
    },
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#000000',
    },
    text: {
        color: "white",
        margin: 3,
        fontSize: 20
    },
    numberText: {
     color: "white",
     marginRight: 3,
     fontSize: 20,
    },
    timeAndButtonContainer: {
        flex: 2,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: '20%',
    },
    buttonContainer: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'black',
        justifyContent: 'space-evenly',
    },

    timerElements: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 45,
        marginTop: 300, 
        marginBottom: 50,
    },
    spaceEvenlyContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    timeUnit: {
        flexWrap: "wrap",
        flexDirection: 'row',
        justifyContent: 'space-around',
        //marginTop: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    spaceTimeEvenly: {
        flexWrap: "wrap",
        flex: 1,
        flexDirection: 'column'
    },
});