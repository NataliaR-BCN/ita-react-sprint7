import { useRef, useEffect } from 'react';
import { ModalLayout, ModalContent } from './Modal.styles';
import { createPortal } from 'react-dom';

function Modal(props) {

    let nomWebServei = ""; 
    let descripcioWebServei = "";

    if (props.name === 'numPages') {
        nomWebServei = props.number === 1 ? `una única pàgina` : `un total de ${props.number} pàgines`;
        descripcioWebServei = "de pàgines del lloc web";
    } else {
        nomWebServei = props.number === 1 ? `un únic idioma` : `un total de ${props.number} idiomes`; 
        descripcioWebServei = "d'idiomes diferents de la pàgina web";
    }


    function useModalClick(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    props.closeModal();
                }
            }
            
            document.addEventListener("mousedown", handleClickOutside);
            
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };

        }, [ref]);
    }

    const modalContent = useRef(null);
    useModalClick(modalContent);

    return (createPortal(
            <ModalLayout >

                <ModalContent ref={modalContent}>Indica el nombre {descripcioWebServei}. En aquest cas, tindrà {nomWebServei}.</ModalContent>

            </ModalLayout>, document.body)
    );
}

export default Modal;
