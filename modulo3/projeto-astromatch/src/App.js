import React, { useState } from 'react'
import Header from './components/Header';
import ProfilesPage from './components/Pages/ProfilesPage'
import MatchesPage from './components/Pages/MatchesPage'

function App() {

  const [page, setPage] = useState('profiles-page')

  const renderCurrentPage = () => {
    switch (page) {
      case 'profiles-page':
        return <ProfilesPage />
      case 'matches-page':
        return <MatchesPage />
      default:
        return <ProfilesPage />
    }
  }

  const goToProfilesPage = () => {
    setPage('profiles-page')
  }

  const goToMatchesPage = () => {
    setPage('matches-page')
  }

  return (
    <section>
      <Header
        page={page}
        goToProfilesPage={goToProfilesPage}
        goToMatchesPage={goToMatchesPage}
      />
      <hr />
      <main>
        {renderCurrentPage()}
      </main>
    </section>
  );
}


export default App;
