# Modal box creator
 Uma solução fácil para criar caixas modais no front-end
 
___
 
## Como usar
 Copie os arquivos `modalBoxCreator.js` e `modalBoxCreator.css` para a pasta do seu projeto

### Importando o CSS
 Copie e cole a folha de estilo `<link>` em seu `<head>` na posição correta: Antes de todos os outros arquivos css até mesmo o bibliotecas como o bootstrap
 ```
 <head>
   <link rel="stylesheet" href="./css/modalBoxCreator.css">
   <link rel="stylesheet" href="otherDependencies">   
   <link rel="stylesheet" href="./css/yourOwnStylesheets">
 </head>
 ```
 
 ### Importando JS
  Copie e cole a folha de sript `<script>` no fim do `<body>` antes de todos os outros scripts `<script>`
 ```
 <body>
   ...code
   <script src="./js/modalBoxCreator.js">
   <script src="otherDependencies">
   <script src="yourOwnScripts">
 </body>
 ```
 
 ### Usando o renderizador
  Para renderizar a caixa modal basta chamar a função `renderModalBox()` passando um objeto de configuração. As caixas modais podem ser de três tipos: alert, confirm e input. Todas retornam algum valor: Alert sempre retorn `true`, Confirm retorna `true` ou `false` dependendo de qual botão o usuário clicou e Input retorna `input.value` ou `false`.
<br>
### Configurando a caixa modal
#### Sintaxe 
 `renderModalBox(object)`
#### Descrição
 A Função `renderModalBox()` recebe um objeto de configuração e retorna uma promisse que é resolvida assim que o usuário clicar em um dos botões ou quando ele clicar fora da caixa modal (fechando-a imediatamente)
 Segue abaixo a lista de propriedades no seguinte formato:
  * < propriedade >: (required ou optional), (preseted ou not preseted) [presented options] (default: '...')
 <br><br>
 **Propriedades:**
  * type: optional, preseted ['alert', 'confirm', 'input'] (default: 'alert')
  * title: required, not preseted (no default value)
  * description: optional, not preseted (no default value)
  * buttons: optional, not preseted (default: {ok: 'Ok', cancel: 'Cancelar'})
    * ok: optional, not preseted (default: 'Ok')
    * cancel: optional, not preseted (default: 'Cancelar')
  * placeholder: optional, not preseted (no default value)
  
### Exemplos
#### Alert simples
```
renderModalBox({title: 'My Alert'})
```
#### Alert com descrição
```
renderModalBox({title: 'My alert', description: 'A simple description about my alert'})
```
#### Botão 'Ok' personalizado
```
renderModalBox({
  title: 'My alert',
  description: 'Simple description',
  buttons: {
    ok: 'My own "Ok" Button'
  }
})
```
#### Usando Confirm
```
renderModalBox({
  type: 'confirm',
  title: 'My Question',
  description: 'Do you want this?'
  buttons: {
    ok: 'Yes, I want',
    cancel: "No, I don't"
  }
})
.then(response => {
  if(response){
    console.log('accepted')
  }else{
    console.log('rejected')
  }
})
```

#### Usando Input
```
renderModalBox({
  type: 'input',
  title: 'What is your name?'
  description: 'Please type only your first name',
  buttons: {
    ok: 'Confirmar'
  }
  placeholder: 'First name'
})
.then(name => {
  if(name){
    console.log(name)
  }
})
```
