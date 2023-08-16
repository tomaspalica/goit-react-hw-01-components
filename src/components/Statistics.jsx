import css from '../css/Statistics.module.css'
import PropTypes from "prop-types";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({data, title =""})=> (
<section className={css.statistics}>
  {title.length > 0 && (<h2 className="title">{title}</h2>)}
  

  <ul className={css.statList}> {
 data.map(stat => (
  
    <li style={{ backgroundColor: getRandomHexColor() }} key={stat.id} className={css.item}>
    <span className="label">{stat.label}</span>
    <span className={css.percentage}>{stat.percentage}{"%"}</span>
  </li>
 ))
   
    }
  </ul>
</section>    
)

Statistics.propTypes ={
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
}
export {Statistics}