import React, { Fragment } from 'react';

import AddExperience from "forms/profile-forms/AddExperience"
import AddEducation from "forms/profile-forms/AddEducation"
import ProfileForm from "forms/profile-forms/ProfileForm"

const DashboardActions = () => {
  

  return (
    <Fragment>
      <AddExperience />
      <AddEducation />
      <ProfileForm />
    </Fragment>
  );
};

export default DashboardActions;
