import React, { Component } from 'react'

import './ability-details.css'

export default class AbilityDetails extends Component {

  render() {
    return (
      <div className="ability-details card">
        <div className="card-body">
          <h4>Description of ability</h4>
          <p>Detailed capability information</p>
        </div>
      </div>
    );
  }
}