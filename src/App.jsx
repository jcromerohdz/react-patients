import { useState, useEffect } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import PacientList from "./components/PacientList"

function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(() => {
    const getLoaclStorage = () => {
      const patientsLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? []
      setPatients(patientsLocalStorage)
    }
    getLoaclStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = (id) => {
    const updatedPatiensList = patients.filter(patient => patient.id !== id)
    setPatients(updatedPatiensList)
  }

  

  return (
    <div className="container mx-auto mt-20" >
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PacientList 
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
