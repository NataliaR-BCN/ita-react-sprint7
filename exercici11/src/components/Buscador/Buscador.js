import { BarraBuscador } from "./Buscador.styles";

const Buscador = (props) => 

    <BarraBuscador 
        placeholder="&#128270; Introdueix un text per buscar"
        type="text" 
        id="buscador"
        name="buscador"
        onChange={props.onChangeBuscador} 
        value={props.buscador} 
       
    />

export default Buscador;
