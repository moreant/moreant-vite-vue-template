/**
 * Request
 */
export type Result<T> = {
  code: number
  data: T
  defgrp_online: number
  defgrp_total: number
  num: number
}

export type Group = {
  create_time: string
  id: string
  name: string
  online: number
  total: number
  update_time: null | string
  user: string
}
