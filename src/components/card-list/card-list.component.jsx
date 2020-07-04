import React, { Component } from 'react'
import './card-list.style.css'
import { Card } from '../card/card.component'


//Implementacion de Componente con Arrow Function

// export const CardList = (props) => {
//   const { monsters } = props

//   return (
//     <div className="card-list">
//       {monsters.map(monster => (
//         <Card key={monster.id} monster={monster} />
//       ))}
//     </div>)
// }


//Con el default al momento de importar no es necesario poner llaves PILAS

export default class CardList extends Component{
  render(){
    const { monsters } = this.props

  return (  
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>)
  }
}

