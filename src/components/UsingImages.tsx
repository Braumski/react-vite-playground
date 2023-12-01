import CatImg from '../images/Angry-Kitty-Wallpaper-random-36918482-1920-1200.jpg'

export default function UsingImages(){
  return(
    <>
    <h3 id="my-cat-title">This is my Cat!</h3>
    <img id="my-cat" src={CatImg} alt="Angry Cat"/>
    </>
  )
}
