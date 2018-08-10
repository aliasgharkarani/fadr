import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome"
import * as firebase from 'firebase';
import ImagePicker   from "react-native-image-picker"
import RNFetchBlob from 'react-native-fetch-blob'
import { Content, Container, Thumbnail, CardItem, Left, Body, Right, Footer, FooterTab, Button, Icon, Textarea,Toast } from "native-base"

const { height, width, fontScale } = Dimensions.get('window');

var options = {
    title: 'Select Image',
    // customButtons: [
    //     { name: 'fb', title: 'Choose Photo from Facebook' },
    // ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob




class Addproducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: "https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77",
            productname: "",
            text: "",
            price: "",
            kg: "",
        }

        // firebase.database().ref("Products/" + firebase.auth().currentUser.uid).once("value")
        // .then(success => {
        //     console.log(success.val())
        //     success.val().imagelink ? this.setState({ productname: success.val().productname , avatarSource:success.val().imagelink ,accountType:success.val().accountType }): this.setState({ username: success.val().name,accountType:success.val().accountType})
        //     //   if(success.val().imagelink=null){
        //         // this.setState({ avatarSource:"content://media/external/images/media/2958", })                
        //         //   } 
        //         //   else{
        //             //     this.setState({ avatarSource: success.val().imagelink })                
        //             //   }
        //         }).catch(err => {
        //             console.log(err)
        //         })
    }


    uploadImage = (uri, imageName, mime = 'image/jpg') => {
        console.log("1");
        return new Promise((resolve, reject) => {
            console.log("2");
            const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
            let uploadBlob = null
            const imageRef = firebase.storage().ref('Products').child(imageName)
            fs.readFile(uploadUri, 'base64')
                .then((data) => {
                    console.log("then 1")
                    return Blob.build(data, { type: `${mime};BASE64` })
                })
                .then((blob) => {
                    console.log("then 2")
                    uploadBlob = blob
                    return imageRef.put(blob, { contentType: mime })
                })
                .then(() => {
                    console.log("then 3")
                    uploadBlob.close()
                    return imageRef.getDownloadURL()
                })
                .then((url) => {
                    console.log("then 4")
                    // this.uploadonFirebase(url);
                    this.setState(
                        {
                            avatarSource:url
                        }
                    )
                    resolve(url)
                })
                .catch((error) => {
                    console.log("cath")
                    reject(error)
                })
        })
    }

    uploadonFirebase = (imagelink, productname, price, kg, text) => {
        // this.uploadImage(imagelink, firebase.auth().currentUser.uid);
        firebase.database().ref(`Products`).push({ imagelink, productname, price, kg, text }).then(() => {
            // alert(this)
            this.setState(
                {
                    avatarSource:"https://firebasestorage.googleapis.com/v0/b/sugarandspice-34c66.appspot.com/o/posts%2Fbiryani.jpg?alt=media&token=1683cab5-2fbf-4d06-b155-4ff570ab7b77",
                    productname: "",
                    text: "",
                    price: "",
                    kg: "",
                }
            )
            Toast.show({
                text: 'Uploaded!',
                buttonText: 'Okay',
                duration: 3000
            })
            // alert("jhjdhjh");
        })
            .catch((Error) => {
                console.log("cath")
                Toast.show({
                    text: 'Sorry!',
                    buttonText: 'Check'
                })
            })
    }
    start = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    // avatarSource: response.uri
                });
            }
            console.log(this.state.avatarSource)
            // this.uploadonFirebase(this.state.avatarSource, this.state.productname)
            this.uploadImage(response.uri, firebase.auth().currentUser.uid);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
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
                        <View style={{ flex: 2, height: 70, backgroundColor: '#9f80d3', alignItems: "center", justifyContent: "center" }} ><View style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}><Text style={{ fontWeight: "bold", fontSize: fontScale * 18, color: "white" }}>Add Product</Text></View></View>
                        <View style={{ flex: 1, height: 70, backgroundColor: '#9f80d3', alignItems: "center", justifyContent: "center", }} ><View style={{ width: width / 14, height: width / 14 }} ><Image style={{ height: "100%", width: "100%" }} /></View></View>
                    </View>

                    <TouchableOpacity activeOpacity={1} onPress={() => this.start()} style={{ marginTop: "3%", alignSelf: "center", width: width / 2, height: width / 2, borderRadius: 100 }}>
                        <Image resizeMode="contain" style={{ width: width / 2, height: width / 2, borderRadius: 100 }} source={{ uri: this.state.avatarSource }} />
                    </TouchableOpacity>

                    <View style={{ alignSelf: "center", borderRadius: 16, height: width / 6, width: width / 2 }}>
                        <TextInput
                            /* underlineColorAndroid="white" */
                            style={{ fontWeight: "bold", fontWeight: "bold", height: width / 4, backgroundColor: "rgba(100,200,150,0.5)", width, color: "#ffffff", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                            onChangeText={(productname) => this.setState({ productname })}
                            value={this.state.productname}
                            placeholder="Biryani"
                            placeholderTextColor="#ffffff"
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <View style={{ alignSelf: "center", borderRadius: 16, height: width / 6, width: width / 6, marginTop: "2%", marginRight: "2%" }}>
                            <TextInput
                                /* underlineColorAndroid="white" */
                                style={{ fontWeight: "bold", fontWeight: "bold", height: width / 4, width, color: "#ffffff", backgroundColor: "rgba(100,200,150,0.5)", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                                onChangeText={(price) => this.setState({ price })}
                                value={this.state.price}
                                placeholder="$70"
                                placeholderTextColor="#ffffff"
                                autoCapitalize='none'
                            />
                        </View>
                        <View style={{ alignSelf: "center", borderRadius: 16, height: width / 6, width: width / 6, marginTop: "2%" }}>
                            <TextInput
                                /* underlineColorAndroid="white" */
                                style={{ fontWeight: "bold", fontWeight: "bold", height: width / 4, width, color: "#ffffff", backgroundColor: "rgba(100,200,150,0.5)", fontSize: fontScale * 25, paddingRight: "2%", paddingLeft: "2%" }}
                                onChangeText={(kg) => this.setState({ kg })}
                                value={this.state.kg}
                                placeholder="90kg"
                                placeholderTextColor="#ffffff"
                                autoCapitalize='none'
                            />
                        </View>

                    </View>
                    <View style={{ width: width / 1.1, height: width / 2, alignSelf: "center" }}>
                        <Textarea style={{ backgroundColor: "rgba(100,200,150,0.5)", color: "#ffffff", fontSize: fontScale * 16 }} value={this.state.text} onChangeText={(text) => this.setState({ text })} rowSpan={5} bordered placeholder="Textarea" />

                    </View>
                    <Button onPress={() => this.uploadonFirebase(this.state.avatarSource, this.state.productname, this.state.price, this.state.kg, this.state.text)} style={{ backgroundColor: "rgb(180,180,180)", height: width / 7, width: width / 4, borderRadius: 100, alignSelf: "center", paddingLeft: "5%" }}><Text style={{ color: "#ffffff", fontWeight: "bold" }}>Upload</Text></Button>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
    Create_Business_Container: {
        justifyContent: "center",
        backgroundColor: '#fff',
        // borderBottomColor:"#dfdfdf",
        // borderWidth:0.5,
    },
    Create_Business: {
        justifyContent: "center",
        alignSelf: "center",
        flexDirection: "row",
        margin: 18,
    },
    Create_Icons: {
        margin: 5
    },
    Create_Text_View: {
        margin: 5,
    },
    Create_Text: {
        color: "#4e4d4d",
        fontWeight: "bold",
        fontSize: 18
    },
    Thumbnail: {
        borderRadius: 16,
        margin: 5,
        alignSelf: "flex-start",
        alignContent: "flex-start",
        height: 46,
        width: 45
    },
    stars: {
        flexDirection: "row",
    },
    RightSection: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    sellOn_container: {
        borderRadius: 5,
        borderColor: "#ad98d9",
        borderWidth: 1,
        padding: 3,
        paddingLeft: 8,
        paddingRight: 8,
        margin: 3,
        marginRight: -5
    },
    sellOnText: {
        color: "#ad98d9",
    },
    byOn_container: {
        borderRadius: 5,
        borderColor: "#848484",
        borderWidth: 1,
        padding: 3,
        paddingLeft: 8,
        paddingRight: 8,
        margin: 3
    },
    buyOnText: {
        color: "#848484",
    },
    CardItem: {
        elevation: 0,
        borderBottomColor: "#fff",
        borderTopWidth: 2,
        borderTopColor: "#f2f2f2"
    }
});

export default Addproducts;