import React from "react";
import { useAuth } from "../Context/AuthContext";
import PP from "../Components/Protected/PP";
import { SidePane } from "../Components/Dashbord";
import { useGetUserData } from "../hooks/useGetUserData";

type Props = {};

const Dashboard = () => {
  const { user } = useAuth();
  useGetUserData(user?.email!);
  return (
    <PP>
      <SidePane>
        <div>
          <button>sign out</button>
        </div>
      </SidePane>
    </PP>
  );
};

export default Dashboard;
