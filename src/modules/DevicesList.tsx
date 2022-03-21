import { DEVICES } from '../utilities/devices';
import { uid } from '../utilities/utils'

const DevicesList = () => {

  return(
  <>
    <h2>Devices</h2>
    <ul className='devices'>
      {
        DEVICES.map(device => 
          <li key={ uid() }>
            Device ({ device[0] }, { device[1] })
          </li>
          )
      }
    </ul>
  </>
  )
}

export default DevicesList;