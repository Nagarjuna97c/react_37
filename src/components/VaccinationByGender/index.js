import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationDetails} = props

  return (
    <div className="vaccination-by-gender-container">
      <h1 className="vaccination-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={400}>
        <Pie
          cx="50%"
          cy="60%"
          data={vaccinationDetails}
          startAngle={0}
          endAngle={180}
          innerRadius="30%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="Male" fill="#2d87bb" />
          <Cell name="Female" fill="#a3df9f" />
          <Cell name="Others" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          margin={{top: 10}}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
