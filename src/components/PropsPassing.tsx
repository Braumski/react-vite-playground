

// Data flows from parent to child
// Here Dog serves puppy as puppy serves bowl

export function Dog(){
    return (
      <Puppy name="Max" bowlShape="square" bowlStatus="full" />
    )
    
}

export function Puppy(props) {
  return(
    <div>
      {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
    </div>
  )
}

export function Bowl(props) {
  return (
    <span>
      {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
    </span>
  )
}