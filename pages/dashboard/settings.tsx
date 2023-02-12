import { NextPage } from 'next'
import { useState } from 'react'
import Layout from '../../Components/Layout'
import ChangeNumber from '../../Components/Settings/ChangeNumber'
import ChangePassword from '../../Components/Settings/ChangePassword'
import PersonalDetails from '../../Components/Settings/PersonalDetails'
import DashboardHero from '../../Reusables/DashboardHero'

const Settings: NextPage = () => {
  const [active, setActive] = useState(0)
  const display = [<PersonalDetails key={'personal-details'} />, <ChangePassword  key={'change-password'}/>]
  return (
    <div>
      <Layout>
        <DashboardHero header={'Settings'} />
        <div className='flex max-h-[400px] justify-center items-center '>
          <div className='px-2  w-[400px]  md:w-[600px] m-auto py-4 '>
            <ul className='flex w-full text-center my-2 shadow-md'>
              <li
                onClick={() => setActive(prev => (prev = 0))}
                className={` ${
                  active === 0
                    ? 'bg-orange text-white transition-all duration-100'
                    : null
                } font-semibold p-2 w-1/2 cursor-pointer px-1 capitalize `}
              >
                Personal Details
              </li>

              <li
                onClick={() => setActive(prev => (prev = 1))}
                className={` ${
                  active === 1
                    ? 'bg-orange text-white transition-all duration-100'
                    : null
                } font-semibold p-2 w-1/2 px-1 cursor-pointer capitalize `}
              >
                Change password
              </li>
            </ul>
            <div className='mt-5'>{display[active]}</div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Settings
