// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
//
// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';
//
// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
//
// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };
//
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
//
// export default App;


import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import InputTextTest from "./Learn/BasicComponents/InputText/InputText"
import TouchActionTest from "./Learn/BasicComponents/TouchAction/TouchAction";
import ScrollViewTest from "./Learn/BasicComponents/ScrollView/ScrollViewTest";
import FlatListTest from "./Learn/BasicComponents/List/BasicFlatList/FlatListTest";
import SectionListTest from "./Learn/BasicComponents/List/BasicSectionList/SectionListTest";


export default class App extends Component {
    render() {
        // 1. Flex 初体验
        // return  <JustifyContentBasics></JustifyContentBasics>;

        //2. 输入框初体验
        // return <InputTextTest></InputTextTest>;

        //3. 按钮（触摸）初体验
        // return <TouchActionTest/>;

        //4. ScrollView 体验
        // return <ScrollViewTest/>;

        //5. FlatList 体验
        // return <FlatListTest/>;

        //6. SectionList 体验
        return <SectionListTest/>;

    };
}

/**
 * 关于flex 的初体验
 */
export class AboutFlex extends Component {
    render(){
        return (
            // flex 为1 ，表示填充满剩余空间，、
            // flex 的 flexDirection 默认是 column,而且 flex 只能指定一个数字值
            <View style={{flex: 1, flexDirection: 'row'}}>
                {/*若父控件没有剩余控件，那么子控件的 flex 也无效,也就是不会显示*/}
                <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{flex: 2, height: 100, backgroundColor: 'skyblue'}}/>
                <View style={{flex: 3, height: 150, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}


export class JustifyContentBasics extends Component {
    render() {
        return (
            <View style={JustifyContentBasicsStyle.container}>
                <View style={SubViewStyle.container1}/>
                <View style={SubViewStyle.container2}/>
                <View style={SubViewStyle.hellomao}/>

            </View>
        );
    }
}

const JustifyContentBasicsStyle = StyleSheet.create(
    {
        container: {
            marginTop: 110,
            flex: 1,
            //指定主轴的方向
            flexDirection: 'column',
            //在主轴上的对齐方式/排列方式,可选项有 flex-start flex-end center space-around space-between space-evenly
            justifyContent: 'flex-start',
            //在次轴/侧轴上的对齐方式/排列方式,可选项有 flex-start flex-end center stretch
            //要使用 stretch ，子元素在次轴方向上不能有固定尺寸。
            alignItems: 'stretch',
        }
    });


const SubViewStyle = StyleSheet.create(
    {

        container1: {
            width: 50,
            height: 50,
            backgroundColor: 'powderblue'
        },
        container2: {
            width: 50,
            height: 50,
            backgroundColor: 'skyblue'
        },
        hellomao: {
            width: 50,
            height: 50,
            backgroundColor: 'steelblue',
            //alignSelf 的默认值是 auto ,他继承父容器的 align-items 属性。如果没有父容器，则为 "stretch"
            // center 元素位于容器中心，flex-start 位于开始,flex-end 位于末尾，baseline 元素位于容器的基线上，initial 设置属性为它的默认值,inherit 从父元素继承该属性
            alignSelf: 'flex-end',
        }
    }
);
