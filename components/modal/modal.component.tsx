import { useState, useCallback, FC, RefForwardingComponent, forwardRef, useImperativeHandle } from "react"

export interface ModalHandles {
  handleOpenModal: () => void;
}

const FowardModal: RefForwardingComponent<ModalHandles> = (props, ref) => {
  const [isVisible, setIsVisible] = useState(false)

  useImperativeHandle(ref, () => {
    return {
      handleOpenModal,
    }
  })

  const handleOpenModal = useCallback(() => {
    setIsVisible(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsVisible(false)
  }, [])

  if (!isVisible) return null

  return (
    <div>
      Modal Aberto

      <button onClick={handleCloseModal}>Fechar Modal</button>
    </div>
  )
}

export const Modal = forwardRef(FowardModal);
