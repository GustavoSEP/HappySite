var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

var text1 = 
'Primeiramente vou começar agradecendo a Deus por você ter ido na minha festa aquele dia, quem diria que alguem que nunca vi na minha vida apareceria daquele jeito' +
' hoje é alguem que eu conto pra tudo na vida, sua energia é tão grande que conquista as pessoas a seu redor apenas com um simples sorriso.' +
' O simples sonar de dizer "Carolzinha" para quem te tem por perto, é mais que um nome, é alegria kkkkk. Quero agradecer pelos puxões de orelha' +
' Pelos conselhos, pode ter certeza que cada um deles esta guardadinho aqui comigo ❤️, porque são palavras de uma pessoa sensacional e pode ter certeza que enquanto vida eu tiver, to aqui para você também,' +
' infelizmente pra você não tem essa de algum dia nos pararmos de se falar ok, então deixa eu arrumar o texto grr. VAI DEMORAR PRA APAGAR KKKKKKK'

var text2 = 
'UFA DESCULPA POR APAGAR LENTO, O PROGRAMADOR É LINDO e VACILÃO 🤬🤬🤬🤬'

var text3 = 
'ENQUANTO VIDA EU TIVER VOU ESTAR TE PIRRAÇANDO 👍🏽👍🏽👍🏽👍🏽👍🏽' +
' Aproveite muito o seu dia, curta com as pessoas que você gosta, sorria, contagie assim como você faz naturalmente,' +
' Jamais perca a Carol que vc é por nada e por ninguém pq além de tudo e todos, você precisa apenas de vc mesma pra qualquer coisa' +
' Até ri agora lembrando de vc falando ALeeeeLUiiiIaaaaa kkkkkk. Quem te tem como amizade tem tudo, imagina quem te tem como amor rsrs' +
' Você é incrivel e sabe que kkkkk.'

var text4 = 
' TE AMO DE MAIS, APROVEITA MUITO SEU DIA!!!! 💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘'

typewriter.typeString('Eai minha vida, tudo bem?')
    .pauseFor(2500)
    .deleteAll()   
    .typeString(' Sim, criei um site como parabéns hehe, ta dando uma risadinha né sua chatinha? kkkkk')
    .pauseFor(1000)
    .deleteAll()
    .typeString('')
    .typeString(text1) 
    .deleteAll()
    .typeString(text2)
    .deleteAll()
    .pauseFor(1000)
    .typeString(text3)
    .pauseFor(1000)
    .typeString(text4)
    .start();