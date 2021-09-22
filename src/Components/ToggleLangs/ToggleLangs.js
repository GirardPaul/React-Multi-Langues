import React, {useContext} from "react";
import './ToggleLangs.css';
import france from '../../assets/france.svg'
import spain from '../../assets/spain.svg'
import unitedKingdom from '../../assets/united-kingdom.svg'
import {Context} from '../../context/langContext';


export default function ToggleLangs() {

  const {changeLanguage} = useContext(Context);


  return (
    <div className='container-langs'>
      <img onClick={() => changeLanguage('FR')} src={france} alt="" />
      <img onClick={() => changeLanguage('ES')} src={spain} alt="" />
      <img onClick={() => changeLanguage('EN')} src={unitedKingdom} alt="" />
    </div>
  );
}
