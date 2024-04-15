import * as THREE from "three"

export const useScene = (ref: React.RefObject<HTMLCanvasElement>) => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: ref.current! })
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material)

    camera.position.z = 5
    scene.add(cube)
    renderer.setSize(window.innerWidth, window.innerHeight)
    const animate = () => {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
    }
    animate()
}