import React, { Component } from 'react'
import PokeService from '../../services/poke-service';

import './ability-details.css'

export default class AbilityDetails extends Component {

  pokeService = new PokeService()

  state = {
    ability: []
  }

  updateAbility() {
    const { abilityId } = this.props
    if (!abilityId) {
      return
    }

    this.pokeService.getAbility(abilityId).then((ability) => {
      this.setState({
        ability
      })
    })
  }

  componentDidMount() {
    this.updateAbility()
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.abilityId !== prevProps.abilityId) {
  //     this.updateAbility()
  //   }
  // }


  render() {

    const { name, effect } = this.state.ability
    return (
      <div className="ability-details card">
        <div className="card-body">
          <h4>Description of ability - {name}</h4>
          {/* {effect.effect} */}
        </div>
      </div>
    );
  }
}