import React from 'react'

import Text from '../../general/text'
import openingStyles from '../../css/main-page/sonata/opening.module.css'

class Opening extends React.Component {
  render() {
    var d = 'none';
    if (this.props.pageDisplay === 'opening' || this.props.showOpening) {
      d = 'block';
    }
    return (
      <div style={{display: d}} className={openingStyles.container}>
        <div className={openingStyles.close}>
          <div className={openingStyles.rightMargin}/>
          <div className={openingStyles.links}>
            <Text
              input="CLOSE"
              handleClick={this.props.toggleNotes}
              className={openingStyles.link}
            />
          </div>
          <div className={openingStyles.leftMargin}/>
        </div>
        <div className={openingStyles.text}>
          <div className="right-margin"/>
          <div className={openingStyles.textContent}>
            <i>Piano Sonata</i>
            <br/><br/>
            Benn McGregor, 2018<br/>
            <br/><br/><br/><br/>
            <i>Performance Notes</i>
            <br/><br/>
            The main characteristic of movement 1 is its shifts in texture between clarity and density.
            Keep these shifts in mind above all else, and use them to tell a story.
            <br/><br/>
            Liberty may be taken with tempo changes and pedalling indications if it is felt that those
            changes will illuminate new aspects of the piece or add more clarity to its progression.
            Dynamics and the structures they delineate must be carefully considered, but may also
            be subject to alteration.
            <br/><br/>
            Specifically addressing the section beginning at bar 168, think of it being composed
            of two different parts: the smoothly rising duet melody, and the short accented &quot;power
            chords&quot; that rise from below to overtake the melody. Aim to create as much independence
            as possible between these two parts by emphasizing the legato nature of the melody with
            pedal, while using no pedal on the power chords.
          </div>
          <div className={openingStyles.leftMargin}/>
        </div>
      </div>
    );
  }
}

//<Photo imagePath={data.sonataImage.childImageSharp.fluid}/>
/*var w = data.sonataImage.childImageSharp.fluid.aspectRatio*100;
var h = 0.5/(w/100)*100;
if (!this.state.isHomePage) {
  return (<>
    <div className={openingStyles.modal} style={{display: d, width: `${1.4*w}vh`, height: `${1.4*h}vh`}}>
      <div className={openingStyles.modalGuts}>
        <div className={openingStyles.textContainer} style={{width: `100%`}}>
          <p className={openingStyles.title}>Performance Notes</p>
          <p style={{fontSize: '0.8rem'}}>
          The main characteristic of this movement is its shifts in texture between clarity and density.
          Keep these shifts in mind above all else, and use them to tell a story.
          <br/><br/>
          Liberty may be taken with tempo changes and pedalling indications if it is felt that those
          changes will illuminate new aspects of the piece or add more clarity to its progression.
          Dynamics and the structures they delineate must be carefully considered, but may also
          be subject to alteration.
          <br/><br/>
          Specifically addressing the section beginning at bar 168, think of it being composed
          of two different parts: the smoothly rising duet melody, and the short accented &quot;power
          chords&quot; that rise from below to overtake the melody. Aim to create as much independence
          as possible between these two parts by emphasizing the legato nature of the melody with
          pedal, while using no pedal on the power chords.
          </p>
        </div>
      </div>
    </div>
    <div className={openingStyles.modalOverlay} style={{display: d, backgroundColor: '#ffffff'}}>
    </div>
  </>);
}
return (<>
  <div className={openingStyles.modal} style={{display: d, width: `${1.4*w}vh`, height: `${1.4*h}vh`}}>
    <div className={openingStyles.modalGuts}>
      <div className={openingStyles.imageContainer} style={{width: `${w*0.5*1.4}vh`}}>
        <Photo imagePath={data.sonataImage.childImageSharp.fluid}/>
      </div>
      <div className={openingStyles.textContainer} style={{width: `${w*0.5*1.4}vh`}}>
        <p className={openingStyles.title}>Piano Sonata</p>
        <p>Benn McGregor, 2018</p>
        <p style={{lineHeight: '1.6rem'}}>
          Listen carefully.<br/>
          How does the music make you feel?<br/>
          What story do you hear?
        </p>
        <Text
          input="Begin"
          handleClick={this.props.toggleNotes}
        />
        <br/>
        <Text
          input="Performance Notes"
          handleClick={this.handleClick.bind(this)}
        />
        <br/>
        <Link to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
        }}>
          Home
        </Link>
      </div>
    </div>
  </div>
  <div className={openingStyles.modalOverlay} style={{display: d}}>
  </div>
</>);*/

export default Opening
