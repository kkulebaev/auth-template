import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'
import './style.css'
import 'virtual:uno.css'

const App = () => {
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
    <div class='h-full select-none all:transition-400'>
      <form class='flex flex-col gap-4 p-6 b-2 b-solid b-zinc-7 b-rd-2 bg-zinc-8' onSubmit={e => onSubmitHandler(e)}>
        <div class='flex flex-col gap-1'>
          <label for='username'> Login </label>
          <input id='username' class='w-xs' type='text' value={username()} name='username' onInput={e => usernameHandler(e)} />
        </div>
        <div class='flex flex-col gap-1'>
          <label for='password'> Password </label>
          <input id='password' class='w-xs' type='text' value={password()} name='password' onInput={e => passwordHandler(e)} />
        </div>
        <button class='b-1 b-solid b-transparent bg-zinc-9 hover-b-indigo' type='submit'>
          Sign in
        </button>
      </form>
      <p class='text-center'>
        New to AuthTemplate?&nbsp;
        <a class='c-indigo hover-c-rose' href='#'>
          Create an account.
        </a>
      </p>
    </div>
  )
}

render(() => <App />, document.getElementById('app') as HTMLElement)
