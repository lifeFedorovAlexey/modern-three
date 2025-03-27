import { camera, controls, fpsGraph } from '../controls'
import { renderer, scene } from '../renderer'
import { createPlane, createSphere } from './entities'
import { ambientLight, directionalLight } from './lights'

export const setupScene = () => {
  scene.add(ambientLight)
  scene.add(directionalLight)
  scene.add(createSphere())
  scene.add(createPlane())

  const loop = () => {
    fpsGraph.begin()

    controls.update()
    renderer.render(scene, camera)

    fpsGraph.end()
    requestAnimationFrame(loop)
  }

  loop()
}
