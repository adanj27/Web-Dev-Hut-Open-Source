import html5Icon from '../assets/icons/html5.svg'
import css3Icon from '../assets/icons/css3.svg'
import javascriptIcon from '../assets/icons/javascript.svg'
import reactjsIcon from '../assets/icons/reactjs.svg'
import javaIcon from '../assets/icons/java.svg'
import pythonIcon from '../assets/icons/python.svg'
import rubyIcon from '../assets/icons/ruby.svg'

export function TechnologyIcons({ className = '', ...props }) {
  return (
    <ul
      className={`my-10 direct-child:inline-block direct-child:bg-gradient-to-b direct-child:from-white direct-child:to-gray-500 direct-child:p-[0.4rem] direct-child:rounded-[50px] sm:direct-child:mr-6 direct-child:mr-3 [&_img]:w-6 [&_img]:h-6 [&_img]:object-contain [&_img]:select-none [&_img]:pointer-events-none ${className}`}
      {...props}
    >
      <li>
        <img src={html5Icon} draggable="false" />
      </li>
      <li>
        <img src={css3Icon} draggable="false" />
      </li>
      <li>
        <img src={javascriptIcon} draggable="false" />
      </li>
      <li>
        <img src={reactjsIcon} draggable="false" />
      </li>
      <li>
        <img src={javaIcon} draggable="false" />
      </li>
      <li>
        <img src={pythonIcon} draggable="false" />
      </li>
      <li>
        <img src={rubyIcon} draggable="false" />
      </li>
    </ul>
  )
}
