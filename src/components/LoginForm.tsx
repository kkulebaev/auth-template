import type { Setter } from 'solid-js'
import { createSignal } from 'solid-js'
import { FormHeader } from './FormHeader'
import { AppButton } from './AppButton'

export const LoginForm = () => {
  const [username, setUsername] = createSignal('')
  const [password, setPassword] = createSignal('')

  const DEFAULT_ERRORS = () => ({
    username: '',
    password: '',
  })

  const [error, setError] = createSignal(DEFAULT_ERRORS())

  const clearErrors = () => {
    setError(DEFAULT_ERRORS())
  }

  const inputHandler = (e: InputEvent, cb: Setter<string>) => {
    clearErrors()
    const el = e.target as HTMLInputElement
    cb(el.value)
  }

  const onSubmitHandler = (e: Event) => {
    e.preventDefault()
    setError({ username: username(), password: password() })
  }

  return (
    <form class='flex flex-col gap-2 p-6 b-2 b-solid b-zinc-7 b-rd-2 bg-zinc-8' onSubmit={onSubmitHandler}>
      <FormHeader />
      <div class='flex flex-col gap-1'>
        <label for='username'> Username or email address </label>
        <input id='username' class='w-xs text-base p-1' type='text' value={username()} name='username' required onInput={e => inputHandler(e, setUsername)} />
        <span class='text-red' classList={{ 'op-0': !error().username }}>
          {error().username}
        </span>
      </div>
      <div class='flex flex-col gap-1'>
        <label for='password'> Password </label>
        <input id='password' class='w-xs text-base p-1' type='password' value={password()} name='password' required onInput={e => inputHandler(e, setPassword)} />
        <span class='text-red' classList={{ 'op-0': !error().password }}>
          {error().password}
        </span>
      </div>
      <AppButton label='Sign In' type='submit' />
    </form>
  )
}
