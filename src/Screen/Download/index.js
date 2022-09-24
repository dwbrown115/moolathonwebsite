import React, { PureComponent } from 'react'
import { iPhonePair, AppStoreButton, GooglePlayButton } from '../../Images'
import "./Download.scss"

class Download extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="download-container" style={{ position: "relative" }}>
                <div
                    id="download"
                    style={{ position: "absolute", top: -71, right: "50%" }}
                />
                <div className="download-contents-wrapper">
                    <div className="left-side-wrapper">
                        <div className="download-header">
                            DOWNLOAD NOW
                        </div>
                        <div className="download-text-one">
                            Download the app today to get fit while raising money anytime, anywhere.
                        </div>
                        <div className="download-text-two">
                            Sign up as an individual or group to create campaigns that use your social circle to raise money for any personal or philanthropic cause with the miles you run or walk!
                        </div>
                        <div className="appstore-image-wrappers">
                            <div className="appstore-image">
                                <div>
                                    <img src={AppStoreButton} alt="AppStoreButton.png" />
                                </div>
                            </div>
                            <div className="googleplaystore-image">
                                <div>
                                    <img src={GooglePlayButton} alt="GooglePlayButton.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-wrapper">
                        <div className="image-wrapper">
                            <div>
                                <img src={iPhonePair} alt="iPhonePair.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Download