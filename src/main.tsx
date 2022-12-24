import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'
import './style.css'
import 'virtual:uno.css'

const App = () => {
  const [counter, setCounter] = createSignal(0)

  return (
    <div
      class='h-full text-center flex select-none all:transition-400'
      onClick={e => {
        e.preventDefault()
        setCounter(counter() + 1)
      }}>
      <div class='ma'>
        <div class='text-5xl fw100 animate-bounce-alt animate-count-infinite animate-duration-1s'>unocss</div>
        <div class='op30 text-lg fw300 m1'>The instant on-demand Atomic CSS engine. {counter()}</div>
        <div class='m2 flex justify-center text-2xl op30'>
          <a class='i-carbon-logo-github text-inherit' href='https://github.com/unocss/unocss' target='_blank'></a>
        </div>
      </div>
    </div>
  )
}

render(() => <App />, document.getElementById('app') as HTMLElement)
