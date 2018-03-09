import React, {Component} from 'react';


class FilterObject extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: [{name: 'sam'}, {name: 'seth'}, {name: 'stuart'}, {name: 'tim'}, {name: 'jerry'}, {name: 'jessica'}],
            userInput: '',
            filteredArray: [],
        }
    }

    updateUser(val){
        this.setState({userInput: val})
    }

    solver(){
        let arr = this.state.unFilteredArray.filter((val) => val[this.state.userInput])
        this.setState({
            filteredArray: arr
        })
}
    
    render() {
       return(
        <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input 
            className='inputLine'
            onChange={(e) => this.updateUser(e.target.value)}/>
        <button
            className='confirmationButton'
            onClick={() => this.solver()}>
            Submit</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
        </div>   
       ) 
    }
}

export default FilterObject;