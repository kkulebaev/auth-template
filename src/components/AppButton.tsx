type ButtonType = 'submit' | 'reset' | 'button'

interface ButtonProps {
  label: string
  type: ButtonType
  loading: boolean
}

export const AppButton = (props: ButtonProps) => {
  return (
    <button class='mt-4 p-x-5 p-y-3 text-2xl' classList={{ loading: props.loading }} type={props.type}>
      {props.label}
    </button>
  )
}
