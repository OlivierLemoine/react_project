enum Article {
    Der = "der",
    Die = "die",
    Das = "das",
}

export interface Word {
    name: string
    article: Article
}