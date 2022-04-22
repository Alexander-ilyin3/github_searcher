import { InputHTMLAttributes, useState } from "react"

export const useInputControlProps = (): InputHTMLAttributes<HTMLInputElement> => {
  const [value, setValue] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(() => e?.target?.value + '' || '')
  }

  return {
    value,
    onChange,
  }
}
