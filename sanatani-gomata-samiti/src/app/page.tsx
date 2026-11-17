import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import PillarsSection from '@/components/home/PillarsSection';
import MissionSection from '@/components/home/MissionSection';
import StatsSection from '@/components/home/StatsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import ActivitiesPreview from '@/components/home/ActivitiesPreview';
import JoinSection from '@/components/home/JoinSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <MissionSection />
      <StatsSection />
      <GalleryPreview />
      <ActivitiesPreview />
      <JoinSection />
    </>
  );
}
