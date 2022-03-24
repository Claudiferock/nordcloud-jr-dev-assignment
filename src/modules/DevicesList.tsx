import { DEVICES } from '../utilities/devices';
import { uid } from '../utilities/utils'

const DevicesList = ( { selectDevice }:any ) => {

  return(
  <section>
    <h3 className='devices-title'>Devices</h3>
    <p>Please select a device's available coordinates to find the best network station for it</p>
    <ul className='devices-list'>
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
  </section>
  )
}

export default DevicesList;