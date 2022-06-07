import React, { useEffect } from 'react';
import './SpyTable.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SpyTable = (props) => {
    const {spy, ticker, setTicker, setStock} = props;

    const changeColor = (symbol, leftRow) => {
		if (!leftRow) {
			document.getElementById(symbol).style.backgroundColor = 'rgb(200,200,200)';
		} else if (leftRow) {
			document.getElementById(symbol).style.backgroundColor = 'rgb(237, 237, 237)'
		}

        if (ticker.current) {
            document.getElementById(ticker.current).style.backgroundColor = '#fa8072';
        } if (ticker.prior) {
            document.getElementById(ticker.prior).style.backgroundColor = 'rgb(237, 237, 237)';
        }
	}

    const spyTableClick = (symbol) => {
        setTicker({prior: ticker.current, current: symbol});
    }

    useEffect(() => {
        if (ticker.current) {
            fetch(`https://api.aletheiaapi.com/StockData?symbol=${ticker.current}`, {
                headers: {
                    key: '2CD5D7C1C59B4966AB79930611BC7365',
                    'Accept-Version': 2
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStock(data);
            }) //Add catch block with email to me and user about error
        }
    }, [ticker, setStock])
    
    //div needed to keep table width appropriate
    return <div className='spyTableContainer'>
    <MDBTable maxHeight='39.5rem' className="heldTable" rules='none' scrollY border='1'>
        <MDBTableHead>
            <tr className='heldToprow'>
                <td className="heldTd">Company</td>
                <td className="heldTd">Ticker</td>
                <td className="heldTd">Price</td>
                <td className="heldTd">Weight</td>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            {spy.map((stock, i) => {
                return <tr key={i} className="heldTr"
                    id={stock.Symbol}
                    onClick={() => spyTableClick(stock.Symbol)}
                    onMouseOver={() => changeColor(stock.Symbol, false)}
					onMouseOut={() => changeColor(stock.Symbol, true)}
                >
                    <td className="heldTd">{stock.Company}</td>
                    <td className="heldTd">{stock.Symbol}</td>
                    <td className="heldTd">{stock.Price}</td>
                    <td className="heldTd">{stock.Weight.toFixed(2)}%</td>
                </tr>
            })
            
            }
        </MDBTableBody>
    </MDBTable>
    </div>
}

export default SpyTable;