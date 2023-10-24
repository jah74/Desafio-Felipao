

let saldoVitorias = VitoriasEDerrotas(55, 16)

if(saldoVitorias<10){
	console.log("O heroi tem saldo de :",saldoVitorias, "está no nivel de: Ferro")
} 
if(saldoVitorias>11 && saldoVitorias<20){
	console.log("O heroi tem saldo de:",saldoVitorias, "está no nivel de: Bronze")   
}
if(saldoVitorias >21 && saldoVitorias <50){
	console.log("O heroi tem saldo de:",saldoVitorias, "está no nivel de: Prata")   
}
if(saldoVitorias>51 && saldoVitorias<80){
	console.log("O heroi tem saldo de:",saldoVitorias, "está no nivel de: Ouro")   
}
if(saldoVitorias>81 && saldoVitorias<90){
	console.log("O heroi tem saldo de:",saldoVitorias, "está no nivel de: Diamante")   
}
if(saldoVitorias>91 && saldoVitorias<100){
	console.log("O heroi tem saldo de:",saldoVitorias, "está no nivel de: Lendário")   
}
if(saldoVitorias>=101){
	console.log("O heroi tem saldo de:",saldoVitorias, "está no nivel de: Imortal")   
}

function VitoriasEDerrotas(numVit, numDerrt){
	let saldoVitorias = numVit - numDerrt
	return saldoVitorias
}
	