import React, {Component} from 'react';


class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: ['Mary', 'John', 'Joe', 'Liza'],
            userInput: '',
            filteredArray: [],
        }
    }

    updateUser(value){
        this.setState({userInput: value})
    }

    nameFilter(){
        let arr = [];
        for(let i = 0; i < this.state.unFilteredArray.length; i++){
            if(this.state.unFilteredArray[i].includes(this.state.userInput)){
                arr.push(this.state.unFilteredArray[i]);
            }
        }
        this.setState({
            filteredArray: arr
        })
    }

    render() {
       return(
        <div 
            className='puzzleBox filterStringPB'>
        <h4>
            Filter String
        </h4>
        <span 
            value={this.state.unFilteredArray}
            className='puzzleText'>Names: {JSON.stringify(this.state.unFilteredArray)}
        </span>
        <input 
            className='inputLine'
            onChange={(event) => this.updateUser(event.target.value)}
        />
        <button 
            className='confirmationButton'
            onClick={() => this.nameFilter()}>
            Submit
        </button>
        <span
            value={this.state.filteredArray}
            className='resultsBox filterStringRB'>
            Filtered Name: {JSON.stringify(this.state.filteredArray)}
        </span>
        </div>
       ) 
    }
}

export default FilterString;