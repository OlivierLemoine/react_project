import React from 'react';
import Article from './article'
import Chrono from './chronometer'


function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}

const MascArt = 'der';
const FemArt = 'die';
const NeutrArt = 'das';

export default class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListName: [],
            Name: '',
            Article: '',
            Score:0
        };

    }

    GetWords() {
        return fetch('/api/words').then(res => res.json()).then(val => val.data).catch(reason => console.log(reason));
    }
    GetRandName(list) {

        let FullWorld = random_item(list);
        this.state.Name = FullWorld.name;
        this.state.Article = FullWorld.article;
        return this.state.Name;
    }
    componentDidMount() {
        this.GetWords().then(data => {
            this.setState({ ListName: data })
        })
    }

    verifArticle(art) {
        if (this.state.Article == art) {
            this.GetRandName(this.state.ListName);
            this.componentDidMount();
            console.log('VICTOOOIRE');
            this.setState({Score: this.state.Score+1});
            console.log(this.state.Score);
        }
        else {
            this.GetRandName(this.state.ListName);
            this.componentDidMount();
            console.log('Défaite royale')
        }
    }


    render() {
        //const isListFull = this.state.ListName;

        return (
            <div>


                <div>
                    <Chrono />
                    <h1 className='center-align'>{this.state.Score}</h1>
                    <div className="card-panel teal lighten-2 center-align">

                    {this.state.ListName.length > 0 &&
                      this.GetRandName(this.state.ListName)}
                      </div>

                    <div className='center-align'>
                    <div className='row'><Article  article={MascArt} onClick={(art) => this.verifArticle(art)}/></div>
                    <div className='row'><Article article={FemArt} onClick={(art) => this.verifArticle(art)} /></div>
                    <div className='row'><Article article={NeutrArt} onClick={(art) => this.verifArticle(art)} /></div>

                    </div>


                </div>
            </div>
        );

    }
}
//{this.state.List()}

//  <Fetch onLoaded={(a,b) => console.log(b)}/>

//<button onClick={this.GetWords()} value="Click me" />
