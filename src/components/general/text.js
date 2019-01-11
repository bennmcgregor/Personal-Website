import React, {Component} from "react"
import textStyles from '../css/general/text.module.css'

class Text extends Component {
  render() {
    return (
      <div
        className={textStyles.text}
        style={this.props.styles ? this.props.styles : null}
        onMouseEnter={this.props.handleMouseEnter ? () => this.props.handleMouseEnter(this.props.hoverArg) : null}
        onMouseLeave={this.props.handleMouseLeave ? () => this.props.handleMouseLeave(this.props.hoverArg) : null}
        onClick={this.props.handleClick ? () => this.props.handleClick(this.props.clickArg): null}
      >
        {this.props.input}
      </div>
    );
  }
}

export default Text
