import Filtres from "../BotonsOrdre/BotonsOrdre";
import Buscador from "../Buscador/Buscador";

const Llistat = (props) => 

   <> 
      <h2>Llistat de pressupostos creats</h2> 
      <Filtres handleReiniciarOrdre={props.handleReiniciarOrdre} handleOrdreAlfabetic={props.handleOrdreAlfabetic} handleOrdreData={props.handleOrdreData} /> 
      <Buscador onChangeBuscador={props.handleBuscador} 
      buscador={props.handleValueBuscador}   refBarraBuscador = {props.refBarraBuscador} />
      {props.showLlistat} 

   </>

export default Llistat;