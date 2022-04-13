import React from 'react';
import {Board} from "./Board";


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
                    <div className={'leftPins'}>
                        <ul>
                            {this.state.board.leftPins.map(
                                value => (
                                    <li>{value.digital}</li>
                                )
                            )}
                        </ul>
                    </div>
                    <img src={'/boards/boardImages/' + this.state.board.imagePath} alt={this.state.board.name}
                         className={'boardImage'}/>
                    <div className={'rightPins'}>2</div>

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


}
