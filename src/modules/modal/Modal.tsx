import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../interaction/Button'
import clack from '@reasonink/clack'
import { useEffect } from 'react'

const Modal = ({ isShowing, hide, title = 'SLN PWNS' }) => {
  const escapeKey = clack.shortcut('esc', (e: KeyboardEvent) => {
    e.preventDefault()
    hide()
    alert('escape pressed')
  })

  useEffect(() => {
    isShowing ?
      escapeKey.enabled = true :
      escapeKey.enabled = false
  }, [isShowing])

  return isShowing && createPortal(
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full opacity-0 pointer-events-none'>
      <div
        className='absolute w-full h-full bg-gray-900 opacity-50'
        onClick={hide}
      ></div>

      <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg modal-container md:max-w-md">

        <div className='absolute top-0 right-0 z-50 flex flex-col items-center mt-4 mr-4 text-sm'>
          <Button onClick={hide}>
            <FontAwesomeIcon icon='times' size='2x' border fixedWidth />
            <span className="text-sm">(Esc)</span>
          </Button>
        </div>

        <div className="px-6 py-4 text-left modal-content">
          <div className="flex items-center justify-between pb-3">
            <p className="text-2xl font-bold">
              {title}
            </p>
            <Button onClick={hide}>
              <FontAwesomeIcon icon="times" size='2x' border fixedWidth />
            </Button>
          </div>

          <p>Subscribe to all our stuff!</p>

          <div className="flex justify-end pt-2">
            <Button onClick={hide}>
              ok
          </Button>
            <Button onClick={hide}>
              close
          </Button>
          </div>

        </div>
      </div>
    </div>, document.body
  )
}

export default Modal