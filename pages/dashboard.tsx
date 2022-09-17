import React from "react";
import { useAuth } from "../Context/AuthContext";
import PP from "../Components/Protected/PP";
import { SidePane } from "../Components/Dashbord";
type Props = {};

const Dashboard = (props: Props) => {
  const { user } = useAuth();
  console.log(user);
  return (
    <PP>
      <div>
        <SidePane />
        <button>sign out</button>
      </div>
    </PP>
  );
};

export default Dashboard;
