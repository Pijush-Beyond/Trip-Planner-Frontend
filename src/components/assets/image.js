import React from 'react';

import Svg from './svg1.svg'
import Svg2 from './svg2.svg'

export default function Image() {
  return (
      <div className="position-relative py-5" style={{ width: '20%' }}> {/*just edit this line don't remove position-relative class else you can*/}
        <div className='position-absolute d-flex flex-column align-items-center' style={{ top: 0, bottom: 0, left: '25%', right: '25%' }}>
          <h6 className='logoText'>Been There</h6>
          <img src={Svg2} style={{ height: "35%", objectFit: 'contain' }} />
        </div>

        <img src={Svg} style={{ height: "100%", width: '100%', objectFit: 'contain' }} />
      </div>
  )
}
