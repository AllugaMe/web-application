import deepEqual from 'deep-equal'
import { auth } from 'firebase'
import { database, authentication } from './application.js'

function getReference() {
  database.goOnline()

  return database.ref('users')
}

export async function signIn() { // Login usando o "provedor" do Firebase pra se
                                 // autenticar com o Facebook.
  const provider = new auth.FacebookAuthProvider()
  provider.addScope('public_profile')
  provider.addScope('user_birthday')

  const result = await authentication.signInWithPopup(provider)
  const user = {
    id: result.user.uid,
    name: result.user.displayName,
    email: result.user.email,
    picture: result.user.photoURL
  }
  const reference = getReference().child(user.id)
  const snapshot = await reference.once('value')

  if (!snapshot.exists())
    reference.set(user)
  else if (!deepEqual(user, snapshot.val()))
    reference.update({ ...snapshot.val(), ...user })

  return user
}

export async function signOut() {
  try {
    await authentication.signOut()
  } catch (err) {
    return err
  }
}

export async function getUserById(id) {
  const reference = getReference().child(id)

  try {
    const snapshot = await reference.once('value')

    if (!snapshot.exists())
      throw new Error('User not found.')
    return snapshot.val()
  } catch (err) {
    return err
  }
}
