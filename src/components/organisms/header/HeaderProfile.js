import React from "react";
import styles from "../header/Header.module.css";
import { useHistory } from "react-router-dom";
import { Button } from "../../atoms/button/Button";

function HeaderProfile() {

    const history = useHistory();

    return(
           <header className={styles.headerProfile}>
               <Button
                   type="button"
                   onClick={() => history.push('/profiel')}
               >
                   Profiel
               </Button>
               <Button
                   type="button"
                   onClick={() => history.push('/dezeweek')}
               >
                   Rooster deze week
               </Button>
               <Button
                   type="button"
                   onClick={() => history.push('/roostermaken')}
               >
                   Rooster maken
               </Button>
               <Button
                   type="button"
                   onClick={() => history.push('/personeel')}
               >
                   Personeels overzicht
               </Button>
               <Button
                   type="button"
                   onClick={() => history.push('/personeel/toevoegen')}
               >
                   Personeel toevoegen
               </Button>
               <Button
                   type="button"
                   onClick={() => history.push('/bedrijf')}
               >
                   Bedrijf
               </Button>
           </header>
   );
}

export default HeaderProfile;

