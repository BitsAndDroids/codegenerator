import React from 'react';
import {Board} from "./Board";
import './boards.css';

export class BoardBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            board: null
        };

    }

    componentDidMount() {
        this._loadObject('proMicro.JSON');

    }

    render() {

        if (this.state.board != null) {

        return (
            <div className={'boardContainer'} id={'boardRoot'}>
                <div className={'boardContent'}>
                    <div className={'leftPins pins'}>
                        <ul className={'extraFunc'}>
                            {this.state.board.leftPins.map(
                                value => (
                                    this.generateTableCell(value.extraFunctionality)
                                )
                            )}
                        </ul>

                        <ul className={'analog'}>
                            {this.state.board.leftPins.map(
                                value => (
                                    this.generateTableCell(value.analog)
                                )
                            )}
                        </ul>
                        <ul  className={'digital'}>
                            {this.state.board.leftPins.map(
                                value => (
                                    this.generateTableCell(value.digital)
                                )
                            )}
                        </ul>
                    </div>
                    <img src={'/boards/boardImages/' + this.state.board.imagePath} alt={this.state.board.name}
                         className={'boardImage'}/>
                    <div className={'rightPins pins'}>
                        <ul className={'digital'}>
                            {this.state.board.rightPins.map(
                                value => (
                                    this.generateTableCell(value.digital)
                                )
                            )}
                        </ul>
                        <ul className={'analog'}>
                            {
                                this.state.board.rightPins.map(
                                value => (
                                    this.generateTableCell(value.analog)
                                )
                            )}
                        </ul>

                        <ul className={'extraFunc'}>
                            {this.state.board.rightPins.map(
                                value => (
                                    this.generateTableCell(value.extraFunctionality)
                                )
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        );
    }

    }

    async _loadObject(path) {

        await Board.fetchBoard(path).then((boardFound)=> {
            this.setState({
                board : boardFound
            });

        });
        console.log(this.state.board.name);

    }
    generateTableCell(value){
        if(value === "" || value.length === 0){
            return (<li className={'emptyCell'}/>)
        } else{
            return (<li>{value}</li>)
        }
    }




}
