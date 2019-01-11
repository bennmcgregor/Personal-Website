import React from 'react'
import carouselStyles from '../../css/main-page/sonata/carousel.module.css'

import Photo from '../../general/photo'
import right from '../../../assets/sonata/right.svg'
import left from '../../../assets/sonata/left.svg'

class Carousel extends React.Component {
	constructor (props) {
		super(props);

		this.breakpoint = 900; //the width at which the carousel will change its layout

		this.state = {
			leftImageIndex: 0,
      rightImageIndex: 1,
			singleImageIndex: 0,
			hasClicked: false,
			width: 1200, //arbitrary value larger than 900.
		};

		this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);
	}

	updateDimensions() {
		if (window.innerWidth < this.breakpoint) {
			this.setState({width: 600});
		} else {
			this.setState({width: 1200});
		}
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this));
	}

	previousSlide () {
		const lastIndex = this.props.imgUrls.length - 1;
		const { leftImageIndex } = this.state;

		if (this.state.width < this.breakpoint) {
			const shouldResetIndex = this.state.singleImageIndex === 0;
			const singleIndex = shouldResetIndex ? lastIndex : this.state.singleImageIndex - 1
			this.setState({
				singleImageIndex: singleIndex,
				hasClicked: true,
			});
			if (!(singleIndex%2)) {
				this.setState({
					leftImageIndex: singleIndex,
					rightImageIndex: singleIndex + 1,
				});
			} else {
				this.setState({
					leftImageIndex: singleIndex - 1,
					rightImageIndex: singleIndex,
				});
			}
		} else {
			const shouldResetIndex = leftImageIndex === 0;
			const leftIndex = shouldResetIndex ? lastIndex-1 : leftImageIndex - 2;
			const rightIndex = leftIndex + 1;
			this.setState({
				leftImageIndex: leftIndex,
				rightImageIndex: rightIndex,
				singleImageIndex: leftIndex,
				hasClicked: true,
			});
		}
	}

	nextSlide () {
		const lastIndex = this.props.imgUrls.length - 1;
		const { rightImageIndex } = this.state;

		if (this.state.width < this.breakpoint) {
			const shouldResetIndex = this.state.singleImageIndex === lastIndex;
			const singleIndex = shouldResetIndex ? 0 : this.state.singleImageIndex + 1
			this.setState({
				singleImageIndex: singleIndex,
				hasClicked: true,
			});
			if (!(singleIndex%2)) {
				this.setState({
					leftImageIndex: singleIndex,
					rightImageIndex: singleIndex + 1,
				});
			} else {
				this.setState({
					leftImageIndex: singleIndex - 1,
					rightImageIndex: singleIndex,
				});
			}
		} else {
			const shouldResetIndex = rightImageIndex === lastIndex;
			const rightIndex = shouldResetIndex ? 1 : rightImageIndex + 2;
			const leftIndex = rightIndex - 1;
			this.setState({
				leftImageIndex: leftIndex,
				rightImageIndex: rightIndex,
				singleImageIndex: leftIndex,
				hasClicked: true,
			});
		}
	}

	render () {
		if (this.state.width >= this.breakpoint) {
			return (
				<div className={carouselStyles.carousel}>
					<div className={carouselStyles.imageContainer}>
						<ToggleLeft clickFunction={ this.previousSlide } hasClicked={this.state.hasClicked}/>
						<ToggleRight clickFunction={ this.nextSlide } hasClicked={this.state.hasClicked}/>
						<ImageSlide url={ this.props.imgUrls[this.state.leftImageIndex] } />
						<ImageSlide url={ this.props.imgUrls[this.state.rightImageIndex] } />
					</div>
				</div>
			);
		} else {
			return (
				<div className={carouselStyles.carousel}>
					<div className={carouselStyles.imageContainer}>
						<ToggleLeft clickFunction={ this.previousSlide } hasClicked={this.state.hasClicked}/>
						<ToggleRight clickFunction={ this.nextSlide } hasClicked={this.state.hasClicked}/>
						<ImageSlide url={ this.props.imgUrls[this.state.singleImageIndex] } />
					</div>
				</div>
			);
		}
	}
}

const ToggleLeft = ({clickFunction, hasClicked}) => (
	<div
		className={carouselStyles.slideArrowLeft}
		onClick={ clickFunction }>
		{!hasClicked ? (<img src={left} style={{height: '2.5rem'}} alt='error'/>) : ''}
	</div>
);

const ToggleRight = ({clickFunction, hasClicked}) => (
	<div
		className={carouselStyles.slideArrowRight}
		onClick={ clickFunction }>
		{!hasClicked ? (<img src={right} style={{height: '2.5rem'}} alt='error'/>) : ''}
	</div>
);

const ImageSlide = ({ url }) => {
	var w = url.aspectRatio*100;
	return (
    <div className={carouselStyles.imageSlide} style={{width: `${w}vh`}}>
    	<Photo imagePath={url} styles={{margin: '0 auto', minHeight: '320px', minWidth: '247.27px', maxHeight: '3300px'}}/>
    </div>
	);
}

/*const imgUrls = ["sonata/2.jpeg", "sonata/3.jpeg", "sonata/4.jpeg",
                 "sonata/5.jpeg", "sonata/6.jpeg", "sonata/7.jpeg", "sonata/8.jpeg", "sonata/9.jpeg",
                 "sonata/10.jpeg", "sonata/11.jpeg", "sonata/12.jpeg", "sonata/13.jpeg", "sonata/14.jpeg",
                 "sonata/15.jpeg", "sonata/16.jpeg", "sonata/17.jpeg", "sonata/18.jpeg", "sonata/19.jpeg",
                 "sonata/20.jpeg", "sonata/21.jpeg", "sonata/22.jpeg", "sonata/23.jpeg", "sonata/24.jpeg",
                 "sonata/25.jpeg","sonata/26.jpeg","sonata/27.jpeg","sonata/28.jpeg","sonata/29.jpeg",];
                 //maybe add in: "sonata/journey.jpg", "sonata/1.jpeg",*/

export default Carousel
