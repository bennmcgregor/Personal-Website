import React from 'react'
import { Link } from 'gatsby'

import AudioPlayer from '../../general/audio-player/audio-player'
import Text from '../../general/text'
import menuStyles from '../../css/main-page/sonata/menu.module.css'

const Menu = ({display, url, toggleNotes}) => (
  <div className={menuStyles.menu}>
    <div className={menuStyles.links}>
      <Link to="/#work"
        style={{margin: '1.45rem 1.45rem 1.45rem 2rem'}}
        className="header-link"
      >
        BACK
      </Link>
      <Text
        input="NOTES"
        handleClick={toggleNotes}
      />
    </div>
    <div className={menuStyles.audio}>
      <AudioPlayer show={display} file={url}/>
    </div>
  </div>
);

export default Menu
