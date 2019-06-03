const axios = require('axios')
const qs = require('qs')

const saveNewContact = (values) => {
  const contact = {
    ...values,
    subscribe: 'Subscribe'
  }

  const params = qs.stringify(contact)

  return axios.get(`https://gmail.us20.list-manage.com/subscribe/post-json?u=bdde5152be14341fd36590bac&amp;id=7e2f5ef050&c=?&${params}`)
}

module.exports = {
  saveNewContact
}
