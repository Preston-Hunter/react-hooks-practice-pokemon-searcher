import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, frontSprite, backSprite}) {
  const [showFront, setShowFront] = useState(true)

  return (
    <Card>
      <div onClick={()=>{setShowFront((s)=>!s)}}>
        <div className="image">{showFront?
          <img src = {frontSprite} alt="oh no!" /> :
          <img src = {backSprite} alt="oh no!" />
        }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
