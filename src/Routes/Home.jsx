import Card from '../Components/Card'
import { useContextGlobal } from '../utils/Context'

const Home = () => {


  const { state }= useContextGlobal()
  
  return (
    <main className={state.theme == 'light' ? "light" : "dark"}>
      
      <h1>Home</h1>
      <h2>This are our Dentists!!</h2> 
      <div className='card-grid'>
        {state.dentists.map(dentist =>       
        <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>)}
      </div>
    </main>
  )
}

export default Home