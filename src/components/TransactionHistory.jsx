import css from '../css/TransactionHistory.module.css'
import PropTypes from "prop-types";
const TransactionHistory = ({transactions}) => (
    <div className= {css.backGround}>
    <table className={css.transactionHistory }>
     
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
  
    <tbody> 
        {
        transactions.map(transaction => (
        <tr key={transaction.id}>
        <td>{transaction.type}</td>
        <td>{transaction.amount}</td>
        <td>{transaction.currency}</td>
      </tr>
        ))
        }
      
    
    </tbody>
    
  </table> 
  </div>
)
TransactionHistory.propTypes = {
	transactions: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		type: PropTypes.string,
		amount: PropTypes.string,
		currency: PropTypes.string,
	})),
};
export {TransactionHistory}
