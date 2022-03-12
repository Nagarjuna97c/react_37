import {Component} from 'react/cjs/react.production.min'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const statusList = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashBoard extends Component {
  state = {
    loadingStatus: statusList.loading,
    vaccinationData: {},
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok === true) {
      const responseVaccinationData = await response.json()
      console.log(responseVaccinationData)
      this.setState({
        vaccinationData: {
          last7DaysVaccination: responseVaccinationData.last_7_days_vaccination.map(
            eachItem => ({
              vaccineDate: eachItem.vaccine_date,
              dose1: eachItem.dose_1,
              dose2: eachItem.dose_2,
            }),
          ),
          vaccinationByAge: responseVaccinationData.vaccination_by_age,
          vaccinationByGender: responseVaccinationData.vaccination_by_gender,
        },
        loadingStatus: statusList.success,
      })
    } else {
      this.setState({loadingStatus: statusList.failure})
    }
  }

  renderLoadingView = () => (
    <div testid="loader" className="loading-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSucessView = () => {
    const {vaccinationData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = vaccinationData

    return (
      <>
        <VaccinationCoverage vaccinationDetails={last7DaysVaccination} />
        <VaccinationByGender vaccinationDetails={vaccinationByGender} />
        <VaccinationByAge vaccinationDetails={vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-text">Something went wrong</h1>
    </div>
  )

  renderDecision = () => {
    const {loadingStatus, vaccinationData} = this.state
    console.log(vaccinationData)

    switch (loadingStatus) {
      case statusList.loading:
        return this.renderLoadingView()
      case statusList.success:
        return this.renderSucessView()
      case statusList.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="title">Co-WIN</h1>
        </div>
        <h1 className="description-title">CoWIN Vaccination in India</h1>

        {this.renderDecision()}
      </div>
    )
  }
}

export default CowinDashBoard
