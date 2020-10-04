import { useRef, useEffect, useCallback } from "react"
import { Input, Modal } from "../../components";
import { ModalHandles } from "../../components/modal/modal.component";

export default () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<ModalHandles>(null)

  const handelOpenModal = useCallback(() => {
    modalRef.current.handleOpenModal()
  }, [])

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  return (
    <div>
      <Input
        name="input-test"
        label="Digite algo"
        ref={inputRef}
      />
      <Modal
        ref={modalRef}
      />
      <button onClick={handelOpenModal}>Abrir Modal</button>
    </div>
  )
}