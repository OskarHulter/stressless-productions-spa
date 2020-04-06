import { Machine } from 'xstate'
import { useMachine } from '@xstate/react'

interface ToggleStateSchema {
  states: {
    active: {},
    inactive: {}
  }
}

type ToggleEvent =
  | { type: 'ACTIVE' }
  | { type: 'INACTIVE'}

const toggleMachine = new Machine({
  id: 'toggleMachine',
  initial: 'inactive',
  states: {
    inactive: {
      on: {
        TOGGLE: 'active'
      }
    },
    active: {
      on: {
        TOGGLE: 'inactive'
      }
    }
  }
})

export default () => {
  const [current, send] = useMachine(toggleMachine)

  return <div>
    <button
      onClick={() => {
        send('TOGGLE')
      }
    }>
      
      Toggle</button>
      { current.matches('active') && <span>active</span> }
      { current.matches('inactive') && <span>inactive</span> }
  </div>
}