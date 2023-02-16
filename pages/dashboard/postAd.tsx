import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import Typography from '@mui/material/Typography'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import * as React from 'react'
import Layout from '../../Components/Layout'
import AboutProduct from '../../Components/PostAd/AboutProduct'
import SelectCategory from '../../Components/PostAd/SelectCategory'
import DashboardHero from '../../Reusables/DashboardHero'

type comProps = any[]

const steps = ['Category & Images', 'Ad Details']
const PostAd: NextPage = () => {
  const formComponent: comProps = [
    <SelectCategory key={'select-category'} />,
    <AboutProduct key={'about-product'} />
  ]
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())

  const isStepOptional = (step: number) => {
    return step === 1
  }

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div>
      <Head>
        <title>Dashboard - Post Ad</title>
      </Head>
      <Layout>
        <DashboardHero header='Post Advert' />
        <form>
          <Box
            sx={{
              px: {
                xs: '0.75rem',
                sm: '2rem',
                lg: '23rem'
              }
            }}
            className=' w-full  py-4  m-auto'
          >
            <div className='hidden md:block'>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {}
                  const labelProps: {
                    optional?: React.ReactNode
                  } = {}

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  )
                })}
              </Stepper>
            </div>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Link href={'/dashboard'} passHref>
                    <Button>Done</Button>
                  </Link>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Box sx={{ mt: 2, mb: 1 }}>{formComponent[activeStep]}</Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color='inherit'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </form>
      </Layout>
    </div>
  )
}

export default PostAd
