import React, { PureComponent } from 'react'
import { PhoneMask } from '../../Images'
import { FAQ_CARD } from '../../Components'
import "./FAQ.scss"

class FAQ extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="faq-container">
                <div className="left-side-wrapper">
                    <div className="faq-header-wrapper">
                        <div className="faq-header">
                            FREQUENTLY ASKED QUESTIONS
                        </div>
                        <div className="faq-break" />
                        <div className="faq-text">
                            Create a virtual fitness event with no overhead; or extend a physical event virtually to reach more of your supporters.
                        </div>
                    </div>
                    <div className="faq-cards-wrapper">
                        <FAQ_CARD question={"Question Here"} answer={"Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here."} />
                        <FAQ_CARD question={"Question Here"} answer={"Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here."} />
                        <FAQ_CARD question={"Question Here"} answer={"Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here."} />
                        <FAQ_CARD question={"Question Here"} answer={"Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here. Answer here.Answer here. Answer here. Answer here."} />
                    </div>
                </div>
                <div className="right-side-wrapper">
                    <div className="right-side-image-wrapper">
                        <div>
                            <img src={PhoneMask} alt="PhoneMask.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ