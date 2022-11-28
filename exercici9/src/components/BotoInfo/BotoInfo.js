import { useState } from "react";
import { InfoButton } from "./BotoInfo.styles";
import Modal from "../Modal/Modal";

function BotoInfo(props) {

    const [showModal, setShowModal] = useState(false);

    const openModal = (event) => {
        event.preventDefault();
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }


    return (

        <>
            <InfoButton onClick={openModal}>i</InfoButton>
            {showModal && <Modal name={props.name} number={props.number} closeModal={closeModal} />}
            
        </>

    );
}

export default BotoInfo;