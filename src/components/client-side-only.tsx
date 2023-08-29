import { ReactNode, useEffect, useState } from "react"

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => {
    setHasMounted(true)
  }, [])
  return hasMounted
}

type Props = {
  children: ReactNode
}
export function ClientSideOnly({ children }: Props): JSX.Element {
  const hasMounted = useHasMounted()

  if (!hasMounted) return <></>

  return <>{children}</>
}
