function verificar() {
  var ano_nascimento = document.getElementById('ano_nascimento')
  var anos = new Date()
  var ano_atual = anos.getFullYear()
  var resultado = document.getElementById('resultado')

  if (ano_nascimento.value.length == 0 || ano_nascimento.value >= ano_atual) {
    resultado.style.color = 'red'
    resultado.innerHTML = '<p>[ERRO!!!] Verifique os dados e tente novamente!</p>'
  } else {
    resultado.style.color = 'green'
    var sexo = document.getElementsByName('radsex')
    var idade_pessoa = ano_atual - ano_nascimento.value
    var comS = (idade_pessoa > 1) ? 'anos' : 'ano'
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexo[0].checked) {
      genero = 'Mulher'
      if (idade_pessoa > 0 && idade_pessoa <= 10) {
        img.setAttribute('src', './imagens/criançamenina.jpg')
      } else if (idade_pessoa < 18) {
        img.setAttribute('src', './imagens/menina.jpg')
      } else if (idade_pessoa >= 18 && idade_pessoa < 65) {
        img.setAttribute('src', './imagens/mulher.jpg')
      } else if (idade_pessoa >= 65) {
        img.setAttribute('src', './imagens/idosa.jpg')
      }
    } else if (sexo[1].checked) {
      genero = 'Homem'
      if (idade_pessoa > 0 && idade_pessoa <= 10) {
        img.setAttribute('src', './imagens/criançamenino.jpg')
      } else if (idade_pessoa < 18) {
        img.setAttribute('src', './imagens/menino.jpg')
      } else if (idade_pessoa >= 18 && idade_pessoa < 65) {
        img.setAttribute('src', './imagens/homem.jpg')
      } else if (idade_pessoa >= 65) {
        img.setAttribute('src', './imagens/idoso.jpg')
      }
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `<p>Detectamos ${genero} com ${idade_pessoa} ${comS}</p>`
    resultado.appendChild(img)

  }
}
