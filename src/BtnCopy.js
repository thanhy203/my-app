import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCopy, faCheck)


class BtnCopy extends React.Component {
  state = {
    checked: false
  }
  copy() {
    navigator.clipboard.writeText(this.props.value);
    this.setState({ checked: true })
    
    setTimeout(() => {
      this.setState({ checked: false })
    }, 2000)
  }
  render() {
    console.log(this.props)
    return (
      <label onClick={this.copy.bind(this)} style={{ "cursor": "pointer" }}>
        {(this.state.checked == true) ?
          <FontAwesomeIcon icon="check" style={{color: '#663399'}}/> :
          <FontAwesomeIcon icon="copy" />
        }
      </label>
    );
  }
}

export default BtnCopy;
