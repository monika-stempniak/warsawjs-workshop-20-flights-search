import React from 'react'

class SearchView extends React.Component {
  state = {
    fromValue: "WAW",
    toValue: "WAW",
    departValue: "",
    returnValue: ""
  }

  onFromChange = (e) => {
    console.log(e.target.value)
    this.setState({
      fromValue: e.target.value
    })
  }

  onToChange = (e) => {
    console.log(e.target.value)
    this.setState({
      toValue: e.target.value
    })
  }

  onDepartChange = (e) => {
    this.setState({
      departValue: e.target.value
    })
  }

  onReturnChange = (e) => {
    this.setState({
      returnValue: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    if (this.state.toValue === "") {
      return;
    }

    if (this.state.fromValue === "") {
      return;
    }

    if (this.state.departValue === "") {
      return;
    }

    if (this.state.returnValue === "") {
      return;
    }
    this.props.onAppSubmit({...this.state})
  }

  render() {
    console.log(this.props)
    const {fromValue, toValue, departValue, returnValue} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          <strong>From</strong>
          <select value={fromValue} onChange={this.onFromChange}>
            <option value="WAW">WAW</option>
            <option value="ATL">ATL</option>
          </select>
        </label>
        <label>
          <strong>To</strong>
          <select value={toValue} onChange={this.onToChange}>
            <option value="WAW">WAW</option>
            <option value="ATL">ATL</option>
          </select>
        </label>
        <label>
          Depart
          <input type="date" value={departValue} onChange={this.onDepartChange}/>
        </label>
        <label>
          <strong>Return</strong>
          <input type="date" value={returnValue} onChange={this.onReturnChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}


export default SearchView
