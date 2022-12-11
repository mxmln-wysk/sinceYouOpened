const reformatNumber = (number:number, unit: string, fractionDigits = 2) => {
	 return String(new Intl.NumberFormat('de-DE',{
		 minimumFractionDigits: fractionDigits,
		 maximumFractionDigits: fractionDigits
	 }).format(number)) + ' ' +unit

}

export default reformatNumber;
