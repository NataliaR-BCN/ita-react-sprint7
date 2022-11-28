import InputInteractiu from '../InputInteractiu/InputInteractiu';
import { PanellDiv, Fila } from './Panell.styles';


const Panell = (props) => <PanellDiv>
 
        <Fila>
            <label htmlFor="numPages">Número de pàgines</label> 
            <InputInteractiu
                id={"numPages"} 
                name={"numPages"} 
                onChangeHandler={props.handle} 
                number={props.numPagesValue} 
                handleDown={props.changeNumberDown}
                handleUp={props.changeNumberUp}
            />
        </Fila>
        <Fila>
            <label htmlFor="numLangs">Número d'idiomes</label> 
            <InputInteractiu 
                id={"numLangs"} 
                name={"numLangs"} 
                onChangeHandler={props.handle} 
                number={props.numLangsValue} 
                handleDown={props.changeNumberDown}
                handleUp={props.changeNumberUp}
            />
        </Fila>

</PanellDiv>;

export default Panell;