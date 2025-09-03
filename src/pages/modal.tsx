import { useState } from 'react'
import Modal from '../components/modal'

export default function Modal() {
    const [showModal, setShowModal] = useState();
    return (
        <div>
            <Modal
                content="sdasda"
                showModal

            />
        </div>
    )
}
