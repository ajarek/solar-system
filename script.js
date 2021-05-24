const planets = document.querySelectorAll('.planet')
const p_radii = [22, 33, 50, 70, 112, 138, 165, 190]
let p_radians = new Array(8).fill(0)
const p_velocities = [1.607, 1.174, 1, 0.802, 0.434, 0.323, 0.228, 0.182]

const p_orbits = document.querySelectorAll('.p-orbit')

p_orbits.forEach((p_orbit, index) => {
   p_orbit.style.height = `${p_radii[index]}vmin`
   p_orbit.style.width = `${p_radii[index]}vmin`
   console.log(p_orbit.style.width);

})
setInterval(() => {
   planets.forEach((planet, index) => {

      planet.style.left = `${Math.cos(p_radians[index])*p_radii[index]}vmin`
      planet.style.top = `${Math.sin(p_radians[index])*p_radii[index]}vmin`
      p_radians[index] += p_velocities[index] * 0.02

   })
}, 1000 / 60)