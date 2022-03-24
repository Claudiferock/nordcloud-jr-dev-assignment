import { NETWORKSTATIONS } from '../utilities/networkStations';
import { uid } from '../utilities/utils'

const NetworkStationsList = () => {

  let number = 1;
  return(
  <section>
    <h3 className='networks-title'>Network Stations</h3>
    <ul className='networks-list'>
      {
        NETWORKSTATIONS.map(network => {          
          let listItem = <li key={ uid() }>
            { number } | Coordinates ({ network[0] }, { network[1] }), reach { network[2] }
          </li>;
          number++;
          return listItem;
          })
      }
    </ul>
  </section>
  )
}

export default NetworkStationsList;