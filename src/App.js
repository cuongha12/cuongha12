import './App.css'
import React, {useCallback, useState} from 'react';
import ActionCalculator from "./component/ActionCalculator";

const arrAction = ['ac', 'del', '/', '7','8','9','*','4','5','6','+','1','2', '3', '-', '.', '0', '='];

function App() {

	const [result, setResult] = useState('') //Kết quả or số nhập

	const [calculator, setCalculator] = useState('') // Hiển thị phép tính

	const onActionClick = useCallback((value) => {
		if(!isNaN(parseInt(value))){ // Kiểm tra là số
			setResult(result + value)
		} else {
			// eslint-disable-next-line default-case
			switch (value.toUpperCase()) {
				case '+':
				case "-":
				case "*":
				case "/":
					setCalculator(result + value);
					setResult('')
				break
				case '=':
					let currentNumber = parseInt(result)
					const calculation = calculator.split('').find(x=>x === '+' || x === '-' || x === '*' || x === '/') // tìm phép tính trong str
					const previousNumber = parseInt(calculator.split(calculation)[0])
					if(result === '') currentNumber = previousNumber
					setCalculator(calculator + previousNumber + '=')
					// eslint-disable-next-line default-case
					switch (calculation) {
						case '+':
							setResult((previousNumber + currentNumber).toString())
							break
						case "-":
							setResult((previousNumber - currentNumber).toString())
							break
						case "*":
							setResult((previousNumber * currentNumber).toString())
							break
						case "/":
							setResult((previousNumber / currentNumber).toString())
							break
					}
					break
				case 'DEL':
					setResult(result.substring(0, result.length - 1))
					break
				case 'AC':
					setResult('')
					setCalculator('')
					break
			}
		}
	},[calculator, result]);

	return (
		<div className={'App'}>
			<div className={'caculator'}>
				<div className={'output'}>
					<div className={'previous'}>
						{calculator}
					</div>
					<div className={'current'}>
						{result}
					</div>
				</div>
				{
					arrAction.map((el)=>(
						<ActionCalculator onClick={onActionClick} action={el.toUpperCase()} key={el}/>
					))
				}
			</div>
		</div>
	);
}

export default App;
