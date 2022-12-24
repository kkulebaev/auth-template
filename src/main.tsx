import { render } from 'solid-js/web'
import { LoginForm } from './components/LoginForm'
import './assets/styles/style.css'
import 'virtual:uno.css'

const App = () => {
  return (
    <div class='h-full select-none all:transition-400'>
      <LoginForm />
      <p class='text-center'>
        Don't have an account?&nbsp;
        <a class='c-indigo hover-no-underline' href='#'>
          Sign Up
        </a>
      </p>
    </div>
  )
}

render(() => <App />, document.getElementById('app') as HTMLElement)
