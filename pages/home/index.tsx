import { useRef, useEffect } from "react"
import { Input } from "../../components/input/input.component";

export default () => {
  const inputRef = useRef<HTMLInputElement>(null)

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
    </div>
  )
}