import Box from './components/Box.jsx'
import {useState, useContext, createContext} from 'react'
import Submited from './components/Submited.jsx'
export const WidgetContext = createContext()

function App() {
    const [isSubmited, setIsSubmited] = useState(false)
    const [chosen, setChosen] = useState(0)

    return (
      <div className="App">
          <WidgetContext.Provider value = {[chosen, setChosen, isSubmited, setIsSubmited]}>
              {isSubmited ? <Submited/> : <Box/>}
          </WidgetContext.Provider>
      </div>
    );
}

export default App;

