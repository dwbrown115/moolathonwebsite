import React, { PureComponent } from 'react'
import { iPhone } from '../../Images'
import './Sponsorship.scss'

class Sponsorship extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="sponsorships-container" style={{ position: "relative" }}>
                <div
                    id="sponsorships"
                    style={{ position: "absolute", top: -71, right: "50%" }}
                />
                <div className="sponsorship-header-wrapper">
                    <div className="sponsorship-header">
                        Join Campaigns
                    </div>
                    <div className="sponsorship-divider" />
                    <div className="sponsorship-text">
                        create or join a campaign to raise money and awareness collectively
                    </div>
                </div>
                <div className="sponsorship-steps-wrapper">
                    <div className="sponsorship-steps">
                        <div className="phone-image">
                            <div>
                                <img src={iPhone} alt="iPhone.png" />
                            </div>
                        </div>
                        <div className="sponsorship-step-number">
                            1
                        </div>
                        <div className="sponsorship-step-title">
                            CREATE A CAMPAIGN
                        </div>
                        <div className="sponsorship-step-text">
                            Share your event via socials, text, or email and start getting pledges
                        </div>
                    </div>
                    <div className="sponsorship-steps">
                        <div className="phone-image">
                            <div>
                                <img src={iPhone} alt="iPhone.png" />
                            </div>
                        </div>
                        <div className="sponsorship-step-number">
                            2
                        </div>
                        <div className="sponsorship-step-title">
                            GET FIT + RAISE MONEY
                        </div>
                        <div className="sponsorship-step-text">
                            Contributors track their progress and you watch your earnings grow
                        </div>
                    </div>
                    <div className="sponsorship-steps">
                        <div className="phone-image">
                            <div>
                                <img src={iPhone} alt="iPhone.png" />
                            </div>
                        </div>
                        <div className="sponsorship-step-number">
                            3
                        </div>
                        <div className="sponsorship-step-title">
                            END YOUR CAMPAIGN
                        </div>
                        <div className="sponsorship-step-text">
                            See your completed miles and celebrate money raised for your cause
                        </div>
                    </div>
                </div>
                <div className="sponsorship-bottom-text">
                    Sign up as an individual to create campaigns that use your social circle to raise money for any personal or philanthropic cause with the miles you run or walk!
                </div>
            </div>
        )
    }
}

export default Sponsorship