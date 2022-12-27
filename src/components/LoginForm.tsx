import type { Setter } from 'solid-js'
import { createSignal } from 'solid-js'
import { AppButton } from './AppButton'

export const LoginForm = () => {
  const [username, setUsername] = createSignal('')
  const [password, setPassword] = createSignal('')
  const [isLoading, setIsLoading] = createSignal(false)
  const [showPassword, setShowPassword] = createSignal(false)

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
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setError({ username: username(), password: password() })
    }, 2000)
  }

  const toggleShowPassword = () => {
    document.body.classList.toggle('show-password')
    setShowPassword(!showPassword())
  }

  return (
    <form class='flex flex-col gap-4 p-6 b-2 b-solid b-zinc-7 b-rd-2' onSubmit={onSubmitHandler}>
      <div class='flex flex-col gap-2'>
        <label class='text-2xl' for='username'>
          Username or email address
        </label>
        <div class='relative'>
          <input
            id='username'
            class='text-2xl p-2'
            type='text'
            value={username()}
            name='username'
            required
            autocomplete='off'
            autocapitalize='off'
            spellcheck={false}
            onInput={e => inputHandler(e, setUsername)}
          />
        </div>
        <span class='text-red' classList={{ 'op-0': !error().username }}>
          {error().username}
        </span>
      </div>
      <div class='flex flex-col gap-1'>
        <label class='text-2xl' for='password'>
          Password
        </label>
        <div class='relative'>
          <input
            id='password'
            class='text-2xl p-2'
            type={showPassword() ? 'text' : 'password'}
            value={password()}
            name='password'
            required
            autocomplete='off'
            autocapitalize='off'
            spellcheck={false}
            onInput={e => inputHandler(e, setPassword)}
          />
          <button type='button' class='eyeball' onClick={toggleShowPassword}>
            <div class='eye'></div>
          </button>
          <div class='eye__beam'></div>
        </div>
        <span class='text-red' classList={{ 'op-0': !error().password }}>
          {error().password}
        </span>
      </div>
      <AppButton label='Sign In' type='submit' loading={isLoading()} />
    </form>
  )
}
