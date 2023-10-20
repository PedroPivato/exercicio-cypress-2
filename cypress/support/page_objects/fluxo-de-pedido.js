class FluxoPedido {

    selecionarProduto(produto) {
        //ações do método
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('[class="product-block grid"]')
            .contains(produto).click()
    }
    finalizarCompra(nome, sobrenome, empresa, país, endereco, numero, cidade, estado, cep, telefone, email, pagamento) {
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        cy.get('#billing_company').clear().type(empresa)
        cy.get('#select2-billing_country-container').click().type(país + '{enter}')
        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_address_2').clear().type(numero)
        cy.get('#billing_city').clear().type(cidade)
        cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#payment_method_' + pagamento).click()
        //PAGAMENTO: CHEQUE = cheque TRANSFERENCIA = bacs PAGAMENTO ENTREGA = cod
        cy.get('#terms').click()
        cy.get('#place_order').click()
    }
}

export default new FluxoPedido()