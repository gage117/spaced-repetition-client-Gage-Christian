import React from 'react'
import Word from './Word'
import './WordList.css'


export default class WordsList extends React.Component {
    render() {
        let totalCorrect = 0;
        this.props.words.map(word => totalCorrect += word.correct_count)
        return(
            <div className='words-list-container'>
                <h3 className='words-list-header'>Words to practice</h3>
                <ul className='words-list-ul'>
                    {this.props.words.map(word => <Word key={word.id} word={word}/>)}
                </ul>
                <span className='words-list-score'>Total correct answers: {totalCorrect}</span>
            </div>
        )
    }
}