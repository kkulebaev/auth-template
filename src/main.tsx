import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'
import './style.css'
import 'virtual:uno.css'

const App = () => {
  const [userName, setUserName] = createSignal('')
  const [password, setPassword] = createSignal('')

  const userNameHandler = (e: InputEvent) => {
    const el = e.target as HTMLInputElement
    setUserName(el.value)
  }

  const passwordHandler = (e: InputEvent) => {
    const el = e.target as HTMLInputElement
    setPassword(el.value)
  }

  return (
    <div class='h-full select-none all:transition-400'>
      <form class='flex flex-col gap-4'>
        <div class='flex flex-col gap-1 items-start'>
          <span> Login </span>
          <input type='text' value={userName()} onInput={e => userNameHandler(e)} />
        </div>
        <div class='flex flex-col gap-1 items-start'>
          <span> Password </span>
          <input type='text' value={password()} onInput={e => passwordHandler(e)} />
        </div>
      </form>
    </div>
  )
}

render(() => <App />, document.getElementById('app') as HTMLElement)
