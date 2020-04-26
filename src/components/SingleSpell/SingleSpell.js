import React, { Component } from 'react';
import './SingleSpell.css';

class SingleSpell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spellData: {},
            showSearch: false
        }
    }

    async componentDidMount() {
        await fetch(`https://www.dnd5eapi.co/api/spells/${this.props.spellName}`)
        .then(res => res.json())
        .then(data => this.setState({ spellData: data}))
    }

    render() {
        const { 
            casting_time, components, concentration, desc, duration, higher_level, level, material, name, range, ritual 
        } = this.state.spellData;
        
        return (
            <div className='SingleSpell'>
                <div className='Nav'>
                    <a href='/'>BACK</a>
                </div>
                <div>
                    <div className='SingleSpell-container'>
                        <div className='SingleSpell-header'>
                            <h2 className='SingleSpell-name'>{name}</h2>
                            <p>Level: {level} 
                                <span>{ritual && '(ritual)'}</span>
                            </p>
                        </div>
                        <div className='SingleSpell-body'>
                            <p>Casting time: {casting_time}</p>
                            <p>Range: {range}</p>
                            <p>Components: {components} {material && `(${material})`}</p>
                            <p>Duration: 
                                <span>{concentration && 'concentration, '}</span>
                                {duration}
                            </p>
                        </div>
                        <div className='SingleSpell-foot'>
                            <p>{desc}</p>
                            <p>{higher_level && `higher level: ${higher_level}`}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SingleSpell;