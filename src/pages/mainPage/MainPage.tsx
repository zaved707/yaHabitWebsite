import ContentSection from "./ContentSection";
export default function MainPage() {
  return (
    <div className="main-page flex flex-col m-10 space-y-10">
      <ContentSection
        heading="Privacy Policy"
        content="This privacy policy applies to the YA Habit Tracker app for mobile devices that was created by
          zaved707."
      />
      <ContentSection
        heading="Information Collection and Use"
        content="The Application does not collect any information."
      ></ContentSection>
      <ContentSection
        heading={"Changes"}
        content="This Privacy Policy may be updated from time to time for any reason.
        
        This privacy policy is effective as of 2025-08-07"
      />
      <ContentSection heading={"Contact Us"} content="If you have any questions regarding privacy while using the Application,
      or have questions about the practices, please contact the Service Provider
      via email at zavedahmadca707@gmail.com.">

      </ContentSection>
    </div>
  );
}
