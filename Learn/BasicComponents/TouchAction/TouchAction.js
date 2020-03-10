import React, {Component} from 'react';
import {
    Platform,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Button,
    StyleSheet,
    View
} from 'react-native';


export default class TouchActionTest extends Component {
    _onPressButton() {
        alert('You tapped the button!')
    }

    render() {
        //第一个测试 就是几个简单的按钮和调用方法
        // return <FirstButtonTest/>;
        return <SecondTouchableTest/>;
    }


}


/**
 * 第一个简单按钮的例子
 */
export class FirstButtonTest extends Component {
    _onPressButton() {
        alert('You tapped the button!')
    }

    render() {
        return (
            <View style={firstStyles.container}>
                {/*第一个Button*/}
                <View style={firstStyles.buttonContainer}>
                    <Button onPress={this._onPressButton}
                            title={"PressMe"}
                    />
                </View>

                {/*第二个Button*/}
                <View style={firstStyles.buttonContainer}>
                    <Button onPress={this._onPressButton}
                            title={"PressMe"}
                            color={"#09ff16"}/>
                </View>

                {/*第三个Button*/}
                <View style={firstStyles.alertContainer}>
                    <Button onPress={this._onPressButton}
                            title={"This looks great!"}/>
                    <Button onPress={this._onPressButton}
                            title={"OK!"}
                            color={"#841584"}/>
                </View>
            </View>
        );
    }
}


// 创建样式
const firstStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
        },
        buttonContainer: {
            margin: 20,
        },
        alertContainer: {
            margin: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }

    }
);


/*---------华丽的分割线---------*/


export class SecondTouchableTest extends Component {

    _onPressButton() {
        alert('You tapped the button!');
    }

    _onLongPressButton() {
        alert('You long-pressed the button!');
    }

    render() {
        return <View style={secondStyles.container}>
            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                <View style={secondStyles.button}>
                    <Text style={secondStyles.buttonText}>TouchableHighlight</Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={this._onPressButton}>
                <View style={secondStyles.button}>
                    <Text style={secondStyles.buttonText}>TouchableOpacity</Text>
                </View>
            </TouchableOpacity>
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                <View style={secondStyles.button}>
                    <Text
                        style={secondStyles.buttonText}>TouchableNativeFeedback {Platform.OS !== 'android' ? '(Android only)' : ''}</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableWithoutFeedback
                onPress={this._onPressButton}
            >
                <View style={secondStyles.button}>
                    <Text style={secondStyles.buttonText}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton}
                                underlayColor="white">
                <View style={secondStyles.button}>
                    <Text style={secondStyles.buttonText}>Touchable with Long Press</Text>
                </View>
            </TouchableHighlight>
        </View>
    }
}

const secondStyles = StyleSheet.create({
    container: {
        paddingTop: 60,
        backgroundColor:'#219fff',
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    }
});