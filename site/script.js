var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

var text1 = 
'Eu te falei gatinha, que ia fazer o site e VAI DEMORAR PRA APAGAR KKKKKKK'

var text2 = 
'UFA DESCULPA POR APAGAR LENTO, O PROGRAMADOR É LINDO MAS É MONGO 🤬🤬🤬🤬'

var text3 = 
'QUERO DIZER QUE VOCÊ É UMA GATA E EU TO AMANDO ESSES MOMENTOS COM VC 👍🏽👍🏽👍🏽👍🏽👍🏽' +
' Já pensou em fazer canguru perneta comigo? se sim, bora kkkkkkkkkkkkkk Te vi esses dias e já to com saudade.,' +
' e não se esquece viu? a USP é sua e eu me sinto burro do shrek perto de vc. Vem ser meu dragão?' +
' Até ri agora lembrando de vc, cheirosa, linda e maravilhosa. Asho que to apaixonado kkkkkk. E digo mais! Quem te tem como amizade tem tudo, imagina quem te tem como amor rsrs' +
' Você é incrivel e sabe que  a terninha vai ser minha sogra kkkkkkkkkkkkkk.'

var text4 = 
' QUER UMA FRASE FOFA? VOU ESCREVER, (UM MONTE DE EMOJI APAIXONADO) parei de pedir presento pro papai noel quando vc apareceu (UM MONTE DE EMOJI APAIXONADO) 💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘'

typewriter.typeString('Eai minha vida, tudo bem?')
    .pauseFor(2500)
    .deleteAll()   
    .typeString(' Sim, criei um site pra elogiar a gata que você é hehe, ta dando uma risadinha né sua chatinha? kkkkk')
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