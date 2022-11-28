import { PanellDiv, Fila } from './Panell.styles';


const Panell = (props) => <PanellDiv>
    <form>
        <Fila>
            <label htmlFor="numPages">Número de pàgines</label> 
            <input 
                type="number" 
                id="numPages" 
                name="numPages" 
                min="1" 
                defaultValue="1" 
                onChange={props.handle} 
                value={props.numPagesValue}
            />
        </Fila>
        <Fila>
            <label htmlFor="numLangs">Número d'idiomes</label> 
            <input 
                type="number" 
                id="numLangs" 
                name="numLangs" 
                min="1" 
                defaultValue="1" 
                onChange={props.handle} 
                value={props.numLangsValue} 
            />
        </Fila>
    </form>
</PanellDiv>;

export default Panell;