import React from 'react';

import Svg from './svg1.svg';
import Svg2 from './svg2.svg';

export default function Image(props) {
  return (
    <div className={`position-relative py-5 ${props.className}`} style={props.style}> {/*just edit this line don't remove position-relative class else you can*/}
      <div className='position-absolute d-flex flex-column align-items-center' style={{ inset : "0 18% 10% 18%"}}>
        <h6 className='logoText' style={{fontSize:"4vw"}}>Been There</h6>
        <img src={Svg2} style={{ height: "35%", objectFit: 'contain' }} />
      </div>

      <img src={Svg} style={{ height: "100%", width: '100%', objectFit: 'contain' }} />
    </div>
  )
}
