import React from 'react';

const allUsers = [
    { githublogin: 'SalemDrenay', name: 'Damien' },
    { githublogin: 'stellacake', name: 'Stella' },
    { githublogin: 'PolWCS', name: 'Pol' },
];

function UserProfile(props) {
    const params = props.match.params;
    return (
      <div>
        {allUsers.filter(
            user => user.githublogin === params.githublogin).map(
                user => <h2>{user.name}'s githublogin: {user.githublogin}</h2>
        )}
      </div>
    );
  }
  
  export default UserProfile;