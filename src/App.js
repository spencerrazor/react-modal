import logo from './logo.svg';
import Modal from './components/Modal';
import { useState } from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [modalNumber, setModalNumber] = useState(1)

  const handleOpen = (num) => {setModalNumber(num); setIsOpen(true) }
  const handleClose = () => setIsOpen(false)

  return (
    <div className="App">
      <header className="App-header" onClick={handleClose}>
        <div>
        <h1>Modal example with animations</h1>
        <h1 style={{color:"#231f20"}}>Click background to exit</h1>
        </div>
        <button onClick={(e) => {e.stopPropagation(); handleOpen(1); }}>Open Modal</button>
        <AnimatePresence>
        {isOpen && (modalNumber == 1) && (
          <motion.Modal id="modal"  onClose={handleClose} onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#fcba28',
            borderRadius: "20px",
            height: "75vh"
        }}
          animate={{
            y: [750, 0],
            // scale: [0, 1],
            type:"spring",
          }}
          exit={{
            y: 750
          }}
        transition={{ ease:"easeInOut", duration: 0.5 }}>
            <h1 style={{textDecoration:"underline", textUnderlinePosition:"under"}}>Modal 1</h1>
          </motion.Modal>
        )}
        </AnimatePresence>
        <button onClick={(e) => {e.stopPropagation(); handleOpen(2); }}>Open Modal</button>
        <AnimatePresence>
        {isOpen && (modalNumber == 2) && (
          <motion.Modal id="modal"  onClose={handleClose} onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#fcba28',
            borderRadius: "20px",
            height: "75vh"
        }}
          animate={{
            y: [750, 0],
            // scale: [0, 1],
            type:"spring",
          }}
          exit={{
            y: 750
          }}
        transition={{ ease:"easeInOut", duration: 0.5 }}>
            <h1 style={{textDecoration:"underline", textUnderlinePosition:"under"}}>Modal 2</h1>
          </motion.Modal>
        )}
        </AnimatePresence>
        <button onClick={(e) => {e.stopPropagation(); handleOpen(3); }}>Open Modal</button>
        <AnimatePresence>
        {isOpen && (modalNumber == 3) && (
          <motion.Modal id="modal"  onClose={handleClose} onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#fcba28',
            borderRadius: "20px",
            height: "75vh"
        }}
          animate={{
            y: [750, 0],
            // scale: [0, 1],
            type:"spring",
          }}
          exit={{
            y: 750
          }}
        transition={{ ease:"easeInOut", duration: 0.5 }}>
            <h1 style={{textDecoration:"underline", textUnderlinePosition:"under"}}>Modal 3</h1>
          </motion.Modal>
        )}
        </AnimatePresence>
        <button onClick={(e) => {e.stopPropagation(); handleOpen(4); }}>Open Modal</button>
        <AnimatePresence>
        {isOpen && (modalNumber == 4) && (
          <motion.Modal id="modal"  onClose={handleClose} onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#fcba28',
            borderRadius: "20px",
            height: "75vh"
        }}
          animate={{
            y: [750, 0],
            // scale: [0, 1],
            type:"spring",
          }}
          exit={{
            y: 750
          }}
        transition={{ ease:"easeInOut", duration: 0.5 }}>
            <h1 style={{textDecoration:"underline", textUnderlinePosition:"under"}}>Modal 4</h1>
          </motion.Modal>
        )}
        </AnimatePresence>
 
      </header>
    </div>
  );
}

export default App;
