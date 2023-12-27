
import Main from './components/Main';
import { Route, Routes } from "react-router-dom";
import SharedLayaout from "./components/SharedLayout";
import Mac from './components/page/Mac';
import Iphone from './components/page/Iphone';
import Ipad from './components/page/Ipad';
import Watch from './components/page/Watch';
import Support from './components/page/Support';
import Music from './components/page/Music';
import SinglApple from './components/SinglApple';
import Four04 from './components/Four04/Four04';
import Tv from './components/page/Tv';

function App() {
  return (
		<div>
			<Routes>
				<Route path="/" element={<SharedLayaout />}>
					<Route path="/" element={<Main />} />
					<Route path="mac" element={<Mac />} />
					<Route path="iphone" element={<Iphone />} />
					<Route path="iphones/:pid" element={<SinglApple />} />
					<Route path="ipad" element={<Ipad />} />
					<Route path="watch" element={<Watch />} />
					<Route path="Tv" element={<Tv />} />
					<Route path="music" element={<Music />} />
					<Route path="support" element={<Support />} />
					<Route path="*" element={<Four04 />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
