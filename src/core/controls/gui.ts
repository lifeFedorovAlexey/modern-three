import type { BladeController, View } from '@tweakpane/core'
import type { Vector3 } from 'three'
import type { BladeApi } from 'tweakpane'
import * as EssentialsPlugin from '@tweakpane/plugin-essentials'
import { Pane } from 'tweakpane'
import { directionalLight } from '../scenes/lights'

interface FPSGraph extends BladeApi<BladeController<View>> {
  begin: () => void
  end: () => void
}
// Debug
export const gui = new Pane()
gui.registerPlugin(EssentialsPlugin)

export const fpsGraph = gui.addBlade({
  view: 'fpsgraph',
  label: 'FPS',
}) as FPSGraph

const DirectionalLightFolder = gui.addFolder({
  title: 'Directional Light',
})

Object.keys(directionalLight.position).forEach((key) => {
  DirectionalLightFolder.addBinding(
    directionalLight.position,
    key as keyof Vector3,
    {
      min: -100,
      max: 100,
      step: 1,
    },
  )
})
