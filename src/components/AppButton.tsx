import './../assets/styles/button.css'

type ButtonType = 'submit' | 'reset' | 'button'

interface ButtonProps {
  label: string
  type: ButtonType
  loading: boolean
}

export const AppButton = (props: ButtonProps) => {
  return (
    <button class='mt-4 b-1 b-solid b-transparent bg-zinc-9 hover-b-indigo loading' classList={{ loading: props.loading }} type={props.type}>
      {props.label}
    </button>
  )
}
