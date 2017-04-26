export const namespaced = true

export const state = {
  application: {
    name: 'Nome da Aplicação',
    logo: '/img/logo.png',
    author: {
      name: 'Criador* da Aplicação',
      link: 'https://google.com/',
      year: new Date().getFullYear()
    }
  }
}

export const getters = {
  application: state => state.application,
  author: state => state.application.author
}
