import React from 'react';
import PropTypes from 'prop-types';

import druid from '../../assets/img/classes/avatars/avatar-druid.png';
import hunter from '../../assets/img/classes/avatars/avatar-hunter.png';
import mage from '../../assets/img/classes/avatars/avatar-mage.png';
import paladin from '../../assets/img/classes/avatars/avatar-paladin.png';
import priest from '../../assets/img/classes/avatars/avatar-priest.png';
import rogue from '../../assets/img/classes/avatars/avatar-rogue.png';
import shaman from '../../assets/img/classes/avatars/avatar-shaman.png';
import warlock from '../../assets/img/classes/avatars/avatar-warlock.png';
import warrior from '../../assets/img/classes/avatars/avatar-warrior.png';

const avatars = {
  druid,
  hunter,
  mage,
  paladin,
  priest,
  rogue,
  shaman,
  warlock,
  warrior,
}

const AvatarClassRadio = ({
  hsClass,
  label,
  onChange,
  checked,
}) => (
    <div className="control">
      <input id={hsClass} name="hsClass" type="radio" className="radio" onChange={onChange} checked={checked} value={label} />
      <label htmlFor={hsClass}>
        <img alt={`avatar-${hsClass}`} src={avatars[hsClass]} className="image is-rounded is-128x128" />
        <span className="class-title">{label}</span>
      </label>
    </div>
  );

AvatarClassRadio.propTypes = {
  hsClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
}

export default AvatarClassRadio;