import { ref } from 'vue'

function HelloWorld(props: { msg: string }) {
  const num = ref(0)
  const randomPick = () => {
    num.value = Math.floor(Math.random() * 10)
  }

  return vine`
    <div>
      <h3>{{ msg }}</h3>
      <button @click="randomPick">Pick</button>
      <div>{{ num }}</div>
    </div>
  `
}

export default HelloWorld