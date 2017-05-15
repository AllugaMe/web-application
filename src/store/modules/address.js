import * as types from '../types.js'
import { database } from '../../application.js'

export const actions = {
  async [types.STATES_DATA]({ dispatch }) {
    database.goOnline()

    try {
      const snapshot = await database.ref('states').once('value')

      if (!snapshot.exists())
        throw new Error('Can\'t get any state.')
      var data = Object.values(snapshot.val())
    } catch (error) {
      dispatch(types.ERROR_SHOW, error)
    }
    return data || []
  },
  async [types.CITIES_SELECT]({ dispatch }, payload) {
    database.goOnline()

    try {
      const reference = database.ref('cities')
      const query = reference.orderByChild('state').equalTo(payload)

      /**
       * Snapshot do banco de dados.
       * @type {firebase.database.DataSnapshot}
       */
      const snapshot = await reference.once('value')

      if (!snapshot.exists())
        throw new Error('Can\'t find city using state "${payload}".')
      var data = Object.values(snapshot.val())
    } catch (error) {
      dispatch(types.ERROR_SHOW, error)
    }

    return data || []
  }
}
