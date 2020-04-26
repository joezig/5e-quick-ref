import React, { Component } from 'react';
import './SpellCard.css';

class SpellCard extends Component {
    render() {
        return (
            <div className='SpellCard' >
                <h2>{this.props.spellName}</h2>
            </div>
        )
    }
}

export default SpellCard;