import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from "../src/store/actions"
import { getAllCategory } from './services/UserSevices';

class Home extends Component {
    
    
    
    componentDidMount() {
        this.props.allcategory()
 
    
    }

   
    render() {
        console.log(' check prop', this.props.category)
        return (
            <div>
                home
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.admin.arrCategory

    };
};

const mapDispatchToProps = dispatch => {
    return {
        allcategory: (data ) => dispatch(actions.fetAllCategory(data) )

    };
};

export default connect( mapStateToProps, mapDispatchToProps )( Home );

