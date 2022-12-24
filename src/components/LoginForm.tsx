import { createSignal } from 'solid-js'
import { FormHeader } from './FormHeader'

export const LoginForm = () => {
  const [username, setUsername] = createSignal('')
  const [password, setPassword] = createSignal('')

  const usernameHandler = (e: InputEvent) => {
    const el = e.target as HTMLInputElement
    setUsername(el.value)
  }

  const passwordHandler = (e: InputEvent) => {
    const el = e.target as HTMLInputElement
    setPassword(el.value)
  }

  const onSubmitHandler = (e: Event) => {
    e.preventDefault()
    alert('submit')
  }

  return (
    <form class='flex flex-col gap-4 p-6 b-2 b-solid b-zinc-7 b-rd-2 bg-zinc-8' onSubmit={e => onSubmitHandler(e)}>
      <FormHeader />
      <div class='flex flex-col gap-1'>
        <label for='username'> Username or email address </label>
        <input id='username' class='w-xs text-base p-1' type='text' value={username()} name='username' required onInput={e => usernameHandler(e)} />
      </div>
      <div class='flex flex-col gap-1'>
        <label for='password'> Password </label>
        <input id='password' class='w-xs text-base p-1' type='password' value={password()} name='password' required onInput={e => passwordHandler(e)} />
      </div>
      <button class='b-1 b-solid b-transparent bg-zinc-9 hover-b-indigo' type='submit'>
        Sign in
      </button>
    </form>
  )
}
