import { CHANGE_ERROR } from '../types.js'

const defaultError = {
  error: ''
}

const isError = value => value instanceof Error
const sleep = duration => new Promise(resolve => setTimeout(resolve, duration))

export const namespaced = true

export const state = { ...defaultError }

export const getters = {
  show: ({ error }) => !!error,
  message: ({ error }) => error
}

export const mutations = {
  [CHANGE_ERROR] (store, payload) {
    if (isError(payload))
      store.error = payload.message
    else if (isError(payload.error))
      store.error = payload.error.message
    else
      store.error = payload
  }
}

export const actions = {
  hideError: ({ commit }) => commit(CHANGE_ERROR, ''),
  showError: ({ commit }, payload) => commit(CHANGE_ERROR, payload)
}
