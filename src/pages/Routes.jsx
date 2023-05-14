import { Component } from 'react'
import { IconButton } from '../components'

class Routes extends Component {
  static routename = '/rutas'
  render() {
    return (
      <div class="text-white flex-col my-10">
        <div class="flex">
          <div class="flex-1 grid gap-y-3">
            <h1 class="font-thin text-sm">
              ¿No está seguro de qué camino tomar?
            </h1>
            <break />
            <h1 class="font-bold text-xl">
              Rutas de <br /> aprendizaje
            </h1>
            <break />
            <h1 class="font-medium text-lg">
              Aquí presentamos dos rutas de
              <br /> aprendizaje populares para el
              <br /> desarrollo web.
            </h1>
          </div>
          <div class="grid flex-1">
            <div class="flex space-x-5 justify-center">
            <button class="rounded-full">1</button>
          <button class="rounded-full">2</button>
          <button class="rounded-full">3</button>
            </div>
          </div>
          
        </div>
        <div class="flex grid-cols-2 gap-5 justify-center">
          <button class="rounded-full">FrontEnd</button>
          <button class="rounded-full">BackEnd</button>
        </div>
      </div>
    )
  }
}

export default Routes
