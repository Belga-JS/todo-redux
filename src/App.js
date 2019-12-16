import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css';



class App extends Component {
  add = () => {
    let text = this.props.changeText,
      undo = "text-normal"
    this.props.ADD_TODO(text, undo)
  }

  render() {
    return (
      <div>

        <div id="myDIV" className="header">
          <div className="text">
            <h2>To-Do APP!</h2><br />
            <p>ADD NEW TO-DO</p>
          </div>
          <div>
            <input type="text" placeholder="Enter New Task" onChange={(e) => this.props.CHANGE_TXT(e)} /><br /><br /><br />
            <span className="addBtn" onClick={this.add}>Add </span>
          </div>
        </div>
        <div className="get-work">
          <h3> Let's get Some Work done!</h3>
          {this.props.listTodoReducers.map((el, i) => {
            return (
              <p key={i}><span>{el.text}</span><button className="btn1" onClick={() => this.delete(el.id)}>delete</button> </p>

            )


          }





          )
          }



        </div >
      </div >

    );
  }
}

const mapDispatchToProps = ({ dispatch }) => {
  return {
    ADD_TODO: (text, undo) => {
      dispatch({ type: 'ADD_TODO', text: text, undo: undo })
    },

    CHANGE_TXT: (e) => {
      dispatch({ type: 'CHANGE_TXT', value: e.target.value })
    }

  }
}


const mapStateToProps = ({ listTodoReducers, ChangeTextReducers }) => {
  return {
    listTodoReducers: listTodoReducers,
    changetext: ChangeTextReducers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
