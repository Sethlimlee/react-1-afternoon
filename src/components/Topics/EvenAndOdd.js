import React, {Component} from 'react';


class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateUser(val){
        this.setState({userInput: val})
    }

    solver(val){
        let num = Number(this.state.userInput);
        if(num %2 === 0){
            this.setState({
                evenArray: [...this.state.evenArray, num,", "]
            })
        } else {
            this.setState({
                oddArray: [...this.state.oddArray, num,", "]
            })
        }
    }

    render() {
       return(
        <div className='puzzleBox evenAndOddPB'>
        <h4>Evens and Odds</h4>
        <input
            className='inputLine'
            onChange={(e) => this.updateUser(e.target.value)}
            type='text'/>
        <button 
            className='confirmationButton'
            onClick={() => this.solver()}>
            Submit Answer</button>
        <span className="resultsBox" >Evens: {this.state.evenArray}</span>
        <span className="resultsBox">Odds: {this.state.oddArray}</span>
        </div>
       ) 
    }
}

export default EvenAndOdd;