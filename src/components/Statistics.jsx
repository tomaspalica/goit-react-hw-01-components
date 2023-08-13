import css from '../css/Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const Statistics = ({data,title})=> (
<section className={css.statistics}>
  <h2 className="title">{title}</h2>

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
export {Statistics}