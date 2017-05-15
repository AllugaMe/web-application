import { database } from '../../application.js'
import * as types from '../types.js'

export const state = {
  property: null,
  properties: []
}

export const getters = {
  [types.PROPERTY_DATA](state) {
    return state.property
  }
}

export const mutations = {
  [types.PROPERTIES_CHANGE](state, payload) {
    state.properties = payload
  },
  [types.PROPERTY_CHANGE](state, payload) {
    state.property = payload
  }
}

export const actions = {
  async [types.PROPERTY_SELECT]({ commit, dispatch }, payload) {
    database.goOnline()

    try {
      const reference = database.ref('properties').child(payload)
      var snapshot = await reference.once('value')

      if (!snapshot.exists() || !snapshot.val().active)
        throw new Error(`Can't find any property using "${payload}"`)
      var data = snapshot.val()
    } catch (error) {
      dispatch(types.ERROR_SHOW, error)
    }

    commit(types.PROPERTY_CHANGE, data || null)
  },
  async [types.PROPERTY_INSERT]({ commit, dispatch }, payload) {
    database.goOnline()

    try {
      const reference = database.ref('properties')
      const { key } = await reference.push()
      var data = {
        ...payload,
        id: key,
        active: true
      }

      reference.child(key).set(data)
    } catch (error) {
      dispatch(types.ERROR_SHOW, error)
    }

    commit(types.PROPERTY_CHANGE, data)
  },
  async [types.PROPERTY_UPDATE]({ commit, dispatch }, payload) {
    database.goOnline()
    const { id } = payload

    try {
      database.ref('properties').child(id).update(payload)
    } catch (error) {
      dispatch(types.ERROR_SHOW, error)
    }

    commit(types.PROPERTY_CHANGE, payload)
  },
  async [types.PROPERTY_DELETE]({ dispatch }, payload) {
    await dispatch(types.PROPERTY_UPDATE, {
      id: payload,
      active: false
    })
  }
}
