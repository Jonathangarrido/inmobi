import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'

import * as Style from './style'

export const Nav = () => {
  const [open, setOpen] = useState(false)

  const handle = (status:boolean) => setOpen(status)

  return (
    <Style.Header>
      <Button>Logo</Button>
      <Button onClick={()=>handle(true)}>Menu</Button>
      <Drawer anchor='right' open={open} onClose={()=>handle(false)}>
        <div onClick={()=>handle(false)}>
          <List>
            {['Busqueda', 'Proyectos', 'Promociones', 'Somos'].map((text:string) => (
              <ListItem button key={text}>
                <ListItemIcon><InboxIcon /></ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Style.Header>
  )
}
