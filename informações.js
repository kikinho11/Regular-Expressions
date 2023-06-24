/*
  ! Tags

 ? "g" - global (encontra todas as ocorrências) 
 ? "i" - insensitive (encontra ocorrência que seja minuscula ou maiuscula)
 ? "m" - multiline (permite ler multiplas linhas)
 ? "()" - (Serve para separar grupos)
 ? "|" - (Ou)

  ! Quantificadores

 ? "*" (opcionais) 0 ou n {0,}
 ? "+" (obrigatório) 1 ou n {1,}
 ? "?" (opcionais) 0 ou 1 {0,1}
 ? "\" Caractere de escape
 ? {n,m} mínimo e máximo

 ! Greedy e Non Greedy
 ? Colocar "?" depois de um quantificador faz com que a expressão regular pare de ser greedy

 * Exemplo

 const { html } = require('./base');

 console.log(html.match(/<.+>.+<\/.+>/g));  // greedy
 console.log(html.match(/<.+?>.+?<\/.+?>/g));  // non-greedy

 ! Range
 
 ? [abc] -> Conjunto 
 ? [^] -> Negação
 ? [0-9]

 ! Termina e começa com

 ? ^ -> Começa com
 ? $ -> Termina com

 * Isto força a expressão regular a ter de obrigatóriamente começar ela com o próximo campo da expressão regular
 * Exemplo

 const ip = '0.0.0.0'
 const ip2 = ' 0.0.0.0'
 const ip3 = '0.0.0.0 '

 const ipRegExp = /^([0-9].){3}[0-9]$/

 console.log(ip.match(ipRegExp));
 console.log(ip2.match(ipRegExp)); (Este ip não vai ser pego como válido porque tem um espaço no começo)
 console.log(ip3.match(ipRegExp)); (Este ip não vai ser pego como válido porque tem um espaço no final)

 ! Retrovisores

 ? $1 - Retrovisor do grupo 1
 * Tu pode "alterar" grupos com replace (Não tem como alterar ele 100% mas dá para adicionar coisas)
 * Se tiver um grupo dentro de um grupo, tu pode alterar o segundo grupo
  
 ! Lookahead  e Lookbehind

 const { lookahead } = require('./base');

 ! Lookahead - Procura na frase toda pela palavra específica
 ? Positive Lookahead - (?=_COISAS_) (Ele vai procurar a frase toda e ver se acha a palavra específica que tu quer achar)
 * Exemplo: Quero achar as linhas que estão active
 console.log(lookahead.match(/.+(?=[^in]active)/gim))
 * Exemplo: Quero achar as linhas que estão inactive
 console.log(lookahead.match(/.+(?=\s+inactive)/gim))

 ? Negative lookahead - (?!_COISAS_) (Ele vai procurar a frase toda e ver se a frase não tem a palavra específica que tu quer achar)
 * Exemplo: Quero achar as linhas que não tem active
 console.log(lookahead.match(/^(?!.+[^in]active).+$/gim))
 * Exemplo: Quero achar as linhas que não tem inactive
 console.log(lookahead.match(/^(?!.+inactive).+$/gim))

 ! Lookbehind - Procura do final da frase até ao começo pela palavra específica
 ? Positive lookbehind - (?<=_COISAS_) (Ele vai procurar frases que começam com a palavra específica que tu quer achar)
 * Exemplo: Quero achar linhas que estão Online
 console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*«/gim)) (Tem de tirar o «)
 * Exemplo: Quero achar linhas que estão Offline
 console.log(lookahead.match(/(?<=OFFLINE\s+)\S+.*«/gim)) (Tem de tirar o «)

 ? Negative lookbehind (?<!_COISAS_) (Ele vai procurar frases que não começam com a palavra específica que tu quer achar)
 * Exemplo: Quero achar linhas que não estão Online
 console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim))
 * Exemplo: Quero achar linhas que não estão Offline
 console.log(lookahead.match(/^.+(?<!OFFLINE.+)$/gim))

 ! Links
 ? Cheat Sheet de Expressões Regulares
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet

 ? Site para testar Expressões Regulares e exatamente como fazem
 https://regex101.com
 */