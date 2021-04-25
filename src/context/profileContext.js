import React, { createContext, useState } from "react";

const ProfileContext = createContext(null);

function ProfileProvider() {
  const [profile, setProfile] = useState({});
}
