import React from 'react';
import Article from './article'
import Timer from "./Timer";


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
            chosenArticle: ''
        };

        //this.state = {article : 'der'};
    }

    GetWords() {
        return fetch('/api/words').then(res => res.json()).then(val => val.data).catch(reason => console.log(reason));
    }
    GetRandName(list) {
        //console.log(list);
        //let RandObjList = []
        //for (var i=0;i<list.length;i++){
        //RandObjList.push(list[i].name);
        //}
        let FullWorld = random_item(list);
        this.state.Name = FullWorld.name;
        this.state.Article = FullWorld.article;
        //let RandObj = random_item(list.data);
        //console.log(RandObj);
        return this.state.Article + this.state.Name;
    }
    componentDidMount() {
        this.GetWords().then(data => {
            this.setState({ ListName: data })
        })
    }

    verifArticle(art) {
        if (this.state.Article == art) {
            console.log('VICTOOOIRE');
        }
        else {
            console.log('Défaite royale')
        }
    }

    render() {
        //const isListFull = this.state.ListName;

        return (
            <div>

                {this.state.ListName.length > 0 &&
                    this.GetRandName(this.state.ListName)}
                <div>
                    <Timer sec={10} isRunning={false} onEnd={() => { console.log("end") }} />
                    <Article article={MascArt} onClick={(art) => this.verifArticle(art)} />
                    <Article article={FemArt} onClick={(art) => this.verifArticle(art)} />
                    <Article article={NeutrArt} onClick={(art) => this.verifArticle(art)} />
                </div>
            </div>
        );

    }
}
//{this.state.List()}

//  <Fetch onLoaded={(a,b) => console.log(b)}/>

//<button onClick={this.GetWords()} value="Click me" />
