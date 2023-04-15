import React from 'react'
import '../styles/Modal.css';
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({children , onClose}) {

    return (

        <div onClick={(e) => e.stopPropagation()}
          >
            { children }
        </div>
    )
}
