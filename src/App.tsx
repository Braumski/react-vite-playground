import Button from './components/Button'

function App() {
  function thirdExample() {
    console.log('third example');
  }
  return (
    <div className="thirdExample">
      <button onClick={thirdExample}>
          using a separate function declaration
      </button>
    </div>
  )
}

export default App;