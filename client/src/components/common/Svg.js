import React from 'react'

import druid from '../../assets/img/classes/badges/class-druid.svg';
import hunter from '../../assets/img/classes/badges/class-hunter.svg';
import mage from '../../assets/img/classes/badges/class-mage.svg';
import paladin from '../../assets/img/classes/badges/class-paladin.svg';
import priest from '../../assets/img/classes/badges/class-priest.svg';
import rogue from '../../assets/img/classes/badges/class-rogue.svg';
import shaman from '../../assets/img/classes/badges/class-shaman.svg';
import warlock from '../../assets/img/classes/badges/class-warlock.svg';
import warrior from '../../assets/img/classes/badges/class-warrior.svg';
import dust from '../../assets/img/misc/misc-dust.svg';
import mana from '../../assets/img/misc/misc-mana.svg';
import standard from '../../assets/img/misc/misc-standard.svg';
import wild from '../../assets/img/misc/misc-wild.svg';

const svgs = {
  druid,
  hunter,
  mage,
  paladin,
  priest,
  rogue,
  shaman,
  warlock,
  warrior,
  dust,
  mana,
  standard,
  wild
}

const Svg = ({ type, value }) => (
  <svg>
    <use xlinkHref={`${svgs[value]}#${type}-${value}`} />
  </svg>
);

export default Svg;