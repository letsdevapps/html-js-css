function gerarEmail() {
	return `teste_${Date.now()}@email.com`;
}

module.exports = { gerarEmail };