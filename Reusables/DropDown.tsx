import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Box } from '@mui/material'
import Link from 'next/link'

type link = {
  link: string
  href: string
}
type props = {
  title: string
  icon?: any
  links?: link[]
}
export default function DropDown ({ title, icon, links }: props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'black'
        }}
      >
        <div className='flex rounded-lg items-center space-x-2'>
          <span>{icon}</span>
          <span>{title}</span>
        </div>
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {links?.map(link => {
          return (
            <Link key={link.link} href={link.href} passHref>
              <MenuItem onClick={handleClose}>{link.link}</MenuItem>
            </Link>
          )
        })}
      </Menu>
    </div>
  )
}
