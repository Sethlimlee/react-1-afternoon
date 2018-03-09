import React, {Component} from 'react';


class Palindrome extends Component {
    constructor(){
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

    handleInput(value){
        this.setState({userInput: value})
    }

    thePalindrome(){
        var forward = this.state.userInput;
        var backwards = this.state.userInput;
        backwards = backwards.split('');
        backwards = backwards.reverse();
        backwards = backwards.join('');

        if(forward === backwards){
            this.setState({palindrome: 'true'})
        } else{
            this.setState({palindrome: 'false'})
        }
    };


    render() {
       return(
        <div
            className='puzzleBox filterStringPB'>
        <h4>
            Palindrome
        </h4>
        <input 
            className='inputLine'
            onChange={(event) => this.handleInput(event.target.value)}/>
        <button
            className='confirmationButton'
            onClick={() => this.thePalindrome()}>
            Submit
        </button>
        <span
            className='resultsBox'>
        Palindrome?  {this.state.palindrome}
        </span>
        </div>
       ) 
    };
};

export default Palindrome;