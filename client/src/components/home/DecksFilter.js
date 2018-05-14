
import React, { Component, createRef } from 'react';
import classnames from 'classnames';

import ClassRadio from './ClassRadio';
import TextFieldGroup from '../common/TextFieldGroup';
import SelectListGroup from '../common/SelectListGroup';

class DecksFilter extends Component {
  constructor() {
    super();
    this.state = {
      classes: [],
      formats: [],
      types: [],
      hsClass: '',
      title: '',
      format: '',
      type: ''
    }
    this.filterForm = createRef();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      classes: nextProps.classes,
      formats: nextProps.formats,
      types: nextProps.types
    });
  }

  clearFilters = () => {
    this.setState({
      title: '',
      hsClass: '',
      format: '',
      type: ''
    });

    this.filterForm.current.reset();
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const { title, format, hsClass, type } = this.state;
    
    const newFilters = {
      title,
      hsClass,
      format,
      type
    }

    this.props.actions.setFilters(newFilters);
  }

  render() {
    return (
      <div className="deck-list--form">
        <form ref={this.filterForm} onSubmit={this.onSubmit} >
          <div className="classes">
            {this.props.classes.map(hsClass => (
              <ClassRadio
                key={hsClass.value}
                hsClass={hsClass.value.toLowerCase()}
                onChange={this.onChange}
                checked={this.state.hsClass === hsClass.label}
                label={hsClass.label}
              />
            ))}

          </div>
          <div className="fields">
            <TextFieldGroup
              name="title"
              label="Search by title"
              icon="fas fa-pencil-alt"
              onChange={this.onChange}
              value={this.state.title}
            />
            <SelectListGroup
              name="format"
              label="By format"
              options={this.props.formats}
              onChange={this.onChange}
              value={this.state.format}
            />
            <SelectListGroup
              name="type"
              label="By type"
              options={this.props.types}
              onChange={this.onChange}
              value={this.state.type}
            />
          </div>
          <div className="columns">
            <div className="column is-9">
              <div className="field">
                <button type="submit" className="button is-primary is-outlined">Submit</button>
              </div>
            </div>
            <div className="column is-3">
              <div className="field">
                <button onClick={this.clearFilters} className="button is-warning is-outlined clear-button">Clear Filters</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DecksFilter;
