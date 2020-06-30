import React, {Component} from 'react';
import ImgSlider1 from '../../../images/slider-1.jpg';
import ImgSlider2 from '../../../images/slider-2.jpg';
import ImgSlider3 from '../../../images/slider-3.jpg';
import ImgSlider4 from '../../../images/slider-4.jpg';
import ImgSlider5 from '../../../images/slider-5.jpg';

class Slider extends Component {
  render(){

    return(
        <div className="main-page-slider">
            <div className="uk-position-relative uk-visible-toggle uk-light uk-slider" tabIndex="-1" uk-slider="">
            <ul className="uk-slider-items uk-grid">
                <li className="uk-width-4-5">
                    <div className="uk-panel">
                        <img src={ImgSlider3} alt=""></img>
                        <div className="uk-position-center uk-text-center">
                            <div className="main-page-slider-font">
                                <h2 uk-slider-parallax="x: 100,-100"><b>Heading 1</b></h2>
                                <p uk-slider-parallax="x: 200,-200"><b>This text will contains the detaaailed description of the headin 1 you you could say slider 1</b></p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="uk-width-4-5">
                    <div className="uk-panel">
                        <img src={ImgSlider4} alt=""></img>
                        <div className="uk-position-center uk-text-center">
                            <div className="main-page-slider-font">
                                <h2 uk-slider-parallax="x: 100,-100"><b>Heading 2</b></h2>
                                <p uk-slider-parallax="x: 200,-200"><b>This text will contains the detaaailed description of the headin 2 you you could say slider 2</b></p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="uk-width-4-5">
                    <div className="uk-panel">
                        <img src={ImgSlider5} alt=""></img>
                        <div className="uk-position-center uk-text-center">
                            <div className="main-page-slider-font">
                                <h2 uk-slider-parallax="x: 100,-100"><b>Heading 3</b></h2>
                                <p uk-slider-parallax="x: 200,-200"><b>This text will contains the detaaailed description of the headin 3 you you could say slider 3</b></p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="uk-width-4-5">
                    <div className="uk-panel">
                        <img src={ImgSlider2} alt=""></img>
                        <div className="uk-position-center uk-text-center">
                            <div className="main-page-slider-font">
                                <h2 uk-slider-parallax="x: 100,-100"><b>Heading 4</b></h2>
                                <p uk-slider-parallax="x: 200,-200"><b>This text will contains the detaaailed description of the headin 4 you you could say slider 4</b></p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="uk-width-4-5">
                    <div className="uk-panel">
                        <img src={ImgSlider1} alt=""></img>
                        <div className="uk-position-center uk-text-center">
                            <div className="main-page-slider-font">
                                <h2 uk-slider-parallax="x: 100,-100"><b>Heading 5</b></h2>
                                <p uk-slider-parallax="x: 200,-200"><b>This text will contains the detaaailed description of the headin 5 you you could say slider 5</b></p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-previous uk-slider-item" href="#" uk-slidenav-previous="" uk-slider-item="previous"></a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-next uk-slider-item" href="#" uk-slidenav-next="" uk-slider-item="next"></a>

        </div>
</div>
    );
  }
}

export default Slider;
