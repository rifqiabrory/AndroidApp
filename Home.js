import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

    type Props = {};
    export default class Home extends Component<Props> {
        static navigationOptions={
            title:"MyApps"
        }

    constructor(props){
        super(props);
        this.state = {
            data:'ini data'
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>Result : {this.state.data}</Text>
                <TextInput
                    style={styles.textInput}
                    value={this.state.data}
                    onChangeText={
                        (result) =>{
                            this.setState({data:result})
                        }
                    }
                />
                <Button title="Send Value" onPress={()=>{
                    this.props.navigation.navigate('Result', this.state.data)
                }}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 65,
        alignItems: 'center'
    },
    textInput:{
        height: 36,
        padding: 4,
        flexGrow: 3,
        fontSize: 14,
        marginTop:15,
        marginBottom:15,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',

    }
})