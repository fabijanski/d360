import { WAITLIST_JOIN_PATH_ID, WAITLIST_STATUS_PATH_ID } from "@/constants"
import { useHash } from "./useHash"

export const useOverlay = () => {
  const hash = useHash()

  const overlayType = {
    [WAITLIST_STATUS_PATH_ID]: "STATUS",
    [WAITLIST_JOIN_PATH_ID]: "JOIN",
  }[hash]

  return overlayType as "STATUS" | "JOIN" | undefined
}
