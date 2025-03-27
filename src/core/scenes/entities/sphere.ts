import { Mesh, MeshToonMaterial, SphereGeometry } from 'three'

export const createSphere = () => {
  const sphereMaterial = new MeshToonMaterial({ color: 'green' })
  const sphere = new Mesh(new SphereGeometry(1, 32, 32), sphereMaterial)

  sphere.position.set(0, 2, 0)
  sphere.castShadow = true

  return sphere
}
