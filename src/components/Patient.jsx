import React from 'react'

const Patient = ({patient, setPatient, deletePatient}) => {

  const handleDelete = () => {
    const userConfirm = confirm('Are you sure you want to delete this patient?')

    if(userConfirm){
      deletePatient(patient.id)
    }
  }


  return (
      <div className='mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Name: {''}
          <span className='font-normal normal-case'>{patient.name}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>E-mail: {''}
          <span className='font-normal normal-case'>{patient.email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Appointment Date: {''}
          <span className='font-normal normal-case'>{patient.date}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Syntoms: {''}
          <span className='font-normal normal-case'>{patient.symptoms}</span>
        </p>

        <div>
          <button
            className="py-2 px-10 mr-1 bg-indigo-600 hover:bg-indigo-400 text-white font-bold uppercase rounded-lg"
            type='button'
            onClick={() => setPatient(patient)}
          >
            Edit
          </button>

          <button
            className="py-2 px-10 bg-red-600 hover:bg-red-400 text-white font-bold uppercase rounded-lg"
            type='button'
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
  )
}

export default Patient
