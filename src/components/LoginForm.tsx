import type { Setter } from 'solid-js'
import { createSignal } from 'solid-js'
import { AppButton } from './AppButton'
import { PasswordEye } from './PasswordEye'

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
            class='text-2xl p-2 p-r-4 text-white'
            type='text'
            value={username()}
            name='username'
            required
            maxlength={25}
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
            class='text-2xl p-2 p-r-12 text-white'
            type={showPassword() ? 'text' : 'password'}
            classList={{ 'text-black': showPassword() }}
            value={password()}
            name='password'
            required
            maxlength={25}
            autocomplete='off'
            autocapitalize='off'
            spellcheck={false}
            onInput={e => inputHandler(e, setPassword)}
          />
          <PasswordEye onEyeClickHandler={toggleShowPassword} />
        </div>
        <span class='text-red' classList={{ 'op-0': !error().password }}>
          {error().password}
        </span>
      </div>
      <AppButton label='Sign In' type='submit' loading={isLoading()} />
    </form>
  )
}
