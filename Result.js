//@builtin TypeScript and JavaScript Language Features
//to ignoring an error at Props.
import React, { Component } from 'react'
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
} from 'react-native';

type Props = {};
//Props = jika ada yang tidak bisa dirubah, sifatnya constant/tetap
//state = jika ada yang perlu dirubah 
export default class Result extends Component<Props>{
    static navigationOptions = {
        title: 'Result',
      };
    
    constructor(props){
        super(props)

    }

    render(){
        const {params} =this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>{params}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    }
})