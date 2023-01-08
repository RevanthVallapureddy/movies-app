import {useState} from 'react'

import Header from '../Header'

import './index.css'

const Home = () => {
  const [data, setData] = useState([])

  return (
    <div className="home-bg">
      <Header />
    </div>
  )
}

export default Home
