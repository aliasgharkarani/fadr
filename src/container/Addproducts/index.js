import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import { AuthActions } from "../../store/actions/index";
import { Addproducts } from './../../components/index';

class AddProducts extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        console.log(123)
    }

    loginSubmit = (user) => {
        // this.props.signin(user);
    }

    navvigate = () => {
        this.props.navigation.navigate('Signupp');
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Addproducts navigation={this.props.navigation}/>
            // <Signin submit={this.loginSubmit} />
        );
    }
}

const mapStateToProps = (state) => {
    return { userAuth: state.AuthReducer };
};
const mapDispatchToProps = (dispatch) => {
    return {
        // signin: (userObj) => dispatch(AuthActions.signin(userObj))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);