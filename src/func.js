import React, { Component } from 'react'

export class Func extends Component {
	render() {
		let InitialArray = [
			"We're up all night 'til the sun lorem sun lorem  ",
			"We're up all night to get some ipsum some ipsum",
			"We're up all night for good fun lorem lorem",
			"We're up all night to get lucky lorem lorem lorem ",
			"We're up all night to get lucky lorem lorem lorem We're up all night to get lucky lorem lorem lorem ",
			"We're up all night to get  "
		]

		document.write('<center>', '<h1>Array initial</h1>')
		for (let i = 0; i < InitialArray.length; i++) {
			document.write('<center>', '<br />' + InitialArray[i] + '<br />')
		}

		let getShortMessage
		let limitNumber = 50
		getShortMessage = InitialArray.filter((message) => message.length < limitNumber)
		var txt = limitNumber.toString()
		document.write(
			'<br />' +
				'<h1>Array contenant tous les messages dont la longueur est inférieure strictement à ' +
				txt.fontcolor('green') +
				' caractères</h1>'
		)

		for (let i = 0; i < getShortMessage.length; i++) {
			document.write('<center>', '<br />' + getShortMessage[i] + '<br />')
		}

		return <div />
	}
}

export default Func
