if  (confirm('Você já tem cadastro?')) {
    console.log("Usuário clicou em OK")
    var cgmail = window.prompt('Insira seu e-mail: ')
    var csenha = window.prompt('Insira sua senha: ')
    var kortaq = csenha == "#2103Meir!"?"foi encontrada":"não foi encontrada"
    document.write(`<div id="caixa"><h1><strong>Sua conta ${kortaq}</strong></h1></div>`)
} else {
    console.log("Usuário clicou em Cancelar")
    var nome = window.prompt('Qual é seu nome completo?')
    var idade = Number(window.prompt('Qual é sua idade?'))
    var nascimento = window.prompt('Qual é sua data de nascimento?')
    var genero = window.prompt('Qual é seu gênero?')
    var salario = Number(window.prompt('Qual é o seu salário?'))
    var gmail = window.prompt('Qual é seu endereço de e-mail mais ultilizado?')
    var senha = window.prompt('Insira uma senha com mais de 6 dígitos: ')
    var telefone = window.prompt('Qual é seu número de telefone?')
    var endereço = window.prompt('Diga respectivamente seu endereço: Rua, Número, Cidade, Estado, CEP abaixo:')
    var habilidade = window.prompt('Quais são suas principais habilidades?')
    window.alert(`Parabéns ${nome}! seu formulário foi comcluído!`)
    document.write(`<div class="caixa-nome">Seu nome é: <strong>${nome}</strong><br></div>`)
    document.write(`<div class="caixa-nome">Sua idade é: <strong>${idade}</strong><br></div>`)
    document.write(`<div class="caixa-nome">Sua data de nascimento é: <strong>${nascimento}</strong><br></div>`)
    document.write(`<div class="caixa-nome">Seu gênero é: <strong>${genero}</strong><br></div>`)
    document.write(`<div class="caixa-nome">Seu salário mensal é: <strong>${salario}</strong><br></div>`)
    document.write(`<div class="caixa-nome">Seu endereço de e-mail é: <strong>${gmail}</strong><br></div>`)
    document.write(`<div class="caixa-nome">Seu número de telefone é: <strong>${telefone}</strong><br></div>`)
    document.write(`<div class="caixa-nome">Seu endereço é: <strong>${endereço}</strong><br></div>`)
    document.write(`<div class="caixa-nome">Sua(s) habilidade(s) são: <strong>${habilidade}</strong><br></div>`)
    document.write(`<div class="caixa-nome">Sua senha é: <strong>${senha}</strong><br></div>`)
}