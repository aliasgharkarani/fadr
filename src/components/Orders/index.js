import React, { Component } from 'react';
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
import Headers from '../Header'
import * as firebase from 'firebase';
const { height, width, fontScale } = Dimensions.get('window');

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentWillMount() {
        firebase.database().ref('Products').once("value").then(success => {
            const product = success.val();
            const keys = Object.keys(product);
            const array = [];
            for (e of keys) {
                array.push(product[e])
            }
            this.setState({ products: array });
        })
            .catch(err => {
                alert(err)
            }
            )
    }
    render() {
        return (
            <Container>
                <Headers navigation={this.props.navigation} />
                <Content>
                    <List>
                        {this.state.products && this.state.products.map((item, index) => {
                           return <ListItem key={index} >
                                <Left>
                                    <Thumbnail square source={{ uri: item.imagelink }} />
                                </Left>
                                <Body>
                                    <Text>{item.productname}</Text>
                                    <Text note numberOfLines={1}>{item.text}</Text>
                                </Body>
                                <Right>
                                    <Button transparent>
                                        <Text>{item.price}</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                        })}
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },

});

export default Orders;