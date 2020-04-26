import React, { Component } from 'react';
import './SpellsList.css';
import { Link } from 'react-router-dom';
import SpellCard from '..//SpellCard/SpellCards';



class SpellsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
          spells: []
        }
      }

    render() {
        
        return (
            <div className='SpellsList'>
                {this.props.spells.map(i => ( 
                    <Link to={`/${i.index}`} key={i.index} >
                        <SpellCard index={i.index} key={i.index} spellName={i.name} />   
                    </Link>                                    
                ))}
                
            </div>
    )
    }
}

export default SpellsList