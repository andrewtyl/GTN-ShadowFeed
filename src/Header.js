import React from 'react';
import Sidebar from 'react-sidebar';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sidebarOpen: false
      };
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }
   
    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }
   
    render() {
        let navLinks;
        if (this.props.navLinks == "loggedOut") {
            navLinks = <a href="/login">Log In</a>
        }
        else if (this.props.navLinks == "registering") {
            navLinks = <a href="/">Log Out</a>            
        }
        else if (this.props.navLinks == "loggedIn") {
            navLinks = <a href="/main">Main</a>
        }
        else {
            navLinks = <a href="/login">Log In</a>
        }

      return (
        <header>
        <a href="index.html" id="headerImgHolder">
            <img id="headerImgA" src="https://picsum.photos/300/100" alt="placeholder" />
            <img id="headerImgB" src="https://picsum.photos/100" alt="placeholder" />
        </a>
        <a id="headerTextHolder" href="/" id="headerTextHolder">
            <h1>GTN ShadowFeed</h1>
        </a>
        <Sidebar
          sidebar={<nav>
              {navLinks}
          </nav>}
          pullRight="true"
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
          &#9776;
          </button>
        </Sidebar>
        </header>
      );
    }
  }


export default Header;
