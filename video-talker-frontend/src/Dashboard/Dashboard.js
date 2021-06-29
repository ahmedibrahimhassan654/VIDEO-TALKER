import React, { useEffect}from 'react'
import logo from '../resources/logo.png';
import ActiveUsersList from './components/ActiveUserList/ActiveUserList'
import DirectCall from './components/DirectCall/DirectCall'
import DashboardInformation from './components/DashboardInformation/DashboardInformation'
import * as webRTCHandler from '../utils/webRTC/webRTCHandler'
import { connect}from 'react-redux'
import './Dashboard.css'
import { callStates } from '../store/actions/callActions';


const Dashboard = ({username,callState}) => {

   useEffect(() => {
      webRTCHandler.getLocalStream()
   }, [])

  return (
		<div className="dashboard_container background_main_color">
			<div className="dashboard_left_section">
           <div className="dashboard_content_container">
      <DirectCall />
      {callState !== callStates.CALL_IN_PROGRESS&&<DashboardInformation username={username}/>}

           </div>
				<div className="dashboard_rooms_container background_secondary_color">rooms</div>
			</div>
			<div className="dashboard_right_section background_secondary_color">
        <div className="dashboard_active_users_list">
          <ActiveUsersList/>

        </div>
				<div className="dashboard_logo_container">
					<img className="dashboard_logo_image"alt='logo' src={logo} />
				</div>
			</div>
		</div>
  );
}



const mapStateToProps = ({dashboard,call }) => ({
 ...call,
 ...dashboard
})
export default connect(mapStateToProps)( Dashboard)
