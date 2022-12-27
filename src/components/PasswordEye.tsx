import { onCleanup, onMount } from 'solid-js'

interface PasswordEyeProps {
  onEyeClickHandler: () => void
}

export const PasswordEye = (props: PasswordEyeProps) => {
  let beam: HTMLDivElement | undefined

  const getBeamRotateDegrees = (e: MouseEvent, beam: HTMLDivElement) => {
    let rect = beam.getBoundingClientRect()
    let mouseX = rect.right + rect.width / 2
    let mouseY = rect.top + rect.height / 2
    let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY)
    let degrees = rad * (20 / Math.PI) * -1 - 350
    return degrees
  }

  const moveEyeBeam = (e: MouseEvent) => {
    if (!beam) return

    const degrees = getBeamRotateDegrees(e, beam)

    document.documentElement.style.setProperty('--beamDegrees', `${degrees}deg`)
  }

  onMount(() => {
    document.documentElement.addEventListener('mousemove', e => moveEyeBeam(e))
  })

  onCleanup(() => {
    document.documentElement.removeEventListener('mousemove', e => moveEyeBeam(e))
  })

  return (
    <>
      <button type='button' class='eyeball' onClick={props.onEyeClickHandler}>
        <div class='eye'></div>
      </button>
      <div ref={beam} class='eye__beam'></div>
    </>
  )
}
