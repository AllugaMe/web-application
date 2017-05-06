import * as types from '../types.js'

export const state = {
  app: {
    name: 'Nome da Aplicação',
    logo: '/img/logo.png',
    owner: {
      name: 'Dono* da Aplicação',
      link: 'https://google.com/',
      year: 2017
    }
  }
}

export const getters = {
  [types.APP_DATA](state) {
    let { owner, ...app } = state.app // Uso "spread" pra obter todas as
                                      // propriedades de app exceto "owner".
    return app
  },
  [types.OWNER_DATA](state) {
    return state.app.owner
  }
}
