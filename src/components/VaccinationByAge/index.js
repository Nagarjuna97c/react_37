import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationDetails} = props

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-heading">Vaccination by Age</h1>
      <PieChart width={1000} height={400}>
        <Pie
          cx="50%"
          cy="40%"
          data={vaccinationDetails}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#f54394" />
          <Cell name="45-60" fill="#5a8dee" />
          <Cell name="Above 60" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
