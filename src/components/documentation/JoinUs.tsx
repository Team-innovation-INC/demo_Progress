// -- component imports
import Dependency from './Dependency'
// -- icons imports 
import { RectangleGroupIcon, CircleStackIcon, BoltIcon, ArrowPathRoundedSquareIcon, CursorArrowRippleIcon, EyeDropperIcon } from '@heroicons/react/20/solid'

// -- static data
const dependencyInfo = [
  {title : "Manage tasks"     , Icon : RectangleGroupIcon        , description :" create the list of issues to your employee 💁 so you can assign tickets you can to any one on your github project or even update and remove it"                  },
  {title : "history data"     , Icon : CircleStackIcon           , description :" you don't know what you start with 🙎, start thinking first of data that you like to see and get your updates in a flexible list of data"                        },
  {title : "Ordering"         , Icon : ArrowPathRoundedSquareIcon, description :" you won't be affaraid of the order 🙇 it is so simple to change the ordering of tasks messages and emails event after beeing on of our client"                   },
  {title : "Drag and Drop."   , Icon : CursorArrowRippleIcon     , description :" you don't think  🤦‍♀️ just you need to drag and drop the on our site, put tasks at the right place so easier and don't forget what easy to get dynamic statistics" },
  {title : "products"         , Icon : EyeDropperIcon            , description :" you can see a basic list of products we will offering but believe that we used a strong and flexible features context. It will grow faster then you think 🏃‍♀️ 🏃‍♂️" },
  {title : "What you wait "   , Icon : BoltIcon                  , description :" We waiting you to make a look and then just don't forget to give us 👨‍💻 your feed back, that's so important for us"                                               }
]

 /*
/  / ----- Component JoinUs as a list of advantages for using the application
 */

export default function JoinUs() {
  return (
    <div>
      <ul role="list" className="mt-8 space-y-8 text-gray-600">
        {dependencyInfo.map((info, index) => {
          return (
            <Dependency key={index} {...info} />
          )
        })}
      </ul>
      <p className="mt-8">
        What you wait for it is time to see what we gives for you and just you like simple things, for our vision simplicity is the good way to get users confortable.
      </p>
    </div>
  )
}