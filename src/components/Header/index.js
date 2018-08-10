import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import { Content, Container, Header, List, ListItem, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon } from "native-base"

const { height, width, fontScale } = Dimensions.get('window');

export default class Headers extends Component {
    render() {
        return (
            <View>
                {Platform.OS === 'ios' ? <View style={{ height: "2.5%", backgroundColor: "#9f80d3" }}> </View> : null}

                <View style={{
                    flexDirection: 'row',
                    width,
                    justifyContent: "space-around"

                }}>
                    {/* <View style={{ flex: 1, height: 70, backgroundColor: "#9f80d3", alignItems: "flex-start", justifyContent: "center", }} ><Button onPress={() => { this.props.navigation.navigate("PaymentsWallet"), console.warn("navigation working") }} style={{ backgroundColor: "#9f80d3", height: width / 12, width: width / 12, alignSelf: "center", elevation: 0 }}   ><Image style={{ width: "100%", height: "100%" }} source={require("../../assets/left-arrow.png")} resizeMode="contain" /></Button></View> */}
                    <TouchableOpacity activeOpacity={1} style={{ width: "20%", backgroundColor: "#8d7ecc" }} onPress={() => { this.props.navigation.navigate("Main"), console.warn("navigation working") }} >
                        <View style={{ flex: 1, height: 70, backgroundColor: "#9f80d3", alignItems: "flex-start", justifyContent: "center", }} ><Button style={{ backgroundColor: "#9f80d3", height: width / 12, width: width / 12, alignSelf: "center", elevation: 0 }} onPress={() => { this.props.navigation.navigate("Main"), console.warn("navigation working") }}  ><Image style={{ width: "100%", height: "100%" }} source={require("../../assets/left-arrow.png")} resizeMode="contain" onPress={() => { this.props.navigation.navigate("Main"), console.warn("navigation working") }} /></Button></View>
                    </TouchableOpacity>
                    <View style={{ flex: 2, height: 70, backgroundColor: '#9f80d3', alignItems: "center", justifyContent: "center" }} ><View style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}><Text style={{ fontWeight: "bold", fontSize: fontScale * 18, color: "white" }}>Order</Text></View></View>
                    <View style={{ flex: 1, height: 70, backgroundColor: '#9f80d3', alignItems: "center", justifyContent: "center", }} ><View style={{ width: width / 14, height: width / 14 }} ><Image style={{ height: "100%", width: "100%" }} /></View></View>
                </View>
            </View>
        )
    }
}
// export default Header;