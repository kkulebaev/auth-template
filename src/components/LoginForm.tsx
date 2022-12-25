import type { Setter } from 'solid-js'
import { createSignal } from 'solid-js'
import { FormHeader } from './FormHeader'

export const LoginForm = () => {
  const [username, setUsername] = createSignal('')
  const [password, setPassword] = createSignal('')

  const [isUsernameError, setIsUsernameError] = createSignal(false)
  const [isPasswordError, setIsPasswordError] = createSignal(false)

  const inputHandler = (e: InputEvent, cb: Setter<string>) => {
    const el = e.target as HTMLInputElement
    cb(el.value)
  }

  const onSubmitHandler = (e: Event) => {
    e.preventDefault()
    setIsPasswordError(true)
    setIsUsernameError(true)
  }

  return (
    <form class='flex flex-col p-6 b-2 b-solid b-zinc-7 b-rd-2 bg-zinc-8' onSubmit={e => onSubmitHandler(e)}>
      <FormHeader />
      <div class='flex flex-col gap-1'>
        <label for='username'> Username or email address </label>
        <input id='username' class='w-xs text-base p-1' type='text' value={username()} name='username' required onInput={e => inputHandler(e, setUsername)} />
        <span class='text-red' classList={{ 'op-0': !isUsernameError() }}>
          Error
        </span>
      </div>
      <div class='flex flex-col gap-1'>
        <label for='password'> Password </label>
        <input id='password' class='w-xs text-base p-1' type='password' value={password()} name='password' required onInput={e => inputHandler(e, setPassword)} />
        <span class='text-red op-0' classList={{ 'op-0': !isPasswordError() }}>
          Error
        </span>
      </div>
      <button class='mt-4 b-1 b-solid b-transparent bg-zinc-9 hover-b-indigo' type='submit'>
        Sign in
      </button>
    </form>
  )
}
