import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import './FAQ_CARD.scss'

class FAQ_CARD extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            button: "+"
        }
    }

    toggleAnswer() {
        if (this.state.show === false) {
            this.setState({
                show: true,
                button: "-"
            })
        } else {
            this.setState({
                show: false,
                button: "+"
            })
        }
    }

    render() {
        return (
            <div className="faq-Card-Container">
                <div className="faq-card">
                    <div className="faq-question-wrapper">
                        <div className="faq-question">
                            {this.props.question}
                        </div>
                        <div className="faq-button" onClick={() => this.toggleAnswer()}>
                            {this.state.button}
                        </div>
                    </div>
                    <div className="faq-answer-wrapper" style={{ display: this.state.show ? "block" : "none" }}>
                        <div className="faq-answer">{this.props.answer}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FAQ_CARD