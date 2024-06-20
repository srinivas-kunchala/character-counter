import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

// Replace your code here
class App extends Component {
  state = {characterCountList: [], character: ''}

  onChangeCharacter = event => {
    this.setState({character: event.target.value})
  }

  addCharacters = event => {
    event.preventDefault()
    const {character} = this.state

    const newWord = {
      id: uuidv4(),
      word: character,
      count: character.length,
    }

    this.setState(previousState => ({
      characterCountList: [...previousState.characterCountList, newWord],
      character: '',
    }))
  }

  render() {
    const {character, characterCountList} = this.state
    console.log(characterCountList)
    return (
      <div className="main-app-container">
        <div className="app-container">
          <h1 className="main-heading">Character Counter</h1>
          <form className="input-container" onSubmit={this.addCharacters}>
            <input
              type="text"
              placeholder="Enter the Characters here"
              onChange={this.onChangeCharacter}
              value={character}
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="character-container">
          <div className="heading-container">
            <h1 className="character-container-heading">
              Count the characters like a Boss...
            </h1>
          </div>
          {characterCountList.length === 0 ? (
            <div className="no-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image"
              />
            </div>
          ) : (
            <div>
              <ul>
                {characterCountList.map(eachItem => (
                  <li key={eachItem.id}>
                    <p className="count">
                      {eachItem.word} : {eachItem.count}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App
