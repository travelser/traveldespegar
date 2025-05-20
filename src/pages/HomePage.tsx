import React from 'react';
import Hero from '../components/Hero';
import SearchTabs from '../components/SearchTabs';
import PromoSection from '../components/PromoSection';
import DestinationsSection from '../components/DestinationsSection';
import TravelAdvice from '../components/TravelAdvice';
import AppDownload from '../components/AppDownload';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SearchTabs />
      <PromoSection />
      <DestinationsSection />
      <TravelAdvice />
      <AppDownload />
    </div>
  );
};

export default HomePage;