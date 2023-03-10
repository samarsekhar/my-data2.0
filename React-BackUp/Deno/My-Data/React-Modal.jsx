import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root")

function ReactModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <div><h1>React Modal</h1>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        background: "grey"
                    },
                    content: {
                        color: "orange"
                    }
                }}
            >
                <h2>Modal Title</h2>
                <div>Modal Body</div>
                <div>
                    <button onClick={() => setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default ReactModal;