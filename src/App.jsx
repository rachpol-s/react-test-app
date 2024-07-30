// import './App.css'
import Header from './components/Header'
import Checkbox from './components/Checkbox'
import Counter from './components/Counter'
import Video from './components/Video'
import MyList from './components/MyList'

function App() {
  const todoList = [
    { text: 'First', status: true },
    { text: 'Second', status: false },
    { text: 'Third', status: false },
  ]

  return (
    <>
      <div>
        <Header text="Hello" />
        <br />

        <Checkbox text="Checkbox1" isChecked={true} />
        <Checkbox text="Checkbox2" isChecked={false} />
        <br />

        {todoList.map((x, index) => {
          return (<Checkbox key={index} text={x.text} isChecked={x.status} />)
        })}
        <br />

        {todoList.map((x, index) =>
          (<Checkbox key={index} text={x.text} isChecked={x.status} />)
        )}
        <br />

        <Counter />
        <br />

        <Video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />
        <br />

        <MyList />
      </div>
    </>
  )
}

export default App