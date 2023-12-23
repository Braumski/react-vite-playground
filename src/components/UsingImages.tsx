import CatImg from '../../public/images/Angry-Kitty-Wallpaper-random-36918482-1920-1200.jpg'

export default function UsingImages(){
  return(
    <>
    <h1 id="my-cat-title">This is my Cat!</h1><span>( he's mean )</span>
    <img id="my-cat" src={CatImg} alt="Angry Cat"/>
    </>
  )
}
