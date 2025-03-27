import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { renderer } from '../renderer'
import { camera } from './camera'

export const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
