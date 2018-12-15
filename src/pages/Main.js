import React, { Component } from 'react';
import '../css/main.css';
import monitor from '../svg/monitor.svg';

class Main extends Component {
    render() {
        return (
            <div id="section-main" className="section">
                <div className="flex">
                    <div className="flex-item">
                        <img src={monitor} alt="monitor" />
                    </div>
                    <div className="flex-item">
                        <h1>Hello!</h1>
                        <p>This is currently a work in progress. Please come back another time!</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;