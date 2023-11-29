"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export const useHash = () => {
  const params = useParams()
  const [hash, setHash] = useState("")

  useEffect(() => {
    const currentHash = window.location.hash
    setHash(currentHash)
  }, [params])

  return hash
}
