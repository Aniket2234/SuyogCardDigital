import ProfileSection from '../ProfileSection';

export default function ProfileSectionExample() {
  return (
    <div className="bg-background pt-24">
      <ProfileSection
        companyName="SAHYOG"
        tagline="The Simplest way to Register and manage your Business in India"
        description="A complete solution for all your business needs"
        phone="+91-8888004466"
        email="info@sahyog.in"
      />
    </div>
  );
}
