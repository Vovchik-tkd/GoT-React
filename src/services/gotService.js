export default class GotService {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api"
    }
    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResourse(`/characters?page=5&pageSize=10`);
        return res.map(this._transformCharacter);
    }

    async getCharacter(id) {
        const char = await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(char);
    }

    getAllHouses() {
        return this.getResourse(`/houses/`);
    }

    getHouse(id) {
        return this.getResourse(`/houses/${id}/`);
    }

    getAllBooks() {
        return this.getResourse(`/books/`);
    }

    getBook(id) {
        return this.getResourse(`/books/${id}`);
    }

    _transformCharacter(char) {
        const character = {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
        for (let key in character) {
            if (character[key] == '') {
                character[key] = '-';
            }
        }
        return character;
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publiser: book.publiser,
            released: book.released
        }
    }
}