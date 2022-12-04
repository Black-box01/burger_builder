import React, {Component} from 'react'
import Aux from '../Auxillary/Auxillary'
import  './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component{

    state = {
        showSideDrawer: false
    }

    SideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }

    OpenSideDrawer = () => {
        this.setState({showSideDrawer: true});
    }

    render (){
        return(
            <Aux>
                <Toolbar OpenDrawer={this.OpenSideDrawer} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerCloseHandler} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;
