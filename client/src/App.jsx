import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const dummyData = [
  {
    name: "Bob",
    age: 22,
    email: "test22@aol.com",
    dob: "1999-12-29",
  },
  {
    name: "Ron",
    age: 87,
    email: "test22@aol.com",
    dob: "1999-12-29",
  }
]

function App() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const response = async () => {
      const res = await fetch('http://localhost:3000')
      const data = await res.json()
      // console.log(data)
      setStudents(dummyData)
    }
    response();
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {students.map((student) => (
        <>
          <div className="card">
            <p>
              {student.name}
            </p>
          </div>
          <p className="read-the-docs">
            {student.email}
          </p>
        </>
      )

      )}
    </>
  )
}

export default App
