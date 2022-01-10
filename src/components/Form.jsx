import {React, useState, useEffect} from 'react'
import Error from './Error'

const Form = ({patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [symptoms, setSymptoms] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if( Object.keys(patient).length > 0){
      setName(patient.name)
      setEmail(patient.email)
      setDate(patient.date)
      setSymptoms(patient.symptoms)
    }  
  }, [patient])

  const createId = () => {
    const random = Math.random().toString(36).substr(2)
    let dateNow = Date.now(36).toString(36)
    return random + dateNow
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending Form...')
    // Validate Form
    if([ name, email, date, symptoms ].includes('')){
      console.log('There is at least an empty field!!')
      setError(true)
      return
    }  

    setError(false)

    // Patient object
    const objPatient = {
      name,
      email,
      date,
      symptoms,
    }

    if(patient.id){
      // Editing Record
      objPatient.id = patient.id

      const updatedPatients = patients.map( patientState => patientState.id === patient.id ? objPatient : patientState)
      setPatients(updatedPatients)
      setPatient({})
    }else{
      // New Record
      objPatient.id = createId()
      setPatients([...patients, objPatient])
    }



    // Reset the form
    setName('')
    setEmail('')
    setDate('')
    setSymptoms('')
  } 
  
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className='font-black text-3xl text-center'>Patients Followup</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Manage and {''}
        <span className='text-indigo-600 font-bold'>Add Patients</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5'
      >
        {error && <Error><p>All fields are required!!</p></Error>}
        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold'
            htmlFor='name'
          >
            Name
          </label>
          <input 
            id='name'
            type="text" 
            placeholder='Patient Name'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={name}
            onChange={ (e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold'
            htmlFor='email'
          >
            E-mail
          </label>
          <input 
            id='email'
            type="email" 
            placeholder='Patient E-mail'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold'
            htmlFor='date'
          >
            Appointment Date
          </label>
          <input 
            id='date'
            type="date" 
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={date}
            onChange={ (e) => setDate(e.target.value)}
          />
        </div>

        <div className='mb-5'>
          <label 
            className='block text-gray-700 uppercase font-bold'
            htmlFor='symptoms'
          >
            Symptoms 
          </label>
          <textarea 
            id='symptoms'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Symptoms Description'
            value={symptoms}
            onChange={ (e) => setSymptoms(e.target.value)}
          />
        </div>

        <input type="submit" 
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-500 cursor-pointer transition-all'
          value={ patient.id ? 'Edit Patient' : 'Add Patient'}
        />
      </form>
    </div>
  )
}

export default Form
