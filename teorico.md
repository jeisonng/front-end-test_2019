# Teste teórico

### CSS

1\) Na sua opinião, quais os melhores recursos para inclusão de imagens em um site/aplicação? 
E o que você acha interessante não utilizar?
Justifique levando em consideração boas práticas, estilização e formato de arquivos.

```js
Acredito que o melhor recurso atualmente é utilizar imagens como background em divs devido a facilidade de manipulação e inserção de outros elementos no container da div.
```


.

2\) Você conhece algum padrão/metodologia que auxilie a estilização de uma aplicação? 
Explique um pouco através de exemplos;


```js
O padrão que coneheço é utulizar o css em um arquivo saparado do código, evitado a tag <style> e o stilo inline.
exemplos:
body {
  color: blue;
}

h1 {
  color: green;
}
</style>

<span style="color:blue;">Texto</span>
```




3\) Se tratando de aplicações responsivas, quais práticas/recursos você costuma utilizar? 
Tem algum exemplo que você não acha interessante?


```js
Inicio as aplições utilizando o conceito mobile first, para resposividade utilizo bootstrap e media querys.
```




4\) Analisando as tags e estilos abaixo, aponte os principais problemas encontrados e reescreva-os;

**Leve em consideração que as tags abaixo estão no meio de uma página html qualquer**


- HTML:
```
	<div class="lista-grande">
		<h1>Lorem Ipsun Dolor</h1>
			
		<span class="list-item-holder">	
			<ul>
				<li class="item">
					<label class="item__input-radio">
						<input type=radio>
						<span>1 item</span>
					</label>
				</li>
				<li class="item">
					<label  class="item__input-radio item__input-radio--cor-diferente">
						<input type=radio>
						<span>2 item</span>
					</label>
				</li>
				<li class="item" id="ultimo-item">
					<label  class="item__input-radio">
						<input class type=radio>
						<span>3 item</span>
					</label>
				</li>
			</ul>
		</span>
	</div>
  
```


- Estilos:
```
    .lista-grande{
        display: block;
    }

    .lista-grande h1{
        font-size: 18px;
    }

    .list-item-holder .item{
        list-style-type: decimal-leading-zero !important;
        padding: 1rem;
        width: 100%;
    }


    .list-item-holder ul li{
        list-style-type: thai;
    }

    .list-item-holder .item .item__input-radio{
        padding: 25px;
            border: solid 1px orange;
        display: flex;
        border: solid 1px #eadabd;
        background: aliceblue;
    }

    .item__input-radio--cor-diferente{
        border: solid 1px #eadabd;
        background: #a0abb5;
    }


    .item__input-radio--cor-diferente {
        @media (min-width: 480px) {
            background: #a0abb5;
        }
    }
    .item__input-radio--cor-diferente {
        @media (max-width: 480px) {
            background: transparent;
        }

    }

```

```js
Primeiro problema indentificado: a tag <span> sendo utilizada como container.
Segundo problema indentificado: a classe item possui width de 100% fazendo com que o conteudo saia da tela.
Terceiro problema indentificado: nas classes ".list-item-holder .item .item__input-radio" existem duas declarações para border.
Quarto problema indentificado: Texto das listas sai do container com dispositivos muito pequenos.
Quinto problema indentificado: Media query incorreto.
```
```
Correções:

-HTML:
 <div class="lista-grande">
		<h1>Lorem Ipsun Dolor</h1>
			
		<div class="list-item-holder">	
			<ul>
				<li class="item">
					<label class="item__input-radio">
						<input type=radio>
						<span>1 item</span>
					</label>
				</li>
				<li class="item">
					<label  class="item__input-radio item__input-radio--cor-diferente">
						<input type=radio>
						<span>2 item</span>
					</label>
				</li>
				<li class="item" id="ultimo-item">
					<label  class="item__input-radio">
						<input class type=radio>
						<span>3 item</span>
					</label>
				</li>
			</ul>
		</div>
    </div>


-CSS:        
 .lista-grande {
            display: block;
        }

        .lista-grande h1 {
            font-size: 18px;
        }

        .list-item-holder {
            list-style-type: decimal-leading-zero !important;
            padding: 1rem;
        }

        .item {
            list-style-type: decimal-leading-zero !important;
            padding: 1rem;
            min-width: 120px;
        }


        .list-item-holder ul li {
            list-style-type: thai;
        }

        .list-item-holder .item .item__input-radio {
            padding: 25px;
            border: solid 1px orange;
            display: flex;
            background: aliceblue;
        }

        .item__input-radio--cor-diferente {
            border: solid 1px #eadabd;
            background: #a0abb5;
        }


        @media screen and (min-width: 480px) {
            .item__input-radio--cor-diferente {
                background: #a0abb5 !important;
            }
        }

        @media screen and (max-width: 480px) {
            .item__input-radio--cor-diferente {
                background: transparent !important;
            }

        }
    ´´´




5\) Analisando os estilos em `Nesting` do código abaixo, descreva, caso exista, os problemas gerados e as possíveis soluções;

```
    .form-holder {
        width: 100%;
        margin-bottom: 25px;

        .form-item {
            .item-name,
            .item-lastname,
            .item-genre,
            .item-email,
            .item-document-type,
            .item-document-number,
            .item-expiration-date,
            .item-country {
                input, select, textarea {
                    border: none;
                    padding: none;
                    box-shadow: none !important;

                    &.error{
                    background: red;
                    }
                }
                input[disabled], select[disabled], input[readonly], select[readonly] {
                    background-color: #FFF;
                }
            }
            
        }
    }

```

```js
Atualmente não é possivel usar essa forma de aninhamento(".form-item", ".item-country {input, select, textarea" e "&.error") e com css(existem casos com sass e less que permitem)

Na minha opinião essa seria a melhor solução:

.form-holder .form-item {
            width: 100%;
            margin-bottom: 25px;
        }

        .item input,
        select,
        textarea {
            border: none;
            padding: none;
            box-shadow: none !important;
        }
        
        .error {
            background: red;
        }

        input:disabled,
        select:disabled,
        input:read-only,
        select:read-only {
            background-color: #FFF;
        }
```



---


### Javascript

1\) Cite dois recursos do javascript para o tratamento de processamentos assíncronos e explique as diferenças entre eles.

```js
Promise:
  Elas são realizadas de forma sequência sempre que o resolve é executado ele retorna para o .the() da função, em caso de erro podemos
  usar o .catch() para tratar o mesmo.
Async/Await:
  O async/await deixa o código mais claro e legível tornando mais fácil o tratamento das respostas e ajuda na manutenção do código.
```




2\) Quanto tempo vai demorar para o código a seguir imprimir "finished"? Justifique. (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```
    function doSomething() {
        return new Promise(resolve => {
            setTimeout(resolve, 1000)
        })
    }

    function doSomethingElse() {
        return new Promise(resolve => {
            setTimeout(resolve, 2000)
        })
    }

    somePromise()
        .then(() => {
            doSomething()
            doSomethingElse()
        })
        .then(() => {
            console.log('finished')
        })

```

```js
Irá levar cerca de 1 segundos pois ele vai não vai esperar o doSomething() doSomethingElse() retornarem do setTimeout
```




3\) O que o código a seguir imprime? (Levando em consideração que somePromise() vai retornar uma Promise resolvida)

```	
	somePromise()
	    .then(() => {
		throw new Error('uh oh!')
	    }, err => {
		console.log(err.message)
	    })
	    .then(() => {
		console.log('ok now!')
	    })

```

```js
Nesse caso não irá imprimir nada pois o codigo necessita de um .catch() para que o throw seja tratado de maniera correta.
```



4\) Melhore a função a seguir:

```
	function getTransactions() {
	    return $q((resolve, reject) => {
		$http.get(BASE_URL + '/api/transacoes')
		    .then(response => {
		        if (!response.data.error) {
		            const transactions = response.data

		            var _transactions = []

		            for (var i in transactions) {
		                if (transactions[i].realizada)  {
		                    _transactions.push({
		                        id: transactions[i].id,
		                        value: transactions[i].valor,
		                        type: transactions[i].valor < 0 ? 'transference' : 'deposit',
		                    })
		                }
		            }

		            resolve(_transactions)
		        } else {
		            reject(response.data.error)
		        }
		    })
		    .catch(e => reject(e))
	    })
    }

```


```js
function filterTransaction(item) {
  return item.realizada;
}

function mountObject(item) {
  const data = {
    id: item.id,
    value: item.valor,
    type: item.valor < 0 ? "transference" : "deposit",
  };
  return data;
}
async function getTransactions() {
  try {
    const { data } = await $http.get(BASE_URL + "/api/transacoes");
    if (data.error) throw new Error("Bad request");
    else {
      const { transactions } = data;
      const _transactions = transactions.filter(filterTransaction).map(mountObject);
    }
  } catch (error) {
    console.log(error)
  }
```



5\) Dado um array de objetos, no qual cada objeto representa uma pessoa e possui as propriedades `name` e `age`, por exemplo:
```
    [
        { name: 'Rick Sanchez', age: 70 } ,
        { name: 'Morty Smith', age: 14 }
    ]

```

Crie funções para:
1. Retornar uma o array ordenado alfabeticamente pelos nomes;
2. Fazer o somatório das idades;
3. Verificar se alguma pessoa tem a idade maior que 50 (espera-se um retorno booleano).
4. Verificar se todas pessoas tem a idade menor que 20 (espera-se um retorno booleano).
5. Remover o primeiro nome de todas as pessoas.
6. Dado um determinado nome, retornar o primeiro objeto que corresponda a este nome.

*Obs.: As funções criadas devem atender arrays de qualquer tamanho.*


```js

1: function sortName(item) {
  const sorted = item.sort((a, b) => {
    return (a.name > b.name) - (a.name < b.name)
  });
  return sorted
}

2: function someAges(item) {
 let some = 0
 for (const i of item) {
   some += i.age
 }
 return some
}

3: function verifyAgeHigh(item) {
  for (const i of item) {
     return i.age > 50
  }
  return false
 }

 4: function verifyAgeLow(item) {
  for (const i of item) {
     return return !(i.age > 20)
  }
  return true
 }

 5: function romoveName(item) {
  for (const i of item) {
     const newName = i.name.split(" ")
     i.name = newName[1] || ""
  }
  return item
 }

 6:function verifyAgeHigh(name,item) {
  for (const i of item) {
    if(name === i.name)
    return i
  }
  return ""
 }



// Resposta
```



6\)Dado o seguinte trecho de código:

```
	const getDiscountTicket = (ticket, discount) => {
		const discountTicket = { ...ticket };
  		discountTicket.prices.vip = discountTicket.prices.vip * discount;
		discountTicket.prices.stands = discountTicket.prices.stands * discount;
		return discountTicket;
	}

	const regularTicket = { band: 'Metallica', city: 'Belo Horizonte', prices: { vip: 800, stands: 600 } }
	const discountTicket = getDiscountTicket(regularTicket, 0.5);

	console.log('discountTicket: ', discountTicket.prices);
	console.log('regularTicket: ', regularTicket.prices);

```
Explique o porquê dos preços estarem com o mesmo valor. E o que precisa ser alterado para que os preços sejam diferentes?


```js
Havia um problema de escopo onde o prices do regularTicket era setado dentro da função.

Correção:
   	const getDiscountTicket = (ticket:any, discount:any) => {
    const discountTicket = { ...ticket };
    const prices = {
      vip:0,
      stands:0
    }
  		prices.vip = discountTicket.prices.vip * discount;
      prices.stands = discountTicket.prices.stands * discount;
      discountTicket.prices = prices
		return discountTicket;
	}

	const regularTicket = { band: 'Metallica', city: 'Belo Horizonte', prices: { vip: 800, stands: 600 } }
	const discountTicket = getDiscountTicket(regularTicket, 0.5);

	console.log('discountTicket: ', discountTicket.prices);
	console.log('regularTicket: ', regularTicket.prices);
```

---


### AngularJs

1\) Explique os tipos de Data Binding no AngularJS; 

```js
// Resposta
```

2\) Liste quais são os Dispatchers e Listeners que existem no AngularJs, as diferenças entre eles, vantagens e desvantagens no uso dos mesmos;

```js
// Resposta
```

3\) O que são e como funcionam os lifecycles no AngularJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
// Resposta
```

4\) Qual recurso angularJs pode ser usado para aumentar a performance de campos de formulários que realizam algum processamento ao alterar o texto?

```js
// Resposta
```

5\) Dado o `Nesting` de componentes abaixo, indique a melhor forma do componente `<fourth-component>` se comunicar com `<first-component>`;

```
	<first-component>
		<second-component>
			<third-component>
				<fourth-component>
				</fourth-component>
			</third-component>
		</second-component>
	</first-component>

```

```js
// Resposta
```
---

### React

1\) Cite tipos de componentes que existem no ReactJs e a melhor forma de utilização de cada um.

```js
Component de classe: São componentes que podemgerenciar seu estado, obedecem ao ciclo de vida do React, ele é indicado quando
se precisa manipular props ou estado dentro dele.
Componente sem estado: São com componentes "estaticos", servem apenas para exibição, são indicados para rederização onde não é
necessário a manipulação dos dados.
```

2\) O que são e como funcionam os lifecycles no ReactJs? Cite um exemplo de uso de pelo menos um método lifecycle.

```js
lifescycles são metodos invocados antes, durante e depois da criação de um componente do react,
cada método é invocado em um momento diferente na aplicação.

exemplo:componentDidMount() é chamado logo após o render() e é ideal para se usado para chamadas em apis e inicialização de estado. 


```

3\) Atualmente nosso sistema possui um componente chamado Button que possui a seguinte estrutura:

```
    import React from 'react';
    import styled from 'styled-components';

    const ButtonLayout = styled.button`
    cursor: pointer;
    color: '#FFF';
    background-color: '#707070';
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    padding: .45rem 2.5rem;
    font-size: 1.2rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    :hover{
        background-color: ${props => props.backgroundColor + 'cc'};
    }
    `;

    const Button = (props) => {
    const { label, onClick = () => { }, type = 'button' } = props;
    return (
        <React.Fragment>
        <ButtonLayout type={type} onClick={onClick}>{label}</ButtonLayout>
        </React.Fragment>
    );
    };

    export default Button;
```

Atualmente, os nossos botões podem variar na cor, texto e ação que é executada ao ser clicado. 
No entanto, para uma nova atividade, foi solicitado seja criado um botão que contém também um ícone. 
O que você pode fazer para criar um botão que atenda essa demanda?


```js
// Resposta
```


