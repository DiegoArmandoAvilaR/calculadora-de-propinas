const botonCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

botonCalcular.addEventListener('click', function() {
	const total = parseFloat(document.getElementById('total').value);
	const porcentaje = parseFloat(document.getElementById('porcentaje').value);
	const personas = parseInt(document.getElementById('personas').value);

	if (!total || !porcentaje || !personas) {
		resultado.innerText = 'Por favor ingrese todos los valores.';
		return;
	}

	const propina = total * (porcentaje / 100);
	const totalConPropina = total + propina;
	const montoPorPersona = totalConPropina / personas;

	resultado.innerText = `La propina es de $${propina.toFixed(2)}, el total con propina es de $${totalConPropina.toFixed(2)} y cada persona debe pagar $${montoPorPersona.toFixed(2)}.`;
});
