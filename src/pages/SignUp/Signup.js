import React from 'react'
import { InfoSection } from '../../components'
import { homeObjOne, homeObjThree } from './Data'

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Home
