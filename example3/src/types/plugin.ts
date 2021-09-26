import { UserData } from 'cordo'

declare module 'cordo' {
  interface UserData {
    nameReversed: string
  }
}

