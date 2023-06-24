import { useState } from 'react'

import frontendImage from '../assets/frontend.png'
import backendImage from '../assets/backend.png'

import {
  Button,
  Container,
  LearnRoutesText,
  TechnologyIcons,
} from '../components'

export function LearnRoutes() {
  const imgStyle = 'rounded-lg z-50 my-20 shadow-md min-w-full min-h-full'
  const [imgIndex, setImgIndex] = useState(0)
  return (
    <div className="mx-auto">
      <Container className="relative z-10">
        <div className="text-[#f1f1f1] flex-col my-16">
          <div className="grid grid-cols-2">
            <LearnRoutesText hideButton />

            <div className="grid flex-1">
              <div className="flex justify-end">
                <TechnologyIcons />
              </div>
            </div>
          </div>
          <div className="flex grid-cols-2 gap-10 justify-center items-start my-5 area area2">
            <Button onClick={() => setImgIndex(0)}>Frontend</Button>
            <Button onClick={() => setImgIndex(1)}>Backend</Button>
          </div>
        </div>
        <div className="flex justify-center">
          {imgIndex == 0 ? (
            <img className={imgStyle} src={frontendImage} alt="foto de ruta" />
          ) : (
            <img className={imgStyle} src={backendImage} alt="foto de ruta" />
          )}
        </div>
      </Container>
    </div>
  )
}
