import { DivInput, InputNumber, ButtonUpDown } from './InputInteractiu.styles'

const InputInteractiu = (props) => 
    <DivInput>
        <ButtonUpDown type="button" onClick={props.handleDown} value="Down" 
            name={props.name} disabled={props.number === 1}>-</ButtonUpDown>
            <InputNumber 
                type="number" 
                id={props.id}
                name={props.name} 
                min="1"
                onChange={props.onChangeHandler} 
                value={props.number}
            />
        <ButtonUpDown type="button" onClick={props.handleUp} value="Up" name={props.name} >+</ButtonUpDown>            
    </DivInput>;


export default InputInteractiu;