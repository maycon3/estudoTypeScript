class NegociacoesView extends View<Negociacoes> {

 
    template(model:Negociacoes):string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${
                    model.paraArray().map(negociacao=>
                        `
                            <tr>
                                <td>${negociacao.dataFormatada}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.valume}</td>
                            </tr>
                        `
                    ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>  
        `;
    }
}