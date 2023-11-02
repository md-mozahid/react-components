import Blog from './Download/blog'
import Button from './components/button'
import Input from './components/input'
import NavigationDotVertical from './components/navigationDotVertical'
import SocialMedia from './components/socialMedia'

function App() {
  return (
    <>
      <div className="text-center h-[100vh]">
        <p className="mb-10 text-3xl">Components</p>
        <hr className="mt-3 mb-3" />
        <Button className="bg-slate-600 text-white hover:bg-purple-500 ">
          Click Here
        </Button>
        <hr className="mt-3 mb-3" />
        <Input className="w-48" placeholder="Your name" />
        <hr className="mt-3 mb-3" />
        <hr className="mt-3 mb-3" />
        <div className="flex items-center justify-around">
          <SocialMedia />
          <div className="bg-slate-500 flex z-10 w-[700px] h-[300px]">
            <SocialMedia />
            <NavigationDotVertical />
          </div>
          <NavigationDotVertical />
        </div>
        <hr className="mt-3 mb-3" />
      </div>
      <Blog />
    </>
  )
}

export default App
