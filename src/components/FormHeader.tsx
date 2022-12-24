import KeyLogo from './../assets/images/key-logo.svg'

export const FormHeader = () => {
  return (
    <div class='flex justify-center gap-1'>
      <img src={KeyLogo} alt='key-logo' />
      <h1 class='text-size-2xl'>Auth Template</h1>
    </div>
  )
}
