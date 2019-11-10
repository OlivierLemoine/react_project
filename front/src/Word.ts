export enum Article {
    Der = "der",
    Die = "die",
    Das = "das",
}

export function articleFromString(s: string): Article {
    if (s === "der" || s === "Der") {
        return Article.Der;
    } else if (s === "die" || s === "Die") {
        return Article.Die;
    } else {
        return Article.Das;
    }
}

export interface Word {
    name: string
    article: Article
}