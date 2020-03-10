import React,{Component} from 'react';
import {ScrollView,Image,Text} from 'react-native';
import TouchActionTest from "../TouchAction/TouchAction";

export default class ScrollViewTest extends Component{
    render() {
        return (
            <ScrollView style={{marginTop:60}}>
                <Text style={{fontSize:26}}>Scroll me plz</Text>

                <TouchActionTest style={{marginLeft:30}}/>
                <Image  style={{marginLeft:30}} source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Text style={{fontSize:26}}>If you like</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Text style={{fontSize:26}}>Scrolling down</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Text style={{fontSize:26}}>What's the best</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Text style={{fontSize:26}}>Framework around?</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/tiny_logo.png", width: 64, height: 64}} />
                <Text style={{fontSize:20}}>React Native</Text>
            </ScrollView>
        );
    }
}