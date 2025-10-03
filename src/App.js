import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Company/Home';
import About from './Company/About';
import Service from './Company/Service';
import Gallery from './Company/Gallery';
import Contact from './Company/Contact';
import CctvCameras from './Company/services/CctvCameras';
import MetalDetector from './Company/services/MetalDetector';
import AlarmSystems from './Company/services/AlarmSystems';
import ConsultingServices from './Company/services/ConsultingServices';
import GuardingServices from './Company/services/GuardingServices';
import SecurityEquipment from './Company/services/SecurityEquipment';
import Stewards from './Company/services/Stewards';
import AccessControl from './Company/AccessControl';
import SecurityGuard from './Company/SecurityGuard';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/security-guard" element={<SecurityGuard />} />
        <Route path="/cctv-cameras" element={<CctvCameras />} />
        <Route path="/metal-detector" element={<MetalDetector />} />
        <Route path="/alarm-systems" element={<AlarmSystems />} />
        <Route path="/access-control" element={<AccessControl />} />
        <Route path="/consulting" element={<ConsultingServices />} />
        <Route path="/security-consultancy" element={<ConsultingServices />} />
        <Route path="/security-equipment" element={<SecurityEquipment />} />
        <Route path="/guarding-services" element={<GuardingServices />} />
        <Route path="/stewards" element={<Stewards />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
