import React, { Component } from 'react'

const subject = (Student) => {
    return class Hoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }

        inc_count = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
        render() {
            return (
                <div>
                    <Student fun_mode={this.inc_count} count={this.state.count} />
                </div>
            )
        }
    }
}
export default subject;