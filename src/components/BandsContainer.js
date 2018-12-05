import React, { Component } from 'react'
import BandInput from './BandInput';
import { connect } from 'react-redux'
import Band from './Band';

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Band bands={this.props.bands} delete={this.props.delete}/>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: band => dispatch({ type: "DELTETE_BAND", band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
