import PropTypes from 'prop-types';
import css from './PageTransaction.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <tr key={id}>
            <td className={css.td}>{type}</td>
            <td className={css.td}>{amount}</td>
            <td className={css.td}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
