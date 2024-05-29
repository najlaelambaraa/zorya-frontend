import ProfileDisplay , { PersonInfo }from "@modules/brand/components/profileDisplay";

const BrandTemplate: React.FC = () => {
    const people: PersonInfo[] = [
      {
        imageUrl: "/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716659972990-hugo.png&w=3840&q=50",
        fullName: "HUGO MONNIER",
        profession: "Chill du groupe"
      },
      {
        imageUrl: "/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716660111176-gregoire.png&w=3840&q=50",
        fullName: "GREGOIRE DELARUE",
        profession: "L'overthinking"
      },
      {
        imageUrl: "/_next/image?url=http%3A%2F%2Flocalhost%3A9000%2Fuploads%2F1716660031710-nino.png&w=3840&q=50",
        fullName: "NINO PARMENT",
        profession: "Le rationnel"
      }
    ];
  
    return (
      
        
        <ProfileDisplay profiles={people} />
     
    );
  };
  export default BrandTemplate;
  
  
  