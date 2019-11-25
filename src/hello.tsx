import React, {useState} from 'react'

import {List, ListItem, ListItemText, ListItemIcon, Collapse, TextField} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox'
import {ExpandMore, ExpandLess} from '@material-ui/icons'

export default function MyList() {
  const [username, setUsername] = useState('typescript')

  return <div>
    <TextField
      label="Username"
      value={username}
      onChange={event => setUsername(event.target.value)}
    />
    <TextField
      label="Disabled"
      value={username}
      disabled
    />
  </div>
}
