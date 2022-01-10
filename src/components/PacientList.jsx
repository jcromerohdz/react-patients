import Patient from './Patient'

const PacientList = ({ patients, setPatient, deletePatient }) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      { patients && patients.length ? (
          <>
          <h2 className='font-black text-3xl text-center'>Patients List</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            Manage your {''}
            <span className='text-indigo-600 font-bold'>Patients and Appointments</span>
          </p>

          { patients.map( (patient, index) => (
            <Patient
              key={patient.id}
              patient={patient}
              setPatient={setPatient}
              deletePatient={deletePatient}
            />
          ))}
          </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No Patients</h2>
          <p className='text-xl mt-5 mb-10 text-center'>
            You can add Patients {''}
            <span className='text-indigo-600 font-bold'>to your appointments</span>
          </p>
        </>
      )
    }

      
    </div>
  )
}

export default PacientList

