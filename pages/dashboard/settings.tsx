import { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../../Components/Layout'
import ChangeNumber from '../../Components/Settings/ChangeNumber'
import ChangePassword from '../../Components/Settings/ChangePassword'
import PersonalDetails from '../../Components/Settings/PersonalDetails'
import DashboardHero from '../../Reusables/DashboardHero'

const Settings: NextPage = () => {
  const [active, setActive] = useState(0)
  const display = [<PersonalDetails />, <ChangePassword />]
  return (
    <div>
      <Layout>
        {/* <DashboardHero /> */}
        <div className='px-2 py-4'>
          <ul className='flex text-center my-2 '>
            <li
              onClick={() => setActive(prev => (prev = 0))}
              className={` ${
                active === 0
                  ? 'bg-orange text-white transition-all duration-100'
                  : null
              } font-semibold p-2 w-1/2 px-1 capitalize `}
            >
              Personal Details
            </li>

            <li
              onClick={() => setActive(prev => (prev = 1))}
              className={` ${
                active === 1
                  ? 'bg-orange text-white transition-all duration-100'
                  : null
              } font-semibold p-2 w-1/2 px-1 capitalize `}
            >
              Change password
            </li>
          </ul>
          <div className='mt-5'>{display[active]}</div>
        </div>
      </Layout>
    </div>
  )
}

export default Settings
