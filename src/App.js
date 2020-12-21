import React, { Suspense } from 'react'

import { fetchData } from './Api'

const resource = fetchData();
function App() {
  return (
    <div >
      hello world
    </div>
  );
}
const ProfileDetails = () => {
  const user = resource.user.read();

}

export default App;
