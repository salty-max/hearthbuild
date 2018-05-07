
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

onSubmitTest = (evt) => {
  evt.preventDefault();
  console.log(this.state.filters);
}
  render() {
    return (
      <div className="deck-list--form">
        <form onSubmit={this.onSubmitTest} >
          <div className="classes">
            {/* {this.state.classes.map(c => ( */}
              <ClassRadio /*key={c}*/ hsClass="druid" onChange={this.onChange} checked={this.state.hsClass ==="druid"}/>
              <ClassRadio /*key={c}*/ hsClass="hunter" onChange={this.onChange} checked={this.state.hsClass ==="hunter"}/>
              <ClassRadio /*key={c}*/ hsClass="mage" onChange={this.onChange} checked={this.state.hsClass ==="mage"}/>
              <ClassRadio /*key={c}*/ hsClass="paladin" onChange={this.onChange} checked={this.state.hsClass ==="paladin"}/>
              <ClassRadio /*key={c}*/ hsClass="priest" onChange={this.onChange} checked={this.state.hsClass ==="priest"}/>
              <ClassRadio /*key={c}*/ hsClass="rogue" onChange={this.onChange} checked={this.state.hsClass ==="rogue"}/>
              <ClassRadio /*key={c}*/ hsClass="shaman" onChange={this.onChange} checked={this.state.hsClass ==="shaman"}/>
              <ClassRadio /*key={c}*/ hsClass="warlock" onChange={this.onChange} checked={this.state.hsClass ==="warlock"}/>
              <ClassRadio /*key={c}*/ hsClass="warrior" onChange={this.onChange} checked={this.state.hsClass ==="warrior"}/>

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
                  <select ref="type" name="format" onChange={this.onChange} >
                    <option value={this.state.filters.format} >Standard </option>
                    <option  value={this.state.filters.format}>Wild</option>
                  </select>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">By type</label>
              <div className="control">
                <span className="select">
                  <select ref="type" onChange={this.onChange} name="type">
                    <option value={this.state.filters.type}>Midrange</option>
                    <option value={this.state.filters.type}>Aggro</option>
                    <option value={this.state.filters.type}>Handlock</option>
                    <option value={this.state.filters.type}>Zoo</option>
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
