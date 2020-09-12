import React from 'react'
import { Link } from 'gatsby'
import headerStyles from '../css/general/header.module.css'
import logo from '../../assets/general/logo.png'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.breakpoint = 600; //the width at which the header will change its layout
    this.state = {
      width: 900, //arbitrary value larger than current width.
    };
  }

  updateDimensions() {
    if (window.innerWidth < this.breakpoint) {
      this.setState({width: 300});
    } else {
      this.setState({width: 900});
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render () {
    if (this.props.displayType === 'post') {
      return post;
    }
    else if (this.props.displayType === 'main') {
      if (this.state.width >= this.breakpoint) return main('BENN MCGREGOR');
      return main((<img src={logo} alt="logo" style={{width: '25px'}} />));
    }
    else if (this.props.displayType === 'blog') {
      if (this.state.width >= this.breakpoint) return blog('BENN\'S BLOG');
      return blog((<img src={logo} alt="logo" style={{width: '25px'}} />));
    }
  }
}

/*
const Header = ({ displayType }) => {
  if (displayType === 'main') return main;
  else if (displayType === 'post') return post;
}*/

function main(title) {
  return (
    <div>
      <div className={headerStyles.mainContainer}>
        <div style={{margin: '0 0 0 2rem'}}>
          {title}
        </div>
        <Link
          to="/#work"
          style={{
            margin: '0 0 0 1.45rem',
          }}
          state={{
            pleasant: 'reasonably'
          }}
          className="header-link"
        >
          WORK
        </Link>
        <Link
          to="/#about"
          style={{
            margin: '0 1.45rem',
          }}
          className="header-link"
        >
          ABOUT
        </Link>
        {/*<Link
          to="/blog"
          className="header-link"
        >
          BLOG
        </Link>*/}
      </div>
    </div>
  )
};

const post = (
  <div className={headerStyles.postContainer}>
    <div className={headerStyles.rightMargin}/>
    <div className={headerStyles.links}>
      <Link
        to="/#work"
        state={{
          pleasant: 'reasonably'
        }}
        className="header-link"
      >
        BACK
      </Link>
    </div>
    <div className={headerStyles.leftMargin}/>
  </div>
);

function blog(title) {
  return (
    <div>
      <div className={headerStyles.mainContainer}>
        <Link
          to="/blog"
          style={{
            margin: '0 0 0 2rem',
          }}
          className="header-link"
        >
          {title}
        </Link>
        <Link
          to="/blog/about"
          style={{
            margin: '0 0 0 1.45rem',
          }}
          className="header-link"
        >
          ABOUT
        </Link>
        {/*<Link
          to="/blog/explore"
          style={{
            margin: '0 1.45rem',
          }}
          state={{
            pleasant: 'reasonably'
          }}
          className="header-link"
        >
          EXPLORE
        </Link>*/}
        <Link
          to="/"
          style={{
            margin: '0 1.45rem',
          }}
          state={{
            pleasant: 'reasonably'
          }}
          className="header-link"
        >
          HOME
        </Link>
      </div>
    </div>
  )
};

export default Header
