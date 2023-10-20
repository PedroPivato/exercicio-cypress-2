/// <reference types="cypress" />
import FluxoPedido from "../support/page_objects/fluxo-de-pedido";
const dadosProduto = require('../fixtures/produtos.json')
const dadosCheckout = require('../fixtures/checkout.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
        FluxoPedido.selecionarProduto('Abominable Hoodie')
        cy.addProdutos(
            dadosProduto[1].tamanho, 
            dadosProduto[1].cor, 
            dadosProduto[1].quantidade
            )
        cy.get('.woocommerce-message').should('contain', ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

        FluxoPedido.finalizarCompra(
            dadosCheckout[1].nome,
            dadosCheckout[1].sobrenome,
            dadosCheckout[1].empresa,
            dadosCheckout[1].país,
            dadosCheckout[1].endereco,
            dadosCheckout[1].numero,
            dadosCheckout[1].cidade,
            dadosCheckout[1].estado,
            dadosCheckout[1].cep,
            dadosCheckout[1].telefone,
            dadosCheckout[1].email,
            dadosCheckout[0].pagamento
        )

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
        
    });


})
