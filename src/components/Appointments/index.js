// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: [], isFiltered: false}

  onAdd = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: v4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  onFilter = () => {
    const {isFiltered} = this.state
    this.setState({isFiltered: !isFiltered})
  }

  getFilteredList = () => {
    const {isFiltered, appointmentsList} = this.state
    if (isFiltered) {
      return appointmentsList.filter(each => each.isStarred === true)
    }
    return appointmentsList
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date1: event.target.value})
  }

  togglingStar = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(each => {
        if (each.id === id) {
          return {
            ...each,
            isStarred: !each.isStarred,
          }
        }
        return each
      }),
    }))
  }

  onClickStarred = () => {}

  render() {
    const {title, date1} = this.state
    const filteredList = this.getFilteredList()
    return (
      <div>
        <form onSubmit={this.onAdd}>
          <h1>Add Appointment</h1>
          <label htmlFor="title">TITLE</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.onChangeTitle}
            placeholder="Title"
          />
          <br />
          <label htmlFor="date">DATE</label>
          <input
            type="date"
            id="title"
            value={date1}
            onChange={this.onChangeDate}
          />
          <button type="submit">Add</button>
        </form>
        <h1>Appointments</h1>
        <button type="button" onClick={this.onFilter}>
          Starred
        </button>
        <ul>
          {filteredList.map(each => (
            <AppointmentItem
              details={each}
              key={each.id}
              toggleStar={this.togglingStar}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Appointments
