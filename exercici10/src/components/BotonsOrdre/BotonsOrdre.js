import { FilaBotonsOrdenar, OrderButton } from "./BotonsOrdre.styles";


const BotonsOrdenar = (props) =>

    <FilaBotonsOrdenar>
        <OrderButton onClick={props.handleReiniciarOrdre} name="OrdreReiniciar">Ordre d'entrada</OrderButton>
        <OrderButton onClick={props.handleOrdreAlfabetic} name="OrdreAlfabetic">Ordre alfabètic</OrderButton>
        <OrderButton onClick={props.handleOrdreData} name="OrdreData">Ordre per data</OrderButton>    
    </FilaBotonsOrdenar>


;


export default BotonsOrdenar;