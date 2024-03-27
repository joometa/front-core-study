import './App.css'
import { Text } from '@components/common/Text'
import { Button } from '@components/common/Button'

function App() {
  return (
    <>
      <Button>Hello</Button>
      <Button weak>Hello</Button>
      <Button color="success" size="medium">
        Hello
      </Button>
      <Button color="success" weak size="medium">
        Hello
      </Button>
      <Button color="error" size="large">
        Hello
      </Button>
      <Button color="error" weak size="large">
        Hello
      </Button>
      <Text typography="t1" color="red">
        hello
      </Text>
      <Text typography="t2" color="blue">
        hello
      </Text>
      <Text typography="t3" color="white">
        hello
      </Text>
      <Text typography="t5" color="green">
        hello
      </Text>
    </>
  )
}

export default App
