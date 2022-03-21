import { NETWORKSTATIONS } from '../utilities/networkStations';
import { uid } from '../utilities/utils'

const NetworkStationsList = () => {

  return(
  <>
    <h2>Network Stations</h2>
    <ul>
      {
        NETWORKSTATIONS.map(network => 
          <li key={ uid() }>
            Network Station ({ network[0] }, { network[1] })
          </li>
          )
      }
    </ul>
  </>
  )
}

export default NetworkStationsList;