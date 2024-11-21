const projects = [
	{
		nr: '001',
		name: 'Acessibilidade em Restaurantes',
		link: 'https://www.em.com.br/degusta/2024/02/6807852-acessibilidade-como-os-espacos-se-preparam-para-receber-pessoas-com-deficiencia.html#google_vignette'
	},
	{
		nr: '002',
		name: 'Palácio das Artes e Inclusão',
		link: 'https://www.em.com.br/gerais/2024/08/6925352-palacio-das-artes-tera-atracoes-para-as-pessoas-com-deficiencia.html'
	},
	{
		nr: '003',
		name: 'Parada do Orgulho da Pessoa com Deficiência',
		link: 'https://www.em.com.br/diversidade/2024/07/6908042-parada-do-orgulho-da-pessoa-com-deficiencia-movimenta-a-savassi-em-bh.html'
	},
	{
		nr: '004',
		name: 'Residências Inclusivas em BH',
		link: 'https://prefeitura.pbh.gov.br/noticias/prefeitura-de-bh-inicia-acolhimento-em-unidades-de-residencias-inclusivas'
	},
	{
		nr: '005',
		name: 'Acessibilidade no KM de Vantagens Hall',
		link: 'https://soubh.uai.com.br/noticias/turismo/inclusao-espacos-culturais-bh-acessiveis-pessoas-com-deficiencia'
	},
	{
		nr: '006',
		name: 'Centro de Referência em Inclusão',
		link: 'https://www.em.com.br/degusta/2024/02/6807852-acessibilidade-como-os-espacos-se-preparam-para-receber-pessoas-com-deficiencia.html'
	},
	{
		nr: '007',
		name: 'Acessibilidade em Shows e Eventos',
		link: 'https://www.em.com.br/gerais/2024/08/6925352-palacio-das-artes-tera-atracoes-para-as-pessoas-com-deficiencia.html'
	},
	{
		nr: '008',
		name: 'Projetos para Melhorar o Transporte Adaptado',
		link: 'https://prefeitura.pbh.gov.br/noticias/prefeitura-de-bh-inicia-acolhimento-em-unidades-de-residencias-inclusivas'
	},
	{
		nr: '009',
		name: 'Espaços Culturais Acessíveis',
		link: 'https://soubh.uai.com.br/noticias/turismo/inclusao-espacos-culturais-bh-acessiveis-pessoas-com-deficiencia'
	}
];

const app = document.getElementById('app');
const imgBaseURL = '/ACESSOBH/acessobh/assets/img/';

projects.forEach(project => {
	const title = `${project.name} `;
	const imgURL = `${imgBaseURL}${project.nr}.jpg`;
	
	const projectEl = document.createElement('a');
	projectEl.classList.add('project');
	projectEl.href = project.link;
	projectEl.target = '_blank';

	projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
		<p>${title}</p>
    `;

	app.appendChild(projectEl);
});
