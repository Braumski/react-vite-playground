

// Data flows from parent to child
// Here Dog serves puppy as puppy serves bowl

/* 
Using the "interface" tag is typescript syntax for checking the
type of data served as a prop. Although having 3 components in one file
like this is unusual, I wanted it all in one place for a demonstration
of grandchild props serving and typescript.
 */
interface DogPuppyBowlProps{
  name: string;
  bowlShape: string;
  bowlStatus: string;
}

export function Dog(){
    return (
      <Puppy name="Max"/>
    )
    
}

export function Puppy({name = "Mia"}) { // name = Mia assigning default value
  return(
    <div>
      {name} has <Bowl bowlShape="square" bowlStatus="full" />
    </div>
  )
}

export function Bowl({bowlShape = "circle", bowlStatus = "full"}) {
  return (
    <span>
      {bowlShape}-shaped bowl, and it's currently {bowlStatus}
    </span>
  )
}