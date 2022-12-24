import { render } from 'solid-js/web'
import { LoginForm } from './components/LoginForm'
import './assets/styles/style.css'
import 'virtual:uno.css'

const App = () => {
  return (
    <div class='h-full select-none all:transition-400'>
      <LoginForm />
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
