class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get valume() {
        return this._quantidade * this._valor;
    }
    get dataFormatada() {
        return `${this._data.getDate()}/${this._data.getMonth() + 1}/${this._data.getFullYear()}`;
    }
}
