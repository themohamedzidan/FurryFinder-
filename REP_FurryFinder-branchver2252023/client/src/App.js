import './App.css';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

// Entrance 
import HomePage1    from './HomePage1';
import HomePage     from './Homepage';
import SignIn       from './SignIn';
import SignUp       from './SignUp';
import ResetPass    from './ResetPass';
import VerifyEmail  from './VerifyEmail'; // Need to check what for from singup.

// Profiles buttons
import Profile      from './Profile'; // Take to the user profile
import VetsMap      from './VetsMap'; // Take to vet map
import AddPet       from './AddPet';  // Take to add pet
import Report       from './Report';  // Take to report

// Gen information
import Navbar       from './Navbar';
import ContactUs    from './ContactUs';
import AboutUs      from './AboutUs';

import Update       from './Update';
import ReportUser   from './ReportUser';
import ReportIssue  from './ReportIssue';
import PetInfo      from './PetInfo';
import Navbar1      from './NavBar1';
import Vet          from './Vet';
import Management   from './Managment';

function App() {
  // App
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'            element={<HomePage/>}>    </Route>
      <Route path='/signin'      element={<SignIn/>}>      </Route>
      <Route path='/signup'      element={<SignUp/>}>      </Route>
      <Route path='/resetpass'   element={<ResetPass/>}>   </Route>
      <Route path='/HomePage1'   element={<HomePage1/>}>   </Route>
      <Route path='/VerifyEmail' element={<VerifyEmail/>}> </Route>

      <Route path='/Profile' element={<Profile/>}> </Route>
      <Route path='/VetsMap' element={<VetsMap/>}> </Route>
      <Route path='/AddPet'  element={<AddPet/>}>  </Route>
      <Route path='/Report'  element={<Report/>}>  </Route>

      <Route path='/Navbar'    element={<Navbar/>}>    </Route>
      <Route path='/ContactUs' element={<ContactUs/>}> </Route>
      <Route path='/AboutUs'   element={<AboutUs/>}>   </Route>

      <Route path='/Update'      element={<Update/>}>      </Route>
      <Route path='/ReportUser'  element={<ReportUser/>}>  </Route>
      <Route path='/ReportIssue' element={<ReportIssue/>}> </Route>
      <Route path='/PetInfo'     element={<PetInfo/>}>     </Route>
      <Route path='/Navbar1'     element={<Navbar1/>}>     </Route>
      <Route path='/Vet'         element={<Vet/>}>         </Route>
      <Route path='/Management'  element={<Management/>}>  </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
