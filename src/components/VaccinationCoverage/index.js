import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationDetails} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="vaccination-coverage-container">
      <h1 className="vaccination-heading">Vaccination Coverage</h1>
      <BarChart
        width={900}
        height={500}
        data={vaccinationDetails}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#94a3b8',
            strokeWidth: 0.3,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: '#94a3b8',
            strokeWidth: 0.3,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar
          dataKey="dose1"
          name="dose1"
          fill="#5a8dee"
          barSize="20%"
          radius={[6, 6, 0, 0]}
        />
        <Bar
          dataKey="dose2"
          name="dose2"
          fill="#f54394"
          barSize="20%"
          radius={[6, 6, 0, 0]}
        />
      </BarChart>
    </div>
  )
}
export default VaccinationCoverage
