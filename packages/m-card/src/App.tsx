// import './App.css'
import { Button, Text, Input, TextField, Alert } from '@components/common'
import { useAlertContext } from '@contexts/AlertContext'

function App() {
  const { open } = useAlertContext()
  return (
    <>
      <Input placeholder="hello" invalid />
      <Button>Hello</Button>
      <Button weak>Hello</Button>
      <Button color="success" size="medium" full>
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
      <Button color="error" weak size="large" disabled>
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
      <TextField label="아이디" />
      <TextField label="패스워드" hasError />
      {/* <Alert
        open
        title="헤이 맨"
        buttonLabel="shutup"
        onButtonClick={() => {}}
        desc="와이 베이비"
      /> */}
      <Button
        onClick={() => {
          open({
            title: '카드신청완료',
            desc: '내역페이지에서 확인해주세요',
            onButtonClick: () => {},
            buttonLabel: '확인',
          })
        }}
      >
        알림 오픈
      </Button>
    </>
  )
}

export default App
