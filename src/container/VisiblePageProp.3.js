import {connect} from 'react-redux';
import * as action from '../actions';
import Page from '../components/Page';



const mapStateToProps = state =>{
    return{
        showProp:state.showProp
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onToggleProp: (state)=>{
            dispatch(toggleProp(state))
        }
    }
}

const VisiblePageProp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Page)

export default VisiblePageProp;