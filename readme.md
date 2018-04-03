# **FaceFarm**

# **APRESENTAÇÃO**

Hoje em dia o agricultor não possui um meio simples via internet de acesso a cotação do seu tipo de cultivo, venda de produtos agrícolas, como também preços de insumos, implementos agrícolas e maquinário, o sistema tem como justificativa facilitar o acessos a esses meios.

## **OBJETIVO**

Melhorar a comunicação entre compradores e vendedores de produtos relacionados a área agrícola, insumos e commodities. Facilitar o cultivo e a gerência da produção de produtores.

# **DIAGRAMA DE CLASSES**

![image alt text](doc-images/image_2.jpg)

# **DIAGRAMA DE ESTADOS**

## **SOLICITAÇÃO DE AMIZADE**![image alt text](doc-images/image_3.jpg)

## **DENUNCIA ANÚNCIO**![image alt text](doc-images/image_4.jpg)

## **BLOQUEIO USUÁRIO**![image alt text](doc-images/image_5.png)

## **POSTAGENS**![image alt text](doc-images/image_6.png)

## **NOTIFICAÇÕES**![image alt text](doc-images/image_7.jpg)

# **DIAGRAMA DE SE ****SEQUÊNCIA**

# **NOTIFICAÇÕES**![image alt text](doc-images/image_8.jpg)

## **CADASTRO USUÁRIO**![image alt text](doc-images/image_9.jpg)**ADICIONAR POSTAGEM**

![image alt text](doc-images/image_10.jpg)

## **FEED DE POSTAGENS**![image alt text](doc-images/image_11.jpg)

## **PROCURA DE POSTAGENS**![image alt text](doc-images/image_12.jpg)

# **ESQUEMA MongoDB**

**var EntropiaAnuncio = new Schema({
	views: { type: ****Number****, required: ****true**** },
	valorPago: { type: ****Number****, required: ****true**** },
	entropia: ****Number****
});**

**

var Anuncio = new Schema({
	imagem: { type: ****String****, required: ****true**** },
	views: { type: ****Number**** },
	cliques: { type: ****Number**** },
	valor: { type: ****Number****},
	inicio: {	type: ****Date****, default: ****Date****.now },
	fim: { type: ****Date****, required: ****true**** },
	gerente_visualizou: { type: ****Boolean****, required: ****true**** },
	ativo: { type: ****Boolean****, required: ****true**** },
	descricao: { type: ****String****, required: ****true**** },
	listaEntropiaAnuncio: [Schema.Types.ObjectId],
	listaCultura: [Schema.Types.ObjectId],
	_idPlanoAnuncio: Schema.Types.ObjectId
});

var DenunciaAnuncio = new Schema({
	quantidade_denuncias: { type: ****Number**** },
	resolvido: { type: ****Boolean****, required: ****true**** },
	listaMotivos: [Schema.Types.ObjectId],
	_idAnuncio: Schema.Types.ObjectId
});

var DenunciaPostagem = new Schema({
	quantidade_denuncias: { type: ****Number**** },
	resolvido: { type: ****Boolean****, required: ****true**** },
	_idPostagem: Schema.Types.ObjectId
});

var TipoPostagem = new Schema({
	descricao: { type: ****String****, required: ****true****, unique: ****true**** },
	listaPostagen: [Schema.Types.ObjectId]
});

var Motivo = new Schema({
	motivo: { type: ****String****, required: ****true**** },
	data: {	type: ****Date****, default: ****Date****.now }
});


var PlanoAnuncio = new Schema({
	nome: { type: ****String****, required: ****true****, unique: ****true**** },
	descricao: { type: ****String****, required: ****true****},
	valor: { type: ****Number****, required: ****true**** },
	validade: {type: ****Number****, require: ****true****},
	ativo: { type: ****Boolean****, required: ****true**** }
});
**

**
var Postagem = new Schema({
	texto: { type: ****String****, required: ****true**** },
	curtidas: { type: ****Number**** },
	data: {	type: ****Date****, default: ****Date****.now },
	preco: { type: ****Number**** },
	quantidadeTotal: { type: ****Number**** },
	quantidadeMedida: { type: ****Number**** },
	unidadeMedida: { type: ****Number**** },
	listaComentario: [Schema.Types.ObjectId],
	listaCultura: [Schema.Types.ObjectId],
	listaImagen: [Schema.Types.ObjectId]
});

var Cultura = new Schema({
	nome: { type: ****String****, required: ****true**** },
	quantidadeUsuarios: { type: ****Number**** },
});

var Comentario = new Schema({
	texto: { type: ****String****, required: ****true**** },
	curtidas: { type: ****Number**** },
	data: {	type: ****Date****, default: ****Date****.now },
	listaComentario: [Schema.Types.ObjectId]
});

var Imagem = new Schema({
	path: { type: ****String****, required: ****true**** },
	formato: { type: ****String****, required: ****true**** }
});**

**

var Agricultor = new Schema({
	login: { type: ****String****, required: ****true****, unique: ****true****, lowercase: ****true****, trim: ****true**** },
	senha: { type: ****String****, required: ****true****, min: ****8**** },
	nomeCompleto: { type: ****String****, required: ****true****, lowercase: ****true****, trim: ****true****, min: ****6**** },
	cpf: { type: ****String****, required: ****true****, unique: ****true****, min: ****11****, max: ****11**** },
	email: {type: ****String****, validate: {
			validator: validator.isEmail,
			message: ****'{VALUE} não é um email válido.'****}},
	telefone: { type: ****String**** },
	whattsapp: { type: ****String**** },
	bloqueado: { type: ****Boolean****, required: ****true**** },
	visitas: { type: ****Number****, default: ****0**** },
	sexo: { type: ****String**** },
	imagemPerfil: { type: ****String****  },
	dataCriacaoConta: {	type: ****Date****, default: ****Date****.now },
	dataNascrimento: { type: ****Date****, default: ****Date****.now },
	hashConfirmacao: { type: ****String****},
	configuracao: Schema.Types.ObjectId,
	listaDenunciaUsuario: [Schema.Types.ObjectId],
	listaDenunciaAnuncio: [Schema.Types.ObjectId],
	listaCultura: [Schema.Types.ObjectId],
	listaPostage: [Schema.Types.ObjectId],
	listaComentarios: [Schema.Types.ObjectId],
	listaImagen: [Schema.Types.ObjectId],
	listaFerramenta: [Schema.Types.ObjectId],
	listaCidade: [Schema.Types.ObjectId],
	listaBanimento: [Schema.Types.ObjectId],
	listaNotificacao: [Schema.Types.ObjectId]
});
**

**
var Gerente = new Schema({
	login: { type: ****String****, required: ****true****, unique: ****true****, lowercase: ****true****, trim: ****true**** },
	senha: { type: ****String****, required: ****true****, min: ****8**** },
	nomeCompleto: { type: ****String****, required: ****true****, lowercase: ****true****, trim: ****true****, min: ****6**** },
	email: {type: ****String****, validate: {
			validator: validator.isEmail,
			message: ****'{VALUE} não é um email válido.'****
		}},
	listaPlanoAnuncio: [Schema.Types.ObjectId],
	listaNotificacao: [Schema.Types.ObjectId]
});

var Notificacao = new Schema({
	texto: { type: ****String****, required: ****true**** },
	data: {	type: ****Date****, default: ****Date****.now },
	preco: { type: ****Number**** },
	visualizada: { type: ****Boolean**** },
	link: { type: ****String**** },
	dataGeracao: { type: ****Date****, default: ****Date****.now }
});

var Moderador = new Schema({
	login: { type: ****String****, required: ****true****, unique: ****true****, lowercase: ****true****, trim: ****true**** },
	senha: { type: ****String****, required: ****true****, min: ****8**** },
	nomeCompleto: { type: ****String****, required: ****true****, lowercase: ****true****, trim: ****true****, min: ****6**** },
	cpf: { type: ****String****, required: ****true****, unique: ****true****, min: ****11****, max: ****11**** },
	email: {type: ****String****, validate: {
			validator: validator.isEmail,
			message: ****'{VALUE} não é um email válido.'****
		}},
	telefone: { type: ****String**** },
	whattsapp: { type: ****String**** },
	bloqueado: { type: ****Boolean****, required: ****true**** },
	visitas: { type: ****Number****, default: ****0**** },
	sexo: { type: ****String**** },
	listaBanimento: [Schema.Types.ObjectId],
	listaNotificacao: [Schema.Types.ObjectId],
	listaCidade: [Schema.Types.ObjectId]
});

var Banimento = new Schema({
	motivoBanimento: { type: ****String****, required: ****true**** },
	inicio: { type: ****Date****, default: ****Date****.now },
	fim: { type: ****Date****, default: ****Date****.now, required: ****true**** }

});

var Cidade = new Schema({
	nome: { type: ****String****, required: ****true****, unique: ****true**** },
	geo: {type: [****Number****], index: ****'2d'****},
});

var Estado = new Schema({
	nome: { type: ****String****, required: ****true****, unique: ****true**** },
	sigla: { type: ****String****, required: ****true****, unique: ****true****, max: ****5****, min: ****2**** },
	listaCidade: [Schema.Types.ObjectId]
});

var ConfiguracaoUsuario = new Schema({
	visualizarPrevisaoTempo: { type: ****Boolean****, required: ****true**** },
	visualizarCotacaoMoeda: { type: ****Boolean****, required: ****true**** },
	visualizarComodities: { type: ****Boolean****, required: ****true**** }
});
**

**
var Empresa = new Schema({
	login: { type: ****String****, required: ****true****, unique: ****true****, lowercase: ****true****, trim: ****true**** },
	senha: { type: ****String****, required: ****true****, min: ****8**** },
	nomeCompleto: { type: ****String****, required: ****true****, lowercase: ****true****, trim: ****true****, min: ****6**** },
	cnpj: { type: ****String****, required: ****true****, unique: ****true****, min: ****14****, max: ****14**** },
	email: {type: ****String****, validate: {
			validator: validator.isEmail,
			message: ****'{VALUE} não é um email válido.'****
		}},
	telefone: { type: ****String**** },
	whattsapp: { type: ****String**** },
	bloqueado: { type: ****Boolean****, required: ****true**** },
	visitas: { type: ****Number****, default: ****0**** },
	sexo: { type: ****String**** },
	imagemPerfil: { type: ****String****  },
	dataCriacaoConta: {	type: ****Date****, default: ****Date****.now },
	dataAberturaEmpresa: { type: ****Date****, default: ****Date****.now },
	hashConfirmacao: { type: ****String****},
	configuracao: Schema.Types.ObjectId,
	listaDenunciaUsuario: [Schema.Types.ObjectId],
	listaCultura: [Schema.Types.ObjectId],
	listaPostage: [Schema.Types.ObjectId],
	listaComentarios: [Schema.Types.ObjectId],
	listaImagen: [Schema.Types.ObjectId],
	listaCidade: [Schema.Types.ObjectId],
	listaBanimento: [Schema.Types.ObjectId],
	listaNotificacao: [Schema.Types.ObjectId],
});

var FerramentasAgricolas = new Schema({
	nome: { type: ****String****, required: ****true**** },
	descricao: { type: ****String****, required: ****false****, },
	dataCadastro: {	type: ****Date****, default: ****Date****.now },
	exibirPublico: { type: ****Boolean****, default: ****false**** },
	listaImagen: [Schema.Types.ObjectId]
});**

# **ESPECIFICAÇÕES DE INTERFACES**

## **AGRICULTOR E EMPRESA**

### **LOGIN**

![image alt text](doc-images/image_13.png)

-Tela para se conectar ao sistema, por meio do E-mail e senha, caso não possua uma senha, terá a possibilidade de se direcionar à uma página para criar uma, apenas clicando no "Criar nova conta".

### **CRIAR NOVA CONTA**

![image alt text](doc-images/image_14.png)

### **MENSAGEM APÓS ABRIR CONTA**

![image alt text](doc-images/image_15.png)

### **CONFIGURAÇÕES DO MENU LATERAL DIREITO**

![image alt text](doc-images/image_16.png)

### **CRIAR POST DE PUBLICAÇÃO**

![image alt text](doc-images/image_17.png)

### **CRIAR POST DE COMPRA/VENDA**

![image alt text](doc-images/image_18.png)

### **OPÇÃO DE DENUNCIAR POSTAGEM**

![image alt text](doc-images/image_19.png)

### **MODAL DE DENÚNCIA DE POSTAGEM**

![image alt text](doc-images/image_20.png)

### **TELA INICIAL/FEED DE POSTS**

![image alt text](doc-images/image_21.png)

### **FILTROS DAS POSTAGENS**

![image alt text](doc-images/image_22.png)

### **PERFIL DO USUÁRIO ATUAL LOGADO**

![image alt text](doc-images/image_23.png)

### **PERFIL DE USUÁRIOS DIFERENTES DO QUE ESTÁ LOGADO**

![image alt text](doc-images/image_24.png)

### **PREVISÃO DO TEMPO MAIS DETALHADA**

![image alt text](doc-images/image_25.png)

### **VISUALIZAR TODAS AS COMMODITIES**

![image alt text](doc-images/image_26.png)

### **VISUALIZAR TODAS AS COTAÇÕES DE PREÇO**

![image alt text](doc-images/image_27.png)

## **GERENTE**

### **CONTROLE DE USUÁRIOS**

![image alt text](doc-images/image_28.png)

### **FILTROS DO CONTROLE DE USUÁRIO**

![image alt text](doc-images/image_29.png)

### **CONTROLE DE POSTS**

![image alt text](doc-images/image_30.png)

### **FILTRO DO CONTROLE DE POSTS**

![image alt text](doc-images/image_31.png)

## **EMPRESA**

### **TELA DE CONFIGURAÇÃO DE ANÚNCIOS**

![image alt text](doc-images/image_32.png)

### **TELA DE SOLICITAR ANÚNCIO**

![image alt text](doc-images/image_33.png)

## **MODERADOR**

### **CRIAR MODERADOR**

![image alt text](doc-images/image_34.png)

### **VISUALIZAR/CONFIGURAR MODERADORES**

![image alt text](doc-images/image_35.png)

### **APROVAR SOLICITAÇÃO DE ANÚNCIOS**

![image alt text](doc-images/image_36.png)

### **FILTROS DAS SOLICITAÇÕES DE ANÚNCIOS**

![image alt text](doc-images/image_37.png)

### **VISUALIZAR PLANOS DE ANÚNCIOS**

![image alt text](doc-images/image_38.png)

### **CRIAR NOVO PLANO DE ANÚNCIO**

![image alt text](doc-images/image_39.png)

## **NOTIFICAÇÕES (TODOS OS USUÁRIOS)**

![image alt text](doc-images/image_40.png)

**Interfaces e suas funcionalidades**

**Telas Agricultor Empresa:**

**-Configuração do Menu Lateral:**

![image alt text](doc-images/image_41.png)

-Nessa tela é possível personalizar o menu lateral, que se encontra à direita, da forma que achar melhor e mais confortável para a utilização do sistema, podendo definir a cidade alvo para exibir precisão do tempo, quais as commodities que o usuário quer ver, e quais modelas.

**-Tela de Posts:**

![image alt text](doc-images/image_42.png)

-Nessa tela é possível criar seus posts, que serão disponibilizados para os outros usuários do sistema. Será possível informar se é para venda, compra ou publicação, cultura, quantidade total, quantidade por medida, unidade de medida e preço.

**-Tela de criar publicação:**

![image alt text](doc-images/image_43.png)

-No caso, se for escolhido a opção publicação, será um post menos "formal", pois será apenas possível mandar um texto, escrevendo sobre o assunto que desejar, e for do seu interesse.

**-Tela de Denuncias:**

![image alt text](doc-images/image_44.png)

-Será possível denunciar posts que não seguem as normas e a finalidade do sistema, apenas clicando no botão direito superior "Denunciar post".

**-Tela de Feed do usuário:**

![image alt text](doc-images/image_45.png)

-Tela principal do usuário: Será possível visualizar todas as publicações e posts de todos os usuários do sistema que postaram algum anuncio, de venda ou compra.

**-Tela de Filtrar Posts:**

![image alt text](doc-images/image_46.png)

-Será disponibilizado um filtro para ajudar os usuário ai encontrarem mais facilmente o que desejam. Podendo assim fazer uma procura mais detalhe, para encontrar posts de seu interesse.

**-Tela de Login:**

![image alt text](doc-images/image_47.png)

-Tela para se conectar ao sistema, por meio do E-mail e senha, caso não possua uma senha, terá a possibilidade de se direcionar à uma página para criar uma, apenas clicando no "Criar nova conta".

**-Modal Denunciar Usuário:**

![image alt text](doc-images/image_48.png)

-Modal para denunciar caso um usuário esteja fazendo algo de errado e não seguindo as normas e regras do sistema, podendo descrever o motivo da denúncia e enviar para um dos moderadores.

**-Mensagem de confirmação:**

![image alt text](doc-images/image_49.png)

-Esta mensagem aparecerá após o usuário ter conseguido se cadastrar com sucesso sistema. Caso essa tela apareça quer dizer que um e-mail de confirmação foi enviado para que o usuário consiga acessar o sistema.

**-Perfil usuário:**

![image alt text](doc-images/image_50.png)

-Tela onde mostra todas as informações do usuário, como por exemplo: o nome, as postagens, a timeline, localização, educação, entre outras coisas.

**-Tela de registro:**

![image alt text](doc-images/image_51.png)

-Tela onde será possível cadastrar um novo usuário que queira ter acesso ao sistema, apenas informando: o nome completo, e-mail, cpf ou cnpj e senha. Quando todos os campos forem preenchidos, clicar no botão "Register".

**-Tela Usuário diferente:**

![image alt text](doc-images/image_52.png)

-Tela onde é possível ver o perfil de outro usuário do sistema, podendo segui-lo para acompanhar suas postagens e sempre que o mesmo fizer alguma alteração no sistema.

**-Tela previsão de tempo:**

![image alt text](doc-images/image_53.png)

-Tela onde mostra quantos graus Celsius estará fazendo em certo dia da semana, mostrando também se estará chovendo, fazendo sol, nublado, muito vento, pouco vento, entre outras informações climáticas.

**-Tela de cotação agrícola:**

![image alt text](doc-images/image_54.png)

-Nessa tela o usuário terá informações de que tipo de culturas está sendo produzida em lugares específicos do pais. O usuário irá selecionar o estão que deseja, e a moeda, e então o sistema irá mostrar quais culturas são produzidas nesse estado, e quantidade da cultura disponível para venda, e o preço médio.

**-Tela Cotação Preço:**

-Tela onde será possível ver o valor de moedas específicas, podendo converter qualquer moeda para saber o valor dela em outros país, por exemplo: converter reais em dólares. Será mostrado também a variação do preço da moeda.

**Telas empresa:**

**-Tela de anuncio de empresas:**

![image alt text](doc-images/image_55.png)

-Tela onde as empresas poderão mostrar seus anuncios, para informar o que desejam comprar dos agricultor, informando o valor que desejam pagar, a data de início, a data de fim e o status.

**-Tela de criação de anúncios:**

![image alt text](doc-images/image_56.png)

-Tela onde a empresa poderá fazer seus anúncios, informando o link para que o usuário possa ver o anuncio, informando uma descrição sobre o que se trata o anuncio, selecionando o tipo de plano (Básico, Standart, Premium), e informando o preço.

**Telas de gerente:**

**-Tela criar moderador:**

![image alt text](doc-images/image_57.png)

-Tela onde o gerente poderá criar moderadores para organizar e cuidar do sistema.

**-Tela de confirmação de anuncio:**

![image alt text](doc-images/image_58.png)

-Tela onde o gerente irá liberar ou recusar anúncios criados pelos usuários do sistema.

**-Filtro de anúncios:**![image alt text](doc-images/image_59.png)

-Filtro para auxiliar os gerentes na hora de aprovar ou recursar um anuncio. Podendo filtrar por: cultura, data, status de anuncio e por palavra chave.

**-Tela de moderadores:**

![image alt text](doc-images/image_60.png)

-Tela onde os gerentes poderão ver os moderadores que estão ativos no sistema. Tendo informação do: Nome, Login, Senha, Cpf, telefone, whatsapp, Sexo, status, cidade e que ações ele realizou no sistema.

**-Tela de planos:**

![image alt text](doc-images/image_61.png)

-Tela onde o gerente poderá visualizar planos para os anúncios das empresas. Podendo ver: nome, descrição, valor, validade, status e ações possíveis dentro do sistema.

**-Tela criação de planos:**

![image alt text](doc-images/image_62.png)

-Tela para o gerente criar planos para os anúncios das empresas. Informando: nome, descrição, preço, tempo de exibição no sistema e situação.

**Telas moderadores**

**-Tela de denúncia:**

![image alt text](doc-images/image_63.png)

-Tela para que o moderador possa denunciar usuários que eles julgarem inapropriados para usar o sistema. 

**
**

**-Tela de banimento:**

![image alt text](doc-images/image_64.png)

-Tela onde o moderador poderá banir usuário que quebraram alguma lei ou norma do sistema. Informando: motivo da denúncia, data e se é banimento permanente ou não.

**-Tela de penalização de posts:**

![image alt text](doc-images/image_65.png)

-Tela para o moderador poder denunciar posts inapropriados para o sistema. Informando: motivo, e o post que é impróprio.
