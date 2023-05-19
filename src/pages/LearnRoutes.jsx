import { useState } from 'react'

import {
  Button,
  Container,
  LearnRoutesText,
  SearchField,
  TechnologyIcons,
} from '../components'

export default function LearnRoutes() {
  const imgStyle = 'rounded-lg z-50 my-20 shadow-md min-w-full min-h-full'
  const [imgIndex, setImgIndex] = useState(0)
  return (
    <div className="mx-auto">
      <Container className="relative z-10">
        <div className="text-white flex-col my-16">
          <div className="grid grid-cols-2">
            <LearnRoutesText hideButton />

            <div className="grid flex-1">
              <div className="flex justify-end">
                <TechnologyIcons />
              </div>
              <div className="overflow-hidden mx-6">
                <SearchField className="float-right" />
              </div>
            </div>
          </div>
          <div className="flex grid-cols-2 gap-10 justify-center my-5">
            <Button onClick={() => setImgIndex(0)}>Frontend</Button>
            <Button onClick={() => setImgIndex(1)}>Backend</Button>
          </div>
        </div>
        <div className="flex justify-center">
          {imgIndex == 0 ? (
            <img
              className={imgStyle}
              src="src\assets\frontend.png"
              alt="foto de ruta"
            />
          ) : (
            <img
              className={imgStyle}
              src="src\assets\backend.png"
              alt="foto de ruta"
            />
          )}
        </div>
      </Container>
    </div>
  )
}
