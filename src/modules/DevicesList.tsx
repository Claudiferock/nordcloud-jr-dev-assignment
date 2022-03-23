import { DEVICES } from '../utilities/devices';
import { uid } from '../utilities/utils'

const DevicesList = ( { selectDevice }:any ) => {

  return(
  <>
    <h2>Devices</h2>
    <ul className='devices'>
      {
        DEVICES.map(device => 
          <li key={ uid() }>
            <button onClick={ () => selectDevice(device) }>
              Device ({ device[0] }, { device[1] })
            </button>
          </li>
          )
      }
    </ul>
  </>
  )
}

export default DevicesList;