import { ref } from 'vue'

const title = 'Vine'

export function Title(props: { msg: string }) {
  return vine`
    <div>
      <h2>Hello {{ title }}</h2>
      <h3>{{ msg }}</h3>
    </div>
  `
}

export function Random() {
  const num = ref(0)
  const randomPick = () => {
    num.value = Math.floor(Math.random() * 10)
  }

  return vine`
    <div>
      <button @click="randomPick">{{title}} Pick</button>
      <h4>{{ num }}</h4>
    </div>
  `
}
