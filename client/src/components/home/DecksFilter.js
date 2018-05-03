import React from 'react';

import ClassRadio from './ClassRadio';

class DecksFilter extends React.Component {
  state = {
    classes: [
      'druid',
      'hunter',
      'mage',
      'paladin',
      'priest',
      'rogue',
      'shaman',
      'warlock',
      'warrior'
    ],
    decks: [],
    filters: {}
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      filters: {
        [name]: value
      }
    })
  }


  render() {
    return (
      <div className="deck-list--form">
        <form>
          <div className="classes">
            {this.state.classes.map(c => (
              <ClassRadio key={c} hsClass={c} />
            ))}
          </div>
          <div className="fields">
            <div className="field">
              <label className="label">Search by name</label>
              <div className="control has-icons-left">
                <input type="text" name="name" className="input" placeholder="Search by name..." onChange={this.onChange} value={this.state.filters.name} />
                <span className="icon is-small is-left">
                  <i className="fas fa-pencil-alt" />
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label" >By format</label>
              <div className="control">
                <span className="select">
                  <select onChange={this.SelectionFormat}>
                    <option value="Standard"  >Standard</option>
                    <option value="Wild" >Wild</option>
                  </select>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">By type</label>
              <div className="control">
                <span className="select">
                  <select>
                    <option value="">Midrange</option>
                    <option value="">Aggro</option>
                    <option value="">Handlock</option>
                    <option value="">Zoo</option>
                  </select>
                </span>
              </div>
            </div> 
          </div>
          <div className="field">
            <button type="submit" className="button is-primary is-outlined" style={{ width: '100%', marginTop: '1.5em' }}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default DecksFilter;
