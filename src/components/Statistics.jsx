const Statistics = ({data})=> (
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list"> {
 data.map(stat => (
    <li key={stat.id} className="item">
    <span className="label">{stat.label}</span>
    <span className="percentage">{stat.percentage}{"%"}</span>
  </li>
 ))
   
    }
  </ul>
</section>    
)
export {Statistics}