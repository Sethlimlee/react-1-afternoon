import React, {Component} from 'react';


class Sum extends Component {

    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

changeNumber1(value){
    this.setState({
        number1: parseInt(value,10)
    })
}

changeNumber2(value){
    this.setState({
        number2: parseInt(value, 10)
    })
}

sum(){
    this.setState({
        sum: this.state.number1 + this.state.number2
    })
}
    
    render() {
       return(
        <div
            className='puzzleBox sumPB'>
        <h4>
        Sum  
        </h4>
        <input
            placeholder='0'
            type='number'
            className='inputLine' 
            onChange={(event) => this.changeNumber1(event.target.value)}
        />  
        <input
            placeholder='0'
            type='number'
            className='inputLine' 
            onChange={(event) => this.changeNumber2(event.target.value)}
        />
        <button
            className='confirmationButton'
            onClick={(click) => this.sum()}>
            Submit
        </button>   
        <span
            className='resultsBox'>
        Sum: {this.state.sum}
        </span>
        </div>
       ) 
    }
}

export default Sum;