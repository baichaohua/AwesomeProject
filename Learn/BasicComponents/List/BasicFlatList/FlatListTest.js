import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';

//数据
const listData= [
    {key: '1'},
    {key: '2'},
    {key: '3'},
    {key: '4'},
    {key: '5'},
    {key: '6'},
    {key: '7'},
    {key: '8'},
    {key: '9'},
];

/**
 * 首先，List 只会渲染屏幕上的东西，而不是所有内容都渲染（ScrollView 是所有内容都渲染）
 * 其次，FlatList （扁平List）,好像没有 Header 和 Footer 。 如果需要可以考虑 SectionList
 */
export default class FlatListTest extends Component {
    render() {
        return (
            <View style={flatListStyles.viewStyle}>
                <FlatList
                    style={flatListStyles.flatListStyle}
                    data={listData}
                    renderItem={({item}) => <Text style={flatListStyles.textItemStyle}>{item.key}</Text>}
                />
            </View>
        );
    }
}

/**--------------退后，我要开始装逼了-------------*/


function color16() {//十六进制颜色随机
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;

}


const flatListStyles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        paddingTop: 22
    },
    flatListStyle: {
        backgroundColor:'#40ff2e',
        borderWidth:2,
        borderColor:'red',
        marginTop:60,

    }
    ,
    textItemStyle: {
        padding: 10,
        fontSize: 15,
        height: 44,
        color:color16(),
        justifyContent: 'flex-end',
    }
});
