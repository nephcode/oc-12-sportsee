// IMPORTS IMAGES ============================================= //
import Meditation from '../../assets/sports/meditation.png';
import Swim from '../../assets/sports/swim.png';
import Bike from '../../assets/sports/bike.png';
import Fitness from '../../assets/sports/fitness.png';

// IMPORTS STYLES ============================================= //
import sidebar from './sidebar.module.scss';

// COMPONENT ================================================== //
const Sidebar = () => {
  return (
    <nav className={sidebar.sidebar}>
      <div>
        <button>
          <img src={Meditation} alt="Meditation" />
        </button>
        <button>
          <img src={Swim} alt="Swim" />
        </button>
        <button>
          <img src={Bike} alt="Bike" />
        </button>
        <button>
          <img src={Fitness} alt="Fitness" />
        </button>
      </div>
      <div>
        <p>Sportsee 12 - Youcodeuse</p>
      </div>
    </nav>
  );
};
export default Sidebar;
// END ======================================================== //
