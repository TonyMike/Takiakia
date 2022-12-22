import { NextPage } from 'next'
import Head from 'next/head'
import FIlterBody from './FIlterBody'
import FilterHero from './FilterHero'

const FilterPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Takiakia | Marketplace for student</title>
      </Head>
      <FilterHero />
      <FIlterBody />
    </div>
  )
}

export default FilterPage
