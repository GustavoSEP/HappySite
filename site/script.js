var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

var text1 = 
'Eai minha vida, tudo bem?'

var text2 = 
'Vou apagar lento fodasi 🤬🤬🤬🤬'

var text3 = 
'QUERO DIZER QUE VOCÊ É UMA GATA E EU TE AMO CABESA DE PICA 👍🏽👍🏽👍🏽👍🏽👍🏽' +
'OBRIGADO POR TUDO VIU? MUITO BOM ESTAR COM VC MINHA GATINHAAA' +
'EU SEI QUE VC É ANSIOSA E TEM MEDO DE NÃO CONSEGUIR REALIZAR SEUS SONHOS, E FICA SE COBRANDO MUITO POR ISSO MAS' +
'SAIBA QUE VC JÁ CONSEGUIU, VC É A MINHA PROGRAMADORA FAVORITA!' +
'CONTE COMIGO SEMPRE VIU? O MUNDO É TODO SEU!!!'

var text4 = 
' QUER UMA FRASE FOFA? VOU ESCREVER, (UM MONTE DE EMOJI APAIXONADO) parei de pedir presente pro papai noel quando vc apareceu (UM MONTE DE EMOJI APAIXONADO) 💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘💘'

typewriter.typeString('Boa noite pessaoll, vou mostrar a pessoa mais linda desse mundo. CONFIRA:')
    .pauseFor(2500)
    .deleteAll()   
    .typeString(' Sim, criei um site pra elogiar a gata que você é hehe, ta dando uma risadinha né cabesa de pica? kkkkk')
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