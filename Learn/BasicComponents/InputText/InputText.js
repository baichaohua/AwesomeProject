import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

export default class InputTextTest extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{
                padding: 10,
                paddingLeft: 100,
                marginTop: 100,
                borderWidth: 5,
                borderColor: '#fffff',
                backgroundColor: '#00BFFF'
            }}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}

                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}
