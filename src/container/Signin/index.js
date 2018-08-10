import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import { AuthActions } from "../../store/actions/index";
import { Signin } from './../../components/index';

class Signinn extends Component {

    constructor(props) {
        super(props);
        // alert(JSON.stringify(props))
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
            <Signin navigation={this.props.navigation}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signinn);