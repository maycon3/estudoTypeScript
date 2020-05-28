class Negociacao {

    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ){}

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get valume(){
        return this._quantidade * this._valor;
    }

    get dataFormatada():string {

        return `${this._data.getDate()}/${this._data.getMonth() + 1}/${this._data.getFullYear()}`;
    }
}