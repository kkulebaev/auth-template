type ButtonType = 'submit' | 'reset' | 'button'

interface ButtonProps {
  label: string
  type: ButtonType
}

export const AppButton = (props: ButtonProps) => {
  return (
    <button class='mt-4 b-1 b-solid b-transparent bg-zinc-9 hover-b-indigo' type={props.type}>
      {props.label}
    </button>
  )
}
