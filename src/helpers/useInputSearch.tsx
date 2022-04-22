import { useEffect, useState } from "react"

export const useInputSearch = <T,>({
  inputValue,
  requestFunc
}: {
  inputValue: string | undefined;
  requestFunc: (requestOptions: any) => Promise<{ items: T[] }>
}) => {
  const [response, setResponse] = useState<T[]>([])
  const [lastRqTime, setLastRqTime] = useState<number>(Date.now())
  const interval = 500

  const refreshData = async () => {
    const responce = await requestFunc({ q: inputValue, per_page: 3 })

    setResponse(responce.items)
    // console.log('---------- FAKE REQUEST')
    // const responce = {
    //   items: [
    //     { login: 'test_person', id: 1, avatar_url: '1', repos_url: '222' },
    //     { login: 'test_person one', id: 2, avatar_url: '1', repos_url: '222' },
    //     { login: 'test_person thooo', id: 3, avatar_url: '1', repos_url: '222' }
    //   ]
    // }
  }

  useEffect(() => {
    if (!inputValue || inputValue.trim().length < 2) return

    if (Date.now() < lastRqTime + interval) {
      const timer = setTimeout(() => {
        setLastRqTime(Date.now())
        refreshData()
      }, interval)
      return () => clearTimeout(timer)
    } else {
      setLastRqTime(Date.now())
      refreshData()
    }

  }, [inputValue, interval])

  return { response }
}
