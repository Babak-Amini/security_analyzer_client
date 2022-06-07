import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './StockTable.css';
import { format } from 'date-fns'

const StockTable = (props) => {
    const {stock} = props;
    const commaFormat = new Intl.NumberFormat();

    if (stock.Symbol) {
        const dlyChange = document.getElementById('dlyChange');

        if (dlyChange) {
            if (stock.ChangePercent >= 0) {
                dlyChange.style.color = 'green';
            } else if (stock.ChangePercent < 0) {
                dlyChange.style.color = 'red';
            }
        }

        return <div className='stockTableContainer'>
            <MDBTable scrollY maxHeight='40rem' className="stockTable" rules='none' border='1'>
                <MDBTableHead>
                    <tr className='stockToprow'>
                        <td>Analytic</td>
                        <td>Value</td>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td className='analytic'>Company</td>
                        <td className='value'>{stock.LongName} ({stock.Symbol})</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Currency</td>
                        <td className='value'>{stock.Currency}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Beta</td>
                        <td className='value'>{stock.Beta.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Sector/Industry</td>
                        <td className='value'>{stock.Sector}/{stock.Industry}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Price</td>
                        <td className='value'>${stock.Price.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Open Price</td>
                        <td className='value'>${stock.Open} (
                            <span className='dlyChange' id='dlyChange'>
                                {(stock.ChangePercent*100).toFixed(2)}
                                {stock.ChangePercent ? '%' : ''}
                            </span>)
                        </td>
                    </tr>
                    <tr>
                        <td className='analytic'>Previous Close</td>
                        <td className='value'>
                            ${stock.PreviousClose.toFixed(2)} 
                        </td>
                    </tr>
                    <tr>
                        <td className='analytic'>Market Cap.</td>
                        <td className='value'>${commaFormat.format(stock.MarketCap)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Full-Time Employees</td>
                        <td className='value'>{commaFormat.format(stock.FullTimeEmployees)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Shares Outstanding/Shorted</td>
                        <td className='value'>{commaFormat.format(stock.SharesOutstanding)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Volume</td>
                        <td className='value'>{commaFormat.format(stock.Volume)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>P.E. Ratio</td>
                        <td className='value'>{stock.PriceEarningsRatio.toFixed(2)}{stock.PriceEarningsRatio >= 0 ? 'x' : ''}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>BV Per Share</td>
                        <td className='value'>${commaFormat.format(stock.BookValuePerShare.toFixed(2))}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>EPS</td>
                        <td className='value'>${stock.EarningsPerShare.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Operating Margin</td>
                        <td className='value'>{(stock.OperatingMargin*100).toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Profit Margin</td>
                        <td className='value'>{(stock.ProfitMargin*100).toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td className='analytic'>12mo Trailing Dividend (Yield)</td>
                        <td className='value'>{stock.TrailingAnnualDividend.toFixed} (
                            {(stock.TrailingAnnualDividendYield*100).toFixed(2)}%)
                        </td>
                    </tr>
                    <tr>
                        <td className='analytic'>Fwd Annual Dividend (Yield)</td>
                        <td className='value'>{stock.ForwardAnnualDividend} (
                            {(stock.ForwardAnnualDividendYield*100)}%)
                        </td>
                    </tr>
                    <tr>
                        <td className='analytic'>Dividend Payout Ratio</td>
                        <td className='value'>{(stock.DividendPayoutRatio*100)}%</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Net Cash</td>
                        <td className='value'>${commaFormat.format(stock.Cash - stock.Debt)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Cash</td>
                        <td className='value'>${commaFormat.format(stock.Cash)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Debt</td>
                        <td className='value'>${commaFormat.format(stock.Debt)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Debt to Equity Ratio</td>
                        <td className='value'>{stock.DebtToEquityRatio}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Current Ratio</td>
                        <td className='value'>{(stock.CurrentRatio)}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>ROA</td>
                        <td className='value'>{(stock.ReturnOnAssets*100).toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td className='analytic'>ROE</td>
                        <td className='value'>{(stock.ReturnOnEquity*100).toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Next Earnings Date</td>
                        <td className='value'>{format(new Date(stock.EarningsDate), 'MM/dd/yyyy')}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Last Fiscal Quarter Earnings</td>
                        <td className='value'>{format(new Date(stock.LastFiscalQuarterEnd), 'MM/dd/yyyy')}</td>
                    </tr>
                    <tr>
                        <td className='analytic'>Last Fiscal Year Earnings</td>
                        <td className='value'>{format(new Date(stock.LastFiscalYearEnd), 'MM/dd/yyyy')}</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </div>
    } return null;
}

export default StockTable;