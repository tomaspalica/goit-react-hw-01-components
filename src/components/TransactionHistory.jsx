import css from '../css/TransactionHistory.module.css'

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
export {TransactionHistory}
