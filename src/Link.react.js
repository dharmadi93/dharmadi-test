import React from 'react'

export default class Link extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentClass: 'normal'
        }
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    onMouseEnter() {
        this.setState({
            currentClass: 'hovered'
        })
    }

    onMouseLeave() {
        this.setState({
            currentClass: 'normal'
        })
    }

    render() {
        return(
            <a className={this.state.currentClass} href={this.props.page || '#'} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                {this.props.children}
            </a>
        )

    }
}