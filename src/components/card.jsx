import React from "react";
// import dateFns from "date-fns";
import moment from 'moment';

class Card extends React.Component {


    state = {
        dayClicked: this.props.dayClicked,
        startTime: moment("07:30", "HH:mm"),
        endTime: moment("18:30", "HH:mm"),
        edit: false,
        isDataChanged: false
    }

    componentDidUpdate = () => {
        if (this.state.dayClicked !== this.props.dayClicked) {
            this.setState({
                dayClicked: this.props.dayClicked,
                startTime: moment("07:30", "HH:mm"),
                endTime: moment("18:30", "HH:mm")
            })
        }
    }

    setStartTime(event) {
        this.setState({
            startTime: moment(event.target.value, 'HH:mm'),
            isDataChanged: true
        })
    }

    setEndTime(event) {
        this.setState({
            endTime: moment(event.target.value, 'HH:mm'),
            isDataChanged: true
        })
    }

    editClick() {
        this.setState({
            edit: true
        })
    }
    saveClick() {
        this.props.editData(true);
        this.setState({
            edit: false,
            isDataChanged: false
        })
    }


    render() {
        if (this.props.dayClicked) {
            return (
                <div className="card">
                    <div className="card-body mx-auto">
                        <h5 className="card-title">Details</h5>
                        <h6 className="card-text">
                            <label>Start Time:</label>
                            <input type='time' className='form-control'
                                value={this.state.startTime.format('HH:mm')}
                                onChange={(e) => { this.setStartTime(e) }}
                                disabled={!this.state.edit} /><br />
                            <label>End Time:</label>
                            <input type='time' className='form-control'
                                disabled={!this.state.edit}
                                onChange={(e) => { this.setEndTime(e) }}
                                value={this.state.endTime.format('HH:mm')} />
                        </h6>
                        <h6>Total Price:</h6>
                        <strong>
                            {parseInt(moment.duration(this.state.endTime.diff(this.state.startTime)).asHours()) * 100} Rs
              </strong>

                        <div className='buttons'>
                            <button className='btn btn-secondary' onClick={() => this.editClick()}>Edit</button>
                            <button className='btn btn-primary' onClick={() => this.saveClick()} disabled={!this.state.isDataChanged}>Save</button>
                        </div>
                    </div>
                </div>


            )
        } else {
            return (
                <div></div>
            )
        }
    }

}

export default Card;


